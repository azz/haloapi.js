/*!
 *! Copyright (c) 2015 Lucas Azzola
 *! Distributed under the MIT License.
 *! (See accompanying file LICENSE.md or visit:
 *!  <http://opensource.org/licenses/MIT>
 */
/// <reference path="./haloapi.d.ts"/>
/// <reference path="./lib/tsd.d.ts" />
var Stats = require("./stats");
var Metadata = require("./metadata");
var Profile = require("./profile");
var rp = require("request-promise");
var codependency = require("codependency"); // no typings? oh well
var requireOptional = codependency.register(module, {
    index: ['optionalCacheDependencies']
});
var DEBUG = !!process.env.HALOAPI_DEBUG;
var Caches = {
    get redis() {
        return requireOptional('redis');
    }
};
var HaloAPI = (function () {
    /**
     * Create an instance of the HaloAPI.
     * @param opts  Either an options object or your API key string.
     */
    function HaloAPI(opts) {
        var options = {
            apiKey: null
        };
        if (typeof opts === "string") {
            options = { apiKey: opts };
        }
        else {
            options = opts;
        }
        this.stats = new Stats(this);
        this.metadata = new Metadata(this);
        this.profile = new Profile(this);
        this.host = "https://www.haloapi.com";
        this.apiKey = options.apiKey;
        this.title = options.title || "h5";
        this.cacheName = options.cache || null;
        this.initCache(options.cacheOptions);
    }
    /** @inheritdoc */
    HaloAPI.prototype.getJSON = function (endpoint, bypassCache) {
        var _this = this;
        var options = {
            url: this.host + endpoint,
            headers: {
                'Ocp-Apim-Subscription-Key': this.apiKey,
            },
            gzip: true,
            json: true,
        };
        var promise = bypassCache
            ? Promise.reject(null)
            : this.cacheGet(endpoint);
        return promise.catch(function (cacheError) {
            DEBUG && console.log("fetching:", options.url);
            return rp.get(options)
                .then(function (response) {
                _this.cacheSet(endpoint, response);
                return response;
            })
                .catch(function (error) {
                if (error.name === "RequestError") {
                    throw error.message;
                }
                else {
                    var json = error.response.toJSON();
                    var message = json.body
                        ? json.body.message
                        : "An error occurred.";
                    if (json.statusCode == 429) {
                        return _this.duplicateRequest(message, endpoint, true);
                    }
                    throw json.statusCode + " - " + message;
                }
            });
        });
    };
    /** @inheritdoc */
    HaloAPI.prototype.getImageURL = function (endpoint) {
        var _this = this;
        var options = {
            url: this.host + endpoint,
            followRedirect: false,
            headers: {
                'Ocp-Apim-Subscription-Key': this.apiKey
            },
            resolveWithFullResponse: true
        };
        DEBUG && console.log("fetching:", options.url);
        return rp.get(options)
            .catch(function (error) {
            if (error.name === "RequestError") {
                throw error.message;
            }
            else {
                DEBUG
                    && console.log("error:", error.message, options.url);
                if (error.statusCode == 429) {
                    return _this.duplicateRequest("2", endpoint, false);
                }
                // console.info(error, response, body);
                var response = error.response;
                if (response.statusCode == 302)
                    return response.headers.location;
                throw response.statusCode;
            }
        });
    };
    /** @inheritdoc */
    HaloAPI.prototype.isGuid = function (id) {
        if (id && /^[a-zA-Z0-9\-]+$/.test(id)) {
            return true;
        }
        return false;
    };
    /** @inheritdoc */
    HaloAPI.prototype.jsonSchema = function (endpointFn) {
        // relative to this file when compiled (i.e js/)
        var path = "../haloapi-schema/";
        if ("schema" in endpointFn) {
            path += endpointFn.schema;
        }
        else {
            throw "Invalid schema endpoint function";
        }
        try {
            return require(path);
        }
        catch (error) {
            throw "Cannot find schema: " + path;
        }
    };
    HaloAPI.prototype.duplicateRequest = function (message, endpoint, isJSON) {
        var _this = this;
        // parse the response to get the seconds to next request
        var seconds = message.split(" ").filter(parseInt);
        seconds = seconds.length ? parseInt(seconds[0]) : 1;
        var wait = 100 + (seconds * 1000);
        DEBUG && console.log("retrying in:", wait);
        return new Promise(function (accept, reject) {
            setTimeout(function () {
                if (isJSON) {
                    _this.getJSON(endpoint)
                        .then(accept).catch(reject);
                }
                else {
                    _this.getImageURL(endpoint)
                        .then(accept).catch(reject);
                }
            }, wait);
        });
    };
    HaloAPI.prototype.initCache = function (cacheOptions) {
        if (!this.cacheName) {
            this.cacheClient = null;
            return;
        }
        DEBUG && console.log("initializing cache:", this.cacheName);
        switch (this.cacheName) {
            case "redis":
                if (!Caches.redis)
                    throw "ERROR: You've opted for redis caching, yet redis client is not installed."
                        + '       Run `npm install redis` first.';
                if (cacheOptions && cacheOptions.length)
                    this.cacheClient = (_a = Caches.redis).createClient.apply(_a, cacheOptions);
                else
                    this.cacheClient = Caches.redis.createClient(cacheOptions);
                break;
        }
        var _a;
    };
    HaloAPI.prototype.cacheSet = function (uri, item) {
        if (!this.cacheClient)
            return;
        var json = JSON.stringify(item);
        switch (this.cacheName) {
            case "redis":
                this.cacheClient.set("haloapi.js:uri:" + uri, json);
                DEBUG && console.log("cache set: ", uri);
                break;
        }
    };
    HaloAPI.prototype.cacheGet = function (uri) {
        var _this = this;
        if (!this.cacheClient)
            return Promise.reject("No cache specified");
        return new Promise(function (accept, reject) {
            switch (_this.cacheName) {
                case "redis":
                    _this.cacheClient.get("haloapi.js:uri:" + uri, function (err, reply) {
                        if (DEBUG)
                            reply
                                ? console.log("cache hit: ", uri)
                                : console.error("cache miss: ", uri);
                        reply ? accept(JSON.parse(reply)) : reject(err);
                    });
                    break;
            }
        });
    };
    HaloAPI.prototype.cacheClear = function () {
        var _this = this;
        if (!this.cacheClient)
            return Promise.reject("No cache in use");
        switch (this.cacheName) {
            case "redis":
                return new Promise(function (accept, reject) {
                    _this.cacheClient.keys("haloapi.js:uri:*", function (err, replies) {
                        if (!replies.length)
                            reject("Nothing to delete");
                        _this.cacheClient.del(replies, function (err, count) {
                            if (err)
                                reject(err);
                            accept(count);
                        });
                    });
                });
        }
    };
    return HaloAPI;
})();
;
module.exports = HaloAPI;

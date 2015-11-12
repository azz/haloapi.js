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
var HaloAPI = (function () {
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
        this.cacheManager = new CacheManager(this.cacheName, options.cacheOptions);
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
            : this.cacheManager.cacheGet(endpoint);
        return promise.catch(function (cacheError) {
            DEBUG && console.log("fetching:", options.url);
            return rp.get(options)
                .catch(function (error) {
                return _this.handleRequestRejection(endpoint, error, true);
            })
                .then(function (response) {
                _this.cacheManager.cacheSet(endpoint, response);
                return response;
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
            var response = error.response;
            if (response.statusCode == 302)
                return response.headers.location;
            throw error;
        })
            .catch(function (error) {
            return _this.handleRequestRejection(endpoint, error, false);
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
    HaloAPI.prototype.handleRequestRejection = function (endpoint, error, isJSON) {
        if (error.name === "RequestError") {
            throw error.message;
        }
        else {
            var json = error.response ? error.response.toJSON() : {};
            var message = json.body
                ? json.body.message
                : "An error occurred.";
            json.requestError = error;
            json.statusCode = json.statusCode || error.statusCode;
            if (json.statusCode == 429) {
                return this.duplicateRequest(message, endpoint, isJSON);
            }
            throw json;
        }
    };
    HaloAPI.prototype.duplicateRequest = function (message, endpoint, isJSON) {
        var _this = this;
        // parse the response to get the seconds to next request
        var seconds;
        if (isJSON) {
            seconds = message.split(" ").filter(parseInt);
            seconds = seconds.length ? parseInt(seconds[0]) : 2;
        }
        else {
            seconds = 2;
        }
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
    /** @inheritdoc */
    HaloAPI.prototype.cacheClear = function () {
        if (!this.cacheName)
            return Promise.reject("No cache in use");
        return this.cacheManager.cacheClear();
    };
    return HaloAPI;
})();
;
var CacheManager = (function () {
    function CacheManager(name, options) {
        this.name = name;
        this.options = options;
        if (!name) {
            this.adapter = null;
            return;
        }
        DEBUG && console.log("initializing cache:", name);
        if (!(name in CacheAdapters)) {
            throw "The cache: " + name + " is not supported.";
        }
        this.adapter = new (CacheAdapters[name])(options);
    }
    /** @inheritdoc */
    CacheManager.prototype.cacheSet = function (uri, item) {
        if (!this.adapter)
            return;
        this.adapter.set("haloapi.js:uri:" + uri, item);
        DEBUG && console.log("cache set: ", uri);
    };
    /** @inheritdoc */
    CacheManager.prototype.cacheGet = function (uri) {
        if (!this.adapter)
            return Promise.reject("No cache specified");
        return this.adapter.get("haloapi.js:uri:" + uri)
            .then(function (_) {
            DEBUG && console.log("cache hit:", uri);
            return _;
        })
            .catch(function (_) {
            DEBUG && console.log("cache miss: ", uri);
            return Promise.reject(_);
        });
    };
    /** @inheritdoc */
    CacheManager.prototype.cacheClear = function () {
        var _this = this;
        if (!this.adapter)
            return Promise.reject("No cache specied");
        return this.adapter.keys("haloapi.js:uri:*")
            .then(function (keys) {
            if (!keys.length)
                return Promise.resolve(0);
            else
                return _this.adapter.delete(keys);
        })
            .then(function (n) {
            DEBUG && console.log("cache cleared: ", n);
            return n;
        });
    };
    return CacheManager;
})();
/**
 * Redis cache adapter.
 * @todo Pull this out to a seperate directory.
 */
var RedisCache = (function () {
    /** @inheritdoc */
    function RedisCache(options) {
        this.options = options;
        this.redis = requireOptional('redis');
        if (!this.redis)
            throw "ERROR: You've opted for redis caching, yet redis "
                + "client is not installed. Run `npm install redis` first.";
        this.redisClient = Array.isArray(options)
            ? (_a = this.redis).createClient.apply(_a, options)
            : this.redis.createClient(options);
        var _a;
    }
    /** @inheritdoc */
    RedisCache.prototype.get = function (key) {
        var _this = this;
        return new Promise(function (accept, reject) {
            _this.redisClient.get(key, function (err, reply) {
                reply ? accept(JSON.parse(reply)) : reject(err);
            });
        });
    };
    /** @inheritdoc */
    RedisCache.prototype.set = function (key, value) {
        var _this = this;
        return new Promise(function (accept, reject) {
            _this.redisClient.set(key, JSON.stringify(value), function (err, ok) {
                err ? reject(err) : accept(ok);
            });
        });
    };
    /** @inheritdoc */
    RedisCache.prototype.keys = function (pattern) {
        var _this = this;
        return new Promise(function (accept, reject) {
            _this.redisClient.keys(pattern, function (err, replies) {
                err ? reject(err) : accept(replies);
            });
        });
    };
    /** @inheritdoc */
    RedisCache.prototype.delete = function (param) {
        var _this = this;
        var keys = [].concat(param);
        return new Promise(function (accept, reject) {
            _this.redisClient.del(keys, function (err, count) {
                err ? reject(err) : accept(count);
            });
        });
    };
    return RedisCache;
})();
;
var CacheAdapters = {};
CacheAdapters["redis"] = RedisCache;
module.exports = HaloAPI;

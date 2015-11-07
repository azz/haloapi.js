/// <reference path="./haloapi.d.ts"/>
/// <reference path="./lib/tsd.d.ts" />
var Stats = require("./stats");
var Metadata = require("./metadata");
var Profile = require("./profile");
var request_promise_1 = require("request-promise");
var HaloAPI = (function () {
    function HaloAPI(apiKey, title) {
        if (title === void 0) { title = "h5"; }
        this.title = title;
        this.stats = new Stats(this);
        this.metadata = new Metadata(this);
        this.profile = new Profile(this);
        this.apiKey = apiKey;
        this.host = "https://www.haloapi.com";
    }
    HaloAPI.prototype.getJSON = function (endpoint) {
        var _this = this;
        var options = {
            url: this.host + endpoint,
            headers: {
                'Ocp-Apim-Subscription-Key': this.apiKey
            },
            json: true,
        };
        process.env.HALOAPI_DEBUG && console.log("fetching:", options.url);
        // TODO check if we're running in a browser and use XMLHttpRequest
        return request_promise_1.get(options)
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
    };
    HaloAPI.prototype.getImageURL = function (endpoint) {
        var options = {
            url: this.host + endpoint,
            followRedirect: false,
            headers: {
                'Ocp-Apim-Subscription-Key': this.apiKey
            },
            resolveWithFullResponse: true
        };
        process.env.HALOAPI_DEBUG && console.log("fetching:", options.url);
        return request_promise_1.get(options)
            .catch(function (error) {
            if (error.name === "RequestError") {
                throw error.message;
            }
            else {
                // console.info(error, response, body);
                var response = error.response;
                if (response.statusCode == 302)
                    return response.headers.location;
                throw response.statusCode;
            }
        });
    };
    HaloAPI.prototype.isGuid = function (id) {
        if (id && /^[a-zA-Z0-9\-]+$/.test(id)) {
            return true;
        }
        return false;
    };
    HaloAPI.prototype.duplicateRequest = function (message, endpoint, isJSON) {
        var _this = this;
        // parse the response to get the seconds to next request
        var seconds = message.split(" ").filter(parseInt);
        seconds = seconds.length ? parseInt(seconds[0]) : 1;
        var wait = 100 + (seconds * 1000);
        process.env.HALOAPI_DEBUG && console.log("retrying in:", wait);
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
    return HaloAPI;
})();
;
module.exports = HaloAPI;

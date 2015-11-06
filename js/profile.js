/// <reference path="./haloapi.d.ts"/>
var Profile = (function () {
    function Profile(api) {
        this.api = api;
        this.title = "h5";
    }
    Profile.prototype.emblemImage = function (params, callback) {
        var endpoint = "/profile/" + this.title + "/profiles/" + encodeURIComponent(params.player) + "/emblem";
        this.api.getImageURL(endpoint + this.constructQs(params), callback);
    };
    Profile.prototype.spartanImage = function (params, callback) {
        var endpoint = "/profile/" + this.title + "/profiles/" + encodeURIComponent(params.player) + "/spartan";
        this.api.getImageURL(endpoint + this.constructQs(params), callback);
    };
    Profile.prototype.constructQs = function (params) {
        var qs = [];
        for (var key in params) {
            if (key !== "player")
                qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(params[key])));
        }
        if (qs.length)
            return "?" + qs.join(",");
        return "";
    };
    return Profile;
})();
;
module.exports = Profile;

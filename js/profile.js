/// <reference path="./haloapi.d.ts"/>
var Profile = (function () {
    function Profile(api) {
        this.api = api;
        this.title = "h5";
    }
    /** @inheritdoc */
    Profile.prototype.emblemImage = function (params) {
        var p;
        p = typeof params === "string" ? { player: params } : params;
        var endpoint = ("/profile/" + this.title + "/profiles/")
            + (encodeURIComponent(p.player) + "/emblem");
        return this.api.getImageURL(endpoint + this.constructQs(p));
    };
    /** @inheritdoc */
    Profile.prototype.spartanImage = function (params) {
        var p;
        p = typeof params === "string" ? { player: params } : params;
        var endpoint = ("/profile/" + this.title + "/profiles/")
            + (encodeURIComponent(p.player) + "/spartan");
        return this.api.getImageURL(endpoint + this.constructQs(p));
    };
    Profile.prototype.constructQs = function (params) {
        var qs = [];
        for (var key in params) {
            if (key !== "player")
                qs.push(encodeURIComponent(key) + "="
                    + encodeURIComponent(String(params[key])));
        }
        if (qs.length)
            return "?" + qs.join("&");
        return "";
    };
    return Profile;
})();
;
module.exports = Profile;

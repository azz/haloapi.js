/// <reference path="./haloapi.d.ts"/>
var Stats = (function () {
    function Stats(api) {
        this.api = api;
        this.title = "h5";
    }
    Stats.prototype.playerMatches = function (params, callback) {
        var _params = { player: null };
        if (typeof params === "object")
            _params = params;
        else
            _params = { player: params };
        var endpoint = "/stats/" + this.title + "/players/" + _params.player + "/matches";
        var qs = [];
        delete _params.player;
        for (var key in _params) {
            qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(_params[key])));
        }
        if (qs.length)
            endpoint += "?" + qs.join(",");
        this.api.getJSON(endpoint, callback);
    };
    Stats.prototype.warzoneMatchById = function (id, callback) {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON("/stats/" + this.title + "/warzone/matches/" + id, callback);
    };
    // below are incompletely typed. providing `any` instead of their respective types
    Stats.prototype.customMatchById = function (id, callback) {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON("/stats/" + this.title + "/custom/matches/" + id, callback);
    };
    Stats.prototype.campaignMatchById = function (id, callback) {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON("/stats/" + this.title + "/campaign/matches/" + id, callback);
    };
    Stats.prototype.arenaMatchById = function (id, callback) {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON("/stats/" + this.title + "/arena/matches/" + id, callback);
    };
    return Stats;
})();
;
module.exports = Stats;

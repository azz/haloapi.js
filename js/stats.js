/// <reference path="./haloapi.d.ts"/>
var Stats = (function () {
    function Stats(api) {
        this.api = api;
        this.title = "h5";
    }
    Stats.prototype.playerMatches = function (params) {
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
        return this.api.getJSON(endpoint);
    };
    Stats.prototype.warzoneMatchById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/stats/" + this.title + "/warzone/matches/" + id);
    };
    // below are incompletely typed. providing `any` instead of their respective types
    Stats.prototype.customMatchById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/stats/" + this.title + "/custom/matches/" + id);
    };
    Stats.prototype.campaignMatchById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/stats/" + this.title + "/campaign/matches/" + id);
    };
    Stats.prototype.arenaMatchById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/stats/" + this.title + "/arena/matches/" + id);
    };
    Stats.prototype.serviceRecordArena = function (player) {
        return this.serviceRecord("arena", player);
    };
    Stats.prototype.serviceRecordCampaign = function (player) {
        return this.serviceRecord("campaign", player);
    };
    Stats.prototype.serviceRecordWarzone = function (player) {
        return this.serviceRecord("warzone", player);
    };
    Stats.prototype.serviceRecordCustom = function (player) {
        return this.serviceRecord("custom", player);
    };
    Stats.prototype.serviceRecordsArena = function (players) {
        return this.serviceRecords("arena", players);
    };
    Stats.prototype.serviceRecordsCampaign = function (players) {
        return this.serviceRecords("campaign", players);
    };
    Stats.prototype.serviceRecordsWarzone = function (players) {
        return this.serviceRecords("warzone", players);
    };
    Stats.prototype.serviceRecordsCustom = function (players) {
        return this.serviceRecords("custom", players);
    };
    Stats.prototype.serviceRecord = function (gameMode, player) {
        return this.serviceRecords(gameMode, [player]);
    };
    Stats.prototype.serviceRecords = function (gameMode, players) {
        var p = players.map(encodeURIComponent).join(",");
        return this.api.getJSON("/stats/" + this.title + "/servicerecords/" + gameMode + "?players=" + p)
            .then(function (data) { return data.Results; });
    };
    return Stats;
})();
;
module.exports = Stats;

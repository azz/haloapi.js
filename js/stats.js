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
    Stats.prototype.serviceRecordArena = function (player, callback) {
        this.serviceRecord("arena", player, callback);
    };
    Stats.prototype.serviceRecordCampaign = function (player, callback) {
        this.serviceRecord("campaign", player, callback);
    };
    Stats.prototype.serviceRecordWarzone = function (player, callback) {
        this.serviceRecord("warzone", player, callback);
    };
    Stats.prototype.serviceRecordCustom = function (player, callback) {
        this.serviceRecord("custom", player, callback);
    };
    Stats.prototype.serviceRecordsArena = function (players, callback) {
        this.serviceRecords("arena", players, callback);
    };
    Stats.prototype.serviceRecordsCampaign = function (players, callback) {
        this.serviceRecords("campaign", players, callback);
    };
    Stats.prototype.serviceRecordsWarzone = function (players, callback) {
        this.serviceRecords("warzone", players, callback);
    };
    Stats.prototype.serviceRecordsCustom = function (players, callback) {
        this.serviceRecords("custom", players, callback);
    };
    Stats.prototype.serviceRecord = function (gameMode, player, callback) {
        this.serviceRecords(gameMode, [player], function (data, error) {
            if (data) {
                callback(data[0]);
            }
            else {
                callback(null, error);
            }
        });
    };
    Stats.prototype.serviceRecords = function (gameMode, players, callback) {
        var p = players.map(encodeURIComponent).join(",");
        this.api.getJSON("/stats/" + this.title + "/servicerecords/" + gameMode + "?players=" + p, function (data, error) {
            if (data) {
                callback(data.Results);
            }
            else {
                callback(null, error);
            }
        });
    };
    return Stats;
})();
;
module.exports = Stats;

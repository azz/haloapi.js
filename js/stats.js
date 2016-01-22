var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var schema = require("./schema");
var Stats = (function () {
    function Stats(api) {
        this.api = api;
        this.title = "h5";
    }
    /** @inheritdoc */
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
            endpoint += "?" + qs.join("&");
        return this.api.getJSON(endpoint, true);
    };
    /** @inheritdoc */
    Stats.prototype.warzoneMatchById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/stats/" + this.title + "/warzone/matches/" + id);
    };
    // below are incompletely typed. providing `any` instead of their respective types
    /** @inheritdoc */
    Stats.prototype.customMatchById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/stats/" + this.title + "/custom/matches/" + id);
    };
    /** @inheritdoc */
    Stats.prototype.campaignMatchById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/stats/" + this.title + "/campaign/matches/" + id);
    };
    /** @inheritdoc */
    Stats.prototype.arenaMatchById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/stats/" + this.title + "/arena/matches/" + id);
    };
    /** @inheritdoc */
    Stats.prototype.serviceRecordArena = function (player) {
        return this.serviceRecord("arena", player);
    };
    /** @inheritdoc */
    Stats.prototype.serviceRecordCampaign = function (player) {
        return this.serviceRecord("campaign", player);
    };
    /** @inheritdoc */
    Stats.prototype.serviceRecordWarzone = function (player) {
        return this.serviceRecord("warzone", player);
    };
    /** @inheritdoc */
    Stats.prototype.serviceRecordCustom = function (player) {
        return this.serviceRecord("custom", player);
    };
    /** @inheritdoc */
    Stats.prototype.serviceRecordsArena = function (players) {
        return this.serviceRecords("arena", players);
    };
    /** @inheritdoc */
    Stats.prototype.serviceRecordsCampaign = function (players) {
        return this.serviceRecords("campaign", players);
    };
    /** @inheritdoc */
    Stats.prototype.serviceRecordsWarzone = function (players) {
        return this.serviceRecords("warzone", players);
    };
    /** @inheritdoc */
    Stats.prototype.serviceRecordsCustom = function (players) {
        return this.serviceRecords("custom", players);
    };
    Stats.prototype.serviceRecord = function (gameMode, player) {
        return this.serviceRecords(gameMode, [player])
            .then(function (results) { return results[0]; });
    };
    Stats.prototype.serviceRecords = function (gameMode, players) {
        var p = players.map(encodeURIComponent).join(",");
        return this.api.getJSON("/stats/" + this.title + "/servicerecords/" + gameMode + "?players=" + p, true)
            .then(function (data) { return data.Results; });
    };
    __decorate([
        schema("stats")
    ], Stats.prototype, "playerMatches", null);
    __decorate([
        schema("stats", "warzone-matches")
    ], Stats.prototype, "warzoneMatchById", null);
    __decorate([
        schema("stats", "custom-matches")
    ], Stats.prototype, "customMatchById", null);
    __decorate([
        schema("stats", "campaign-matches")
    ], Stats.prototype, "campaignMatchById", null);
    __decorate([
        schema("stats", "arena-matches")
    ], Stats.prototype, "arenaMatchById", null);
    __decorate([
        schema("stats")
    ], Stats.prototype, "serviceRecordsArena", null);
    __decorate([
        schema("stats")
    ], Stats.prototype, "serviceRecordsCampaign", null);
    __decorate([
        schema("stats")
    ], Stats.prototype, "serviceRecordsWarzone", null);
    __decorate([
        schema("stats")
    ], Stats.prototype, "serviceRecordsCustom", null);
    return Stats;
})();
;
module.exports = Stats;

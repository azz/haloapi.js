/// <reference path="./haloapi.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var schema = require("./schema");
var Stats = (function () {
    function Stats(api) {
        this.api = api;
        this.title = "h5";
    }
    /** @inheritdoc */
    Stats.prototype.events = function (matchId) {
        if (!this.api.isGuid(matchId)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/stats/" + this.title + "/matches/" + matchId + "/events");
    };
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
    Object.defineProperty(Stats.prototype, "events",
        __decorate([
            schema("stats")
        ], Stats.prototype, "events", Object.getOwnPropertyDescriptor(Stats.prototype, "events")));
    Object.defineProperty(Stats.prototype, "playerMatches",
        __decorate([
            schema("stats")
        ], Stats.prototype, "playerMatches", Object.getOwnPropertyDescriptor(Stats.prototype, "playerMatches")));
    Object.defineProperty(Stats.prototype, "warzoneMatchById",
        __decorate([
            schema("stats", "warzone-matches")
        ], Stats.prototype, "warzoneMatchById", Object.getOwnPropertyDescriptor(Stats.prototype, "warzoneMatchById")));
    Object.defineProperty(Stats.prototype, "customMatchById",
        __decorate([
            schema("stats", "custom-matches")
        ], Stats.prototype, "customMatchById", Object.getOwnPropertyDescriptor(Stats.prototype, "customMatchById")));
    Object.defineProperty(Stats.prototype, "campaignMatchById",
        __decorate([
            schema("stats", "campaign-matches")
        ], Stats.prototype, "campaignMatchById", Object.getOwnPropertyDescriptor(Stats.prototype, "campaignMatchById")));
    Object.defineProperty(Stats.prototype, "arenaMatchById",
        __decorate([
            schema("stats", "arena-matches")
        ], Stats.prototype, "arenaMatchById", Object.getOwnPropertyDescriptor(Stats.prototype, "arenaMatchById")));
    Object.defineProperty(Stats.prototype, "serviceRecordsArena",
        __decorate([
            schema("stats")
        ], Stats.prototype, "serviceRecordsArena", Object.getOwnPropertyDescriptor(Stats.prototype, "serviceRecordsArena")));
    Object.defineProperty(Stats.prototype, "serviceRecordsCampaign",
        __decorate([
            schema("stats")
        ], Stats.prototype, "serviceRecordsCampaign", Object.getOwnPropertyDescriptor(Stats.prototype, "serviceRecordsCampaign")));
    Object.defineProperty(Stats.prototype, "serviceRecordsWarzone",
        __decorate([
            schema("stats")
        ], Stats.prototype, "serviceRecordsWarzone", Object.getOwnPropertyDescriptor(Stats.prototype, "serviceRecordsWarzone")));
    Object.defineProperty(Stats.prototype, "serviceRecordsCustom",
        __decorate([
            schema("stats")
        ], Stats.prototype, "serviceRecordsCustom", Object.getOwnPropertyDescriptor(Stats.prototype, "serviceRecordsCustom")));
    return Stats;
})();
;
module.exports = Stats;

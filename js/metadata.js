/// <reference path="./haloapi.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var schema = require('./schema');
var Metadata = (function () {
    function Metadata(api) {
        this.api = api;
        this.title = "h5";
    }
    /** @inheritdoc */
    Metadata.prototype.campaignMissions = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/campaign-missions");
    };
    /** @inheritdoc */
    Metadata.prototype.commendations = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/commendations");
    };
    /** @inheritdoc */
    Metadata.prototype.csrDesignations = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/csr-designations");
    };
    /** @inheritdoc */
    Metadata.prototype.enemies = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/enemies");
    };
    /** @inheritdoc */
    Metadata.prototype.flexibleStats = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/flexible-stats");
    };
    /** @inheritdoc */
    Metadata.prototype.gameBaseVariants = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/game-base-variants");
    };
    /** @inheritdoc */
    Metadata.prototype.gameVariantById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/metadata/" + this.title + "/metadata/game-variants/" + id);
    };
    /** @inheritdoc */
    Metadata.prototype.impulses = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/impulses");
    };
    /** @inheritdoc */
    Metadata.prototype.maps = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/maps");
    };
    /** @inheritdoc */
    Metadata.prototype.mapVariantById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/metadata/" + this.title + "/metadata/map-variants/" + id);
    };
    /** @inheritdoc */
    Metadata.prototype.medals = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/medals");
    };
    /** @inheritdoc */
    Metadata.prototype.playlists = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/playlists");
    };
    /** @inheritdoc */
    Metadata.prototype.requisitionById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/metadata/" + this.title + "/metadata/requisitions/" + id);
    };
    /** @inheritdoc */
    Metadata.prototype.requisitionPackById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/metadata/" + this.title + "/metadata/requisition-packs/" + id);
    };
    /** @inheritdoc */
    Metadata.prototype.requisitionPacksPurchasable = function () {
        var _this = this;
        var ids = [
            "3a1614d9-20a4-4817-a189-88cb781e9152",
            "3ce05b60-a118-4ad1-9617-bc04f64ac4d8",
            "5f96269a-58f8-473e-9897-42a4deb1bf09" // Gold
        ];
        return Promise.all(ids.map(function (id) { return _this.requisitionPackById(id); }));
    };
    /** @inheritdoc */
    Metadata.prototype.skulls = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/skulls");
    };
    /** @inheritdoc */
    Metadata.prototype.seasons = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/seasons");
    };
    /** @inheritdoc */
    Metadata.prototype.spartanRanks = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/spartan-ranks");
    };
    /** @inheritdoc */
    Metadata.prototype.teamColors = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/team-colors");
    };
    /** @inheritdoc */
    Metadata.prototype.vehicles = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/vehicles");
    };
    /** @inheritdoc */
    Metadata.prototype.weapons = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/weapons");
    };
    Object.defineProperty(Metadata.prototype, "campaignMissions",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "campaignMissions", Object.getOwnPropertyDescriptor(Metadata.prototype, "campaignMissions")));
    Object.defineProperty(Metadata.prototype, "commendations",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "commendations", Object.getOwnPropertyDescriptor(Metadata.prototype, "commendations")));
    Object.defineProperty(Metadata.prototype, "csrDesignations",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "csrDesignations", Object.getOwnPropertyDescriptor(Metadata.prototype, "csrDesignations")));
    Object.defineProperty(Metadata.prototype, "enemies",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "enemies", Object.getOwnPropertyDescriptor(Metadata.prototype, "enemies")));
    Object.defineProperty(Metadata.prototype, "flexibleStats",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "flexibleStats", Object.getOwnPropertyDescriptor(Metadata.prototype, "flexibleStats")));
    Object.defineProperty(Metadata.prototype, "gameBaseVariants",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "gameBaseVariants", Object.getOwnPropertyDescriptor(Metadata.prototype, "gameBaseVariants")));
    Object.defineProperty(Metadata.prototype, "gameVariantById",
        __decorate([
            schema("metadata", "game-variants")
        ], Metadata.prototype, "gameVariantById", Object.getOwnPropertyDescriptor(Metadata.prototype, "gameVariantById")));
    Object.defineProperty(Metadata.prototype, "impulses",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "impulses", Object.getOwnPropertyDescriptor(Metadata.prototype, "impulses")));
    Object.defineProperty(Metadata.prototype, "maps",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "maps", Object.getOwnPropertyDescriptor(Metadata.prototype, "maps")));
    Object.defineProperty(Metadata.prototype, "mapVariantById",
        __decorate([
            schema("metadata", "map-variants")
        ], Metadata.prototype, "mapVariantById", Object.getOwnPropertyDescriptor(Metadata.prototype, "mapVariantById")));
    Object.defineProperty(Metadata.prototype, "medals",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "medals", Object.getOwnPropertyDescriptor(Metadata.prototype, "medals")));
    Object.defineProperty(Metadata.prototype, "playlists",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "playlists", Object.getOwnPropertyDescriptor(Metadata.prototype, "playlists")));
    Object.defineProperty(Metadata.prototype, "requisitionById",
        __decorate([
            schema("metadata", "requisitions")
        ], Metadata.prototype, "requisitionById", Object.getOwnPropertyDescriptor(Metadata.prototype, "requisitionById")));
    Object.defineProperty(Metadata.prototype, "requisitionPackById",
        __decorate([
            schema("metadata", "requisition-packs")
        ], Metadata.prototype, "requisitionPackById", Object.getOwnPropertyDescriptor(Metadata.prototype, "requisitionPackById")));
    Object.defineProperty(Metadata.prototype, "skulls",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "skulls", Object.getOwnPropertyDescriptor(Metadata.prototype, "skulls")));
    Object.defineProperty(Metadata.prototype, "spartanRanks",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "spartanRanks", Object.getOwnPropertyDescriptor(Metadata.prototype, "spartanRanks")));
    Object.defineProperty(Metadata.prototype, "teamColors",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "teamColors", Object.getOwnPropertyDescriptor(Metadata.prototype, "teamColors")));
    Object.defineProperty(Metadata.prototype, "vehicles",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "vehicles", Object.getOwnPropertyDescriptor(Metadata.prototype, "vehicles")));
    Object.defineProperty(Metadata.prototype, "weapons",
        __decorate([
            schema("metadata")
        ], Metadata.prototype, "weapons", Object.getOwnPropertyDescriptor(Metadata.prototype, "weapons")));
    return Metadata;
})();
;
module.exports = Metadata;

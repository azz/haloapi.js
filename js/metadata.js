/// <reference path="./haloapi.d.ts"/>
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
        return this.api.getJSON("/metadata/" + this.title + "/metadata/campaign-missions");
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
    return Metadata;
})();
;
module.exports = Metadata;

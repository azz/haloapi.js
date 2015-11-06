/// <reference path="./haloapi.d.ts"/>
var Metadata = (function () {
    function Metadata(api) {
        this.api = api;
        this.title = "h5";
    }
    Metadata.prototype.campaignMissions = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/campaign-missions");
    };
    Metadata.prototype.commendations = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/commendations");
    };
    Metadata.prototype.csrDesignations = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/campaign-missions");
    };
    Metadata.prototype.enemies = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/enemies");
    };
    Metadata.prototype.flexibleStats = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/flexible-stats");
    };
    Metadata.prototype.gameBaseVariants = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/game-base-variants");
    };
    Metadata.prototype.gameVariantById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/metadata/" + this.title + "/metadata/game-variants/" + id);
    };
    Metadata.prototype.impulses = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/impulses");
    };
    Metadata.prototype.maps = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/maps");
    };
    Metadata.prototype.mapVariantById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/metadata/" + this.title + "/metadata/map-variants/" + id);
    };
    Metadata.prototype.medals = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/medals");
    };
    Metadata.prototype.playlists = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/playlists");
    };
    Metadata.prototype.requisitionById = function (id) {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON("/metadata/" + this.title + "/metadata/requisitions/" + id);
    };
    Metadata.prototype.requisitionPacks = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/requisition-packs");
    };
    Metadata.prototype.skulls = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/skulls");
    };
    Metadata.prototype.spartanRanks = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/spartan-ranks");
    };
    Metadata.prototype.teamColors = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/team-colors");
    };
    Metadata.prototype.vehicles = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/vehicles");
    };
    Metadata.prototype.weapons = function () {
        return this.api.getJSON("/metadata/" + this.title + "/metadata/weapons");
    };
    return Metadata;
})();
;
module.exports = Metadata;

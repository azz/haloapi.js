/// <reference path="./haloapi.d.ts"/>
var Metadata = (function () {
    function Metadata(api) {
        this.api = api;
        this.title = "h5";
    }
    Metadata.prototype.campaignMissions = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/campaign-missions", callback);
    };
    Metadata.prototype.commendations = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/commendations", callback);
    };
    Metadata.prototype.csrDesignations = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/campaign-missions", callback);
    };
    Metadata.prototype.enemies = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/enemies", callback);
    };
    Metadata.prototype.flexibleStats = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/flexible-stats", callback);
    };
    Metadata.prototype.gameBaseVariants = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/game-base-variants", callback);
    };
    Metadata.prototype.gameVariantById = function (id, callback) {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON("/metadata/" + this.title + "/metadata/game-variants/" + id, callback);
    };
    Metadata.prototype.impulses = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/impulses", callback);
    };
    Metadata.prototype.maps = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/maps", callback);
    };
    Metadata.prototype.mapVariantById = function (id, callback) {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON("/metadata/" + this.title + "/metadata/map-variants/" + id, callback);
    };
    Metadata.prototype.medals = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/medals", callback);
    };
    Metadata.prototype.playlists = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/playlists", callback);
    };
    Metadata.prototype.requisitionById = function (id, callback) {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON("/metadata/" + this.title + "/metadata/requisitions/" + id, callback);
    };
    Metadata.prototype.requisitionPacks = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/requisition-packs", callback);
    };
    Metadata.prototype.skulls = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/skulls", callback);
    };
    Metadata.prototype.spartanRanks = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/spartan-ranks", callback);
    };
    Metadata.prototype.teamColors = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/team-colors", callback);
    };
    Metadata.prototype.vehicles = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/vehicles", callback);
    };
    Metadata.prototype.weapons = function (callback) {
        this.api.getJSON("/metadata/" + this.title + "/metadata/weapons", callback);
    };
    return Metadata;
})();
;
module.exports = Metadata;

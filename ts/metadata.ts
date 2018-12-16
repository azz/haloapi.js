/// <reference path="./haloapi.d.ts"/>

import schema = require('./schema');

class Metadata implements IMetadata {
    private title: string;    

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }

    /** @inheritdoc */
    @schema("metadata")
    campaignMissions(): Promise<CampaignMissions> {
        return this.api.getJSON<CampaignMissions>(
            `/metadata/${this.title}/metadata/campaign-missions`);
    }

    /** @inheritdoc */
    @schema("metadata")
    commendations(): Promise<Commendations> {
        return this.api.getJSON<Commendations>(
            `/metadata/${this.title}/metadata/commendations`);
    }

    /** @inheritdoc */
    @schema("metadata")
    csrDesignations(): Promise<CSRDesignations> {
        return this.api.getJSON<CSRDesignations>(
            `/metadata/${this.title}/metadata/csr-designations`);
    }
    
    /** @inheritdoc */
    @schema("metadata")
    enemies(): Promise<Enemies> {
        return this.api.getJSON<Enemies>(
            `/metadata/${this.title}/metadata/enemies`);
    }   

    /** @inheritdoc */
    @schema("metadata")
    flexibleStats(): Promise<FlexibleStats> {
        return this.api.getJSON<FlexibleStats>(
            `/metadata/${this.title}/metadata/flexible-stats`);
    }   

    /** @inheritdoc */
    @schema("metadata")
    gameBaseVariants(): Promise<GameBaseVariants> {
        return this.api.getJSON<GameBaseVariants>(
            `/metadata/${this.title}/metadata/game-base-variants`);
    }   

    /** @inheritdoc */
    @schema("metadata", "game-variants")
    gameVariantById(id: guid): Promise<GameVariant> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<GameVariant>(
            `/metadata/${this.title}/metadata/game-variants/${id}`);
    }   

    /** @inheritdoc */
    @schema("metadata")
    impulses(): Promise<Impulses> {
        return this.api.getJSON<Impulses>(
            `/metadata/${this.title}/metadata/impulses`);
    }   

    /** @inheritdoc */
    @schema("metadata")
    maps(): Promise<Maps> {
        return this.api.getJSON<Maps>(
            `/metadata/${this.title}/metadata/maps`);
    }   

    /** @inheritdoc */
    @schema("metadata", "map-variants")
    mapVariantById(id: guid): Promise<MapVariant> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<MapVariant>(
            `/metadata/${this.title}/metadata/map-variants/${id}`);
    }   

    /** @inheritdoc */
    @schema("metadata")
    medals(): Promise<Medals> {
        return this.api.getJSON<Medals>(
            `/metadata/${this.title}/metadata/medals`);
    }   

    /** @inheritdoc */
    @schema("metadata")
    playlists(): Promise<Playlists> {
        return this.api.getJSON<Playlists>(
            `/metadata/${this.title}/metadata/playlists`);
    }   

    /** @inheritdoc */
    @schema("metadata", "requisitions")
    requisitionById(id: guid): Promise<Requistion> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<Requistion>(
            `/metadata/${this.title}/metadata/requisitions/${id}`);
    }   

    /** @inheritdoc */
    @schema("metadata", "requisition-packs")
    requisitionPackById(id: guid): Promise<RequisitionPack> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<RequisitionPack>(
            `/metadata/${this.title}/metadata/requisition-packs/${id}`);
    }   

    /** @inheritdoc */
    requisitionPacksPurchasable(): Promise<RequisitionPacks> {
        var ids = [ 
            "3a1614d9-20a4-4817-a189-88cb781e9152", // Bronze
            "3ce05b60-a118-4ad1-9617-bc04f64ac4d8", // Silver
            "5f96269a-58f8-473e-9897-42a4deb1bf09"  // Gold
        ];
        return Promise.all(ids.map((id) => this.requisitionPackById(id)));
    }

    /** @inheritdoc */
    @schema("metadata")
    skulls(): Promise<Skulls> {
        return this.api.getJSON<Skulls>(
            `/metadata/${this.title}/metadata/skulls`);
    }

    /** @inheritdoc */
    seasons(): Promise<Seasons> {
        return this.api.getJSON<Seasons>(
            `/metadata/${this.title}/metadata/seasons`);
    }

    /** @inheritdoc */
    @schema("metadata")
    spartanRanks(): Promise<SpartanRanks> {
        return this.api.getJSON<SpartanRanks>(
            `/metadata/${this.title}/metadata/spartan-ranks`);
    }   

    /** @inheritdoc */
    @schema("metadata")
    teamColors(): Promise<TeamColors> {
        return this.api.getJSON<TeamColors>(
            `/metadata/${this.title}/metadata/team-colors`);
    }   

    /** @inheritdoc */
    @schema("metadata")
    vehicles(): Promise<Vehicles> {
        return this.api.getJSON<Vehicles>(
            `/metadata/${this.title}/metadata/vehicles`);
    }   

    /** @inheritdoc */
    @schema("metadata")
    weapons(): Promise<Weapons> {
        return this.api.getJSON<Weapons>(
            `/metadata/${this.title}/metadata/weapons`);
    }
};

export = Metadata;

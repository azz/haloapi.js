/// <reference path="./haloapi.d.ts"/>

class Metadata implements IMetadata {
    private title: string;

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }

    campaignMissions(callback: Callback<CampaignMissions>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/campaign-missions`, callback);
    }
    
    commendations(callback: Callback<Commendations>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/commendations`, callback);
    }

    csrDesignations(callback: Callback<CSRDesignations>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/campaign-missions`, callback);
    }
    
    enemies(callback: Callback<Enemies>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/enemies`, callback);
    }   

    flexibleStats(callback: Callback<FlexibleStats>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/flexible-stats`, callback);
    }   

    gameBaseVariants(callback: Callback<GameBaseVariants>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/game-base-variants`, callback);
    }   

    gameVariantById(id: guid, callback: Callback<GameVariant>): void {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON(`/metadata/${this.title}/metadata/game-variants/${id}`, callback);
    }   

    impulses(callback: Callback<Impulses>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/impulses`, callback);
    }   

    maps(callback: Callback<Maps>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/maps`, callback);
    }   

    mapVariantById(id: guid, callback: Callback<MapVariant>): void {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON(`/metadata/${this.title}/metadata/map-variants/${id}`, callback);
    }   

    medals(callback: Callback<Medals>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/medals`, callback);
    }   

    playlists(callback: Callback<Playlists>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/playlists`, callback);
    }   

    requisitionById(id: guid, callback: Callback<Requistion>): void {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON(`/metadata/${this.title}/metadata/requisitions/${id}`, callback);
    }   

    requisitionPacks(callback: Callback<RequisitionPacks>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/requisition-packs`, callback);
    }   

    skulls(callback: Callback<Skulls>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/skulls`, callback);
    }   

    spartanRanks(callback: Callback<SpartanRanks>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/spartan-ranks`, callback);
    }   

    teamColors(callback: Callback<TeamColors>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/team-colors`, callback);
    }   

    vehicles(callback: Callback<Vehicles>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/vehicles`, callback);
    }   

    weapons(callback: Callback<Weapons>): void {
        this.api.getJSON(`/metadata/${this.title}/metadata/weapons`, callback);
    }
};

export = Metadata;
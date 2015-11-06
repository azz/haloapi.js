/// <reference path="./haloapi.d.ts"/>

class Metadata implements IMetadata {
    private title: string;

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }

    campaignMissions(): Promise<CampaignMissions> {
        return this.api.getJSON<CampaignMissions>(
            `/metadata/${this.title}/metadata/campaign-missions`);
    }
    
    commendations(): Promise<Commendations> {
        return this.api.getJSON<Commendations>(
            `/metadata/${this.title}/metadata/commendations`);
    }

    csrDesignations(): Promise<CSRDesignations> {
        return this.api.getJSON<CSRDesignations>(
            `/metadata/${this.title}/metadata/campaign-missions`);
    }
    
    enemies(): Promise<Enemies> {
        return this.api.getJSON<Enemies>(
            `/metadata/${this.title}/metadata/enemies`);
    }   

    flexibleStats(): Promise<FlexibleStats> {
        return this.api.getJSON<FlexibleStats>(
            `/metadata/${this.title}/metadata/flexible-stats`);
    }   

    gameBaseVariants(): Promise<GameBaseVariants> {
        return this.api.getJSON<GameBaseVariants>(
            `/metadata/${this.title}/metadata/game-base-variants`);
    }   

    gameVariantById(id: guid): Promise<GameVariant> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<GameVariant>(
            `/metadata/${this.title}/metadata/game-variants/${id}`);
    }   

    impulses(): Promise<Impulses> {
        return this.api.getJSON<Impulses>(
            `/metadata/${this.title}/metadata/impulses`);
    }   

    maps(): Promise<Maps> {
        return this.api.getJSON<Maps>(
            `/metadata/${this.title}/metadata/maps`);
    }   

    mapVariantById(id: guid): Promise<MapVariant> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<MapVariant>(
            `/metadata/${this.title}/metadata/map-variants/${id}`);
    }   

    medals(): Promise<Medals> {
        return this.api.getJSON<Medals>(
            `/metadata/${this.title}/metadata/medals`);
    }   

    playlists(): Promise<Playlists> {
        return this.api.getJSON<Playlists>(
            `/metadata/${this.title}/metadata/playlists`);
    }   

    requisitionById(id: guid): Promise<Requistion> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<Requistion>(
            `/metadata/${this.title}/metadata/requisitions/${id}`);
    }   

    requisitionPacks(): Promise<RequisitionPacks> {
        return this.api.getJSON<RequisitionPacks>(
            `/metadata/${this.title}/metadata/requisition-packs`);
    }   

    skulls(): Promise<Skulls> {
        return this.api.getJSON<Skulls>(
            `/metadata/${this.title}/metadata/skulls`);
    }   

    spartanRanks(): Promise<SpartanRanks> {
        return this.api.getJSON<SpartanRanks>(
            `/metadata/${this.title}/metadata/spartan-ranks`);
    }   

    teamColors(): Promise<TeamColors> {
        return this.api.getJSON<TeamColors>(
            `/metadata/${this.title}/metadata/team-colors`);
    }   

    vehicles(): Promise<Vehicles> {
        return this.api.getJSON<Vehicles>(
            `/metadata/${this.title}/metadata/vehicles`);
    }   

    weapons(): Promise<Weapons> {
        return this.api.getJSON<Weapons>(
            `/metadata/${this.title}/metadata/weapons`);
    }
};

export = Metadata;
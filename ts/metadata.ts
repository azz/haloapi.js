/// <reference path="./haloapi.d.ts"/>

class Metadata implements IMetadata {
    private title: string;    

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }

    /** @inheritdoc */
    campaignMissions(): Promise<CampaignMissions> {
        return this.api.getJSON<CampaignMissions>(
            `/metadata/${this.title}/metadata/campaign-missions`);
    }
    
    /** @inheritdoc */
    commendations(): Promise<Commendations> {
        return this.api.getJSON<Commendations>(
            `/metadata/${this.title}/metadata/commendations`);
    }

    /** @inheritdoc */
    csrDesignations(): Promise<CSRDesignations> {
        return this.api.getJSON<CSRDesignations>(
            `/metadata/${this.title}/metadata/campaign-missions`);
    }
    
    /** @inheritdoc */
    enemies(): Promise<Enemies> {
        return this.api.getJSON<Enemies>(
            `/metadata/${this.title}/metadata/enemies`);
    }   

    /** @inheritdoc */
    flexibleStats(): Promise<FlexibleStats> {
        return this.api.getJSON<FlexibleStats>(
            `/metadata/${this.title}/metadata/flexible-stats`);
    }   

    /** @inheritdoc */
    gameBaseVariants(): Promise<GameBaseVariants> {
        return this.api.getJSON<GameBaseVariants>(
            `/metadata/${this.title}/metadata/game-base-variants`);
    }   

    /** @inheritdoc */
    gameVariantById(id: guid): Promise<GameVariant> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<GameVariant>(
            `/metadata/${this.title}/metadata/game-variants/${id}`);
    }   

    /** @inheritdoc */
    impulses(): Promise<Impulses> {
        return this.api.getJSON<Impulses>(
            `/metadata/${this.title}/metadata/impulses`);
    }   

    /** @inheritdoc */
    maps(): Promise<Maps> {
        return this.api.getJSON<Maps>(
            `/metadata/${this.title}/metadata/maps`);
    }   

    /** @inheritdoc */
    mapVariantById(id: guid): Promise<MapVariant> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<MapVariant>(
            `/metadata/${this.title}/metadata/map-variants/${id}`);
    }   

    /** @inheritdoc */
    medals(): Promise<Medals> {
        return this.api.getJSON<Medals>(
            `/metadata/${this.title}/metadata/medals`);
    }   

    /** @inheritdoc */
    playlists(): Promise<Playlists> {
        return this.api.getJSON<Playlists>(
            `/metadata/${this.title}/metadata/playlists`);
    }   

    /** @inheritdoc */
    requisitionById(id: guid): Promise<Requistion> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<Requistion>(
            `/metadata/${this.title}/metadata/requisitions/${id}`);
    }   

    /** @inheritdoc */
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
    skulls(): Promise<Skulls> {
        return this.api.getJSON<Skulls>(
            `/metadata/${this.title}/metadata/skulls`);
    }   

    /** @inheritdoc */
    spartanRanks(): Promise<SpartanRanks> {
        return this.api.getJSON<SpartanRanks>(
            `/metadata/${this.title}/metadata/spartan-ranks`);
    }   

    /** @inheritdoc */
    teamColors(): Promise<TeamColors> {
        return this.api.getJSON<TeamColors>(
            `/metadata/${this.title}/metadata/team-colors`);
    }   

    /** @inheritdoc */
    vehicles(): Promise<Vehicles> {
        return this.api.getJSON<Vehicles>(
            `/metadata/${this.title}/metadata/vehicles`);
    }   

    /** @inheritdoc */
    weapons(): Promise<Weapons> {
        return this.api.getJSON<Weapons>(
            `/metadata/${this.title}/metadata/weapons`);
    }
};

export = Metadata;
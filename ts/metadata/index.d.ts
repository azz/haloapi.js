
/// <reference path="./CampaignMissions.d.ts"/>
/// <reference path="./Commendations.d.ts"/>
/// <reference path="./CSRDesignations.d.ts"/>
/// <reference path="./Enemies.d.ts"/>
/// <reference path="./FlexibleStats.d.ts"/>
/// <reference path="./GameBaseVariants.d.ts"/>
/// <reference path="./GameVariant.d.ts"/>
/// <reference path="./Impulses.d.ts"/>
/// <reference path="./Maps.d.ts"/>
/// <reference path="./MapVariant.d.ts"/>
/// <reference path="./Medals.d.ts"/>
/// <reference path="./Playlists.d.ts"/>
/// <reference path="./Requisition.d.ts"/>
/// <reference path="./RequisitionPacks.d.ts"/>
/// <reference path="./Seasons.d.ts"/>
/// <reference path="./Skulls.d.ts"/>
/// <reference path="./SpartanRanks.d.ts"/>
/// <reference path="./TeamColors.d.ts"/>
/// <reference path="./Vehicles.d.ts"/>
/// <reference path="./Weapons.d.ts"/>

interface IMetadata {
    
    /** 
     * @api Metadata :: Campaign Missions.
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/campaign-missions
     */
    campaignMissions(): Promise<CampaignMissions>;
    
    /**
     * @api Metadata :: Commendations.
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/commendations
     */
    commendations(): Promise<Commendations>;

    /**
     * @api Metadata :: CSR Designations.
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/csr-designations
     */
    csrDesignations(): Promise<CSRDesignations>;

    /**
     * @api Metadata :: Enemies
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/enemies
     */    
    enemies(): Promise<Enemies>;
    
    /**
     * @api Metadata :: Flexible Stats
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/flexible-stats
     */
    flexibleStats(): Promise<FlexibleStats>;      

    /**
     * @api Metadata :: Game Base Variants
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/game-base-variants
     */
    gameBaseVariants(): Promise<GameBaseVariants>;
    
    /**
     * @api Metadata :: Game Variants
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/game-variants/{id}
     * @param id  An ID that uniquely identifies a Game Variant.
     */
    gameVariantById(id: guid): Promise<GameVariant>;
    
    /**
     * @api Metadata :: Impulses
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/impulses
     */
    impulses(): Promise<Impulses>;

    /**
     * @api Metadata :: Maps
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/maps
     */
    maps(): Promise<Maps>;
    
    /**
     * @api Metadata :: Map Variants
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/map-variants/{id}
     * @param id  An ID that uniquely identifies a Map Variant.
     */
    mapVariantById(id: guid): Promise<MapVariant>;

    /**
     * @api Metadata :: Medals
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/medals
     */
    medals(): Promise<Medals>;

    /**
     * @api Metadata :: Playlists
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/playlists
     */
    playlists(): Promise<Playlists>;

    /**
     * @api Metadata :: Requisitions
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/requisitions/{id}
     * @param id  An ID that uniquely identifies a Requisition.
     */
    requisitionById(id: guid): Promise<Requistion>;

    /**
     * @api Metadata :: Requisition Packs
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/requisition-packs/{id}
     * @param id  An ID that uniquely identifies a Requisition Pack.
     */
    requisitionPackById(id: guid): Promise<RequisitionPack>;

    /**
     * Fabricated endpoint, uses constant IDs to retreive 
     * the Gold, Silver and Bronze requisition packs
     */
    requisitionPacksPurchasable(): Promise<RequisitionPacks>;

    /**
     * @api Metadata :: Seasons
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/seasons
     */
    seasons(): Promise<Seasons>;

    /**
     * @api Metadata :: Skulls
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/skulls
     */
    skulls(): Promise<Skulls>;

    /**
     * @api Metadata :: Spartan Ranks
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/spartan-ranks
     */
    spartanRanks(): Promise<SpartanRanks>;

    /**
     * @api Metadata :: Team Colors
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/team-colors
     */
    teamColors(): Promise<TeamColors>;

    /**
     * @api Metadata :: Vehicles
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/vehicles
     */
    vehicles(): Promise<Vehicles>;

    /**
     * @api Metadata :: Weapons
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/weapons
     */
    weapons(): Promise<Weapons>;
}


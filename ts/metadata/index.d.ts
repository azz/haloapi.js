
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
/// <reference path="./Skulls.d.ts"/>
/// <reference path="./SpartanRanks.d.ts"/>
/// <reference path="./TeamColors.d.ts"/>
/// <reference path="./Vehicles.d.ts"/>
/// <reference path="./Weapons.d.ts"/>

interface IMetadata {
    
    /** 
     * API: Metadata -> Campaign Missions
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/campaign-missions
     * Params:
     *   {title}: Always "h5".
     */
    campaignMissions(): Promise<CampaignMissions>;
    
    /**
     * API: Metadata -> Commendations
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/commendations
     * Params:
     *   {title}: Always "h5"
     */
    commendations(): Promise<Commendations>;

    /**
     * API: Metadata -> CSR Designations
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/csr-designations
     * Params:
     *   {title}: Always "h5"
     */
    csrDesignations(): Promise<CSRDesignations>;

    /**
     * API: Metadata -> Enemies
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/enemies
     * Params:
     *   {title}: Always "h5"
     */    
    enemies(): Promise<Enemies>;
    
    /**
     * API: Metadata -> Flexible Stats
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/flexible-stats
     * Params:
     *   {title}: Always "h5"
     */
    flexibleStats(): Promise<FlexibleStats>;      

    /**
     * API: Metadata -> Game Base Variants
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/game-base-variants
     * Params:
     *   {title}: Always "h5"
     */
    gameBaseVariants(): Promise<GameBaseVariants>;
    
    /**
     * API: Metadata -> Game Variants
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/game-variants/{id}
     * Params:
     *   {title}: Always "h5"
     *   {id}: An ID that uniquely identifies a Game Variant.
     */
    gameVariantById(id: guid): Promise<GameVariant>;
    
    /**
     * API: Metadata -> Impulses
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/impulses
     * Params:
     *   {title}: Always "h5"
     */
    impulses(): Promise<Impulses>;

    /**
     * API: Metadata -> Maps
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/maps
     * Params:
     *   {title}: Always "h5"
     */
    maps(): Promise<Maps>;
    
    /**
     * API: Metadata -> Map Variants
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/map-variants/{id}
     * Params:
     *   {title}: Always "h5"
     *   {id}: An ID that uniquely identifies a Map Variant.
     */
    mapVariantById(id: guid): Promise<MapVariant>;

    /**
     * API: Metadata -> Medals
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/medals
     * Params:
     *   {title}: Always "h5"
     */
    medals(): Promise<Medals>;

    /**
     * API: Metadata -> Playlists
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/playlists
     * Params:
     *   {title}: Always "h5"
     */
    playlists(): Promise<Playlists>;

    /**
     * API: Metadata -> Requisitions
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/requisitions/{id}
     * Params:
     *   {title}: Always "h5"
     *   {id}: An ID that uniquely identifies a Requisition.
     */
    requisitionById(id: guid): Promise<Requistion>;

    /**
     * API: Metadata -> Requisition Packs
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/requisition-packs/{id}
     * Params:
     *   {title}: Always "h5"
     *   {id}: An ID that uniquely identifies a Requisition Pack.
     */
    requisitionPackById(id: guid): Promise<RequisitionPack>;

    /**
     * API: Metadata -> Skulls
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/skulls
     * Params:
     *   {title}: Always "h5"
     */
    skulls(): Promise<Skulls>;

    /**
     * API: Metadata -> Spartan Ranks
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/spartan-ranks
     * Params:
     *   {title}: Always "h5"
     */
    spartanRanks(): Promise<SpartanRanks>;

    /**
     * API: Metadata -> Team Colors
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/team-colors
     * Params:
     *   {title}: Always "h5"
     */
    teamColors(): Promise<TeamColors>;

    /**
     * API: Metadata -> Vehicles
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/vehicles
     * Params:
     *   {title}: Always "h5"
     */
    vehicles(): Promise<Vehicles>;

    /**
     * API: Metadata -> Weapons
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/weapons
     * Params:
     *   {title}: Always "h5"
     */
    weapons(): Promise<Weapons>;
}


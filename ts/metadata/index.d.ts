
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
    campaignMissions(callback: Callback<CampaignMissions>): void;
    
    /**
     * API: Metadata -> Commendations
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/commendations
     * Params:
     *   {title}: Always "h5"
     */
    commendations(callback: Callback<Commendations>): void;

    /**
     * API: Metadata -> CSR Designations
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/csr-designations
     * Params:
     *   {title}: Always "h5"
     */
    csrDesignations(callback: Callback<CSRDesignations>): void;

    /**
     * API: Metadata -> Enemies
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/enemies
     * Params:
     *   {title}: Always "h5"
     */    
    enemies(callback: Callback<Enemies>): void;
    
    /**
     * API: Metadata -> Flexible Stats
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/flexible-stats
     * Params:
     *   {title}: Always "h5"
     */
    flexibleStats(callback: Callback<FlexibleStats>): void;      

    /**
     * API: Metadata -> Game Base Variants
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/game-base-variants
     * Params:
     *   {title}: Always "h5"
     */
    gameBaseVariants(callback: Callback<GameBaseVariants>): void;
    
    /**
     * API: Metadata -> Game Variants
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/game-variants/{id}
     * Params:
     *   {title}: Always "h5"
     *   {id}: An ID that uniquely identifies a Game Variant.
     */
    gameVariantById(id: guid, callback: Callback<GameVariant>): void;
    
    /**
     * API: Metadata -> Impulses
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/impulses
     * Params:
     *   {title}: Always "h5"
     */
    impulses(callback: Callback<Impulses>): void;

    /**
     * API: Metadata -> Maps
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/maps
     * Params:
     *   {title}: Always "h5"
     */
    maps(callback: Callback<Maps>): void;
    
    /**
     * API: Metadata -> Map Variants
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/map-variants/{id}
     * Params:
     *   {title}: Always "h5"
     *   {id}: An ID that uniquely identifies a Map Variant.
     */
    mapVariantById(id: guid, callback: Callback<MapVariant>): void;

    /**
     * API: Metadata -> Medals
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/medals
     * Params:
     *   {title}: Always "h5"
     */
    medals(callback: Callback<Medals>): void;

    /**
     * API: Metadata -> Playlists
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/playlists
     * Params:
     *   {title}: Always "h5"
     */
    playlists(callback: Callback<Playlists>): void;

    /**
     * API: Metadata -> Requisitions
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/requisitions/{id}
     * Params:
     *   {title}: Always "h5"
     *   {id}: An ID that uniquely identifies a Requisition.
     */
    requisitionById(id: guid, callback: Callback<Requistion>): void;

    /**
     * API: Metadata -> Requisition Packs
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/requisition-packs
     * Params:
     *   {title}: Always "h5"
     */
    requisitionPacks(callback: Callback<RequisitionPacks>): void;

    /**
     * API: Metadata -> Skulls
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/skulls
     * Params:
     *   {title}: Always "h5"
     */
    skulls(callback: Callback<Skulls>): void;

    /**
     * API: Metadata -> Spartan Ranks
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/spartan-ranks
     * Params:
     *   {title}: Always "h5"
     */
    spartanRanks(callback: Callback<SpartanRanks>): void;

    /**
     * API: Metadata -> Team Colors
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/team-colors
     * Params:
     *   {title}: Always "h5"
     */
    teamColors(callback: Callback<TeamColors>): void;

    /**
     * API: Metadata -> Vehicles
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/vehicles
     * Params:
     *   {title}: Always "h5"
     */
    vehicles(callback: Callback<Vehicles>): void;

    /**
     * API: Metadata -> Weapons
     * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/weapons
     * Params:
     *   {title}: Always "h5"
     */
    weapons(callback: Callback<Weapons>): void;
}


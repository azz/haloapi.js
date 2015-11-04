/// <reference path="CampaignMissions.d.ts"/>
/// <reference path="Commendations.d.ts"/>
/// <reference path="CSRDesignations.d.ts"/>
/// <reference path="Enemies.d.ts"/>
/// <reference path="FlexibleStats.d.ts"/>
/// <reference path="GameBaseVariants.d.ts"/>
/// <reference path="GameVariant.d.ts"/>
/// <reference path="Impulses.d.ts"/>
/// <reference path="Maps.d.ts"/>
/// <reference path="MapVariant.d.ts"/>
/// <reference path="Medals.d.ts"/>
/// <reference path="Playlists.d.ts"/>
/// <reference path="Requisition.d.ts"/>
/// <reference path="RequisitionPacks.d.ts"/>
/// <reference path="Skulls.d.ts"/>
/// <reference path="SpartanRanks.d.ts"/>
/// <reference path="TeamColors.d.ts"/>
/// <reference path="Vehicles.d.ts"/>
/// <reference path="Weapons.d.ts"/>

interface Metadata {
    
    campaignMissions(callback: Callback<CampaignMissions>): void;
    
    commendations(callback: Callback<Commendations>): void;

    csrDesignations(callback: Callback<CSRDesignations>): void;
    
    enemies(callback: Callback<Enemies>): void;
    
    flexibleStats(callback: Callback<FlexibleStats>): void;  
    
    gameBaseVariants(callback: Callback<GameBaseVariants>): void;
    
    gameVariantById(id: guid, callback: Callback<GameVariant>): void;
    
    impulses(callback: Callback<Impulses>): void;
    
    maps(callback: Callback<Maps>): void;
    
    mapVariantById(id: guid, callback: Callback<MapVariant>): void;

    medals(callback: Callback<Medals>): void;

    playlists(callback: Callback<Playlists>): void;

    requisitionById(callback: Callback<Requistion>): void;

    requisitionPacks(callback: Callback<RequisitionPacks>): void;

    skulls(callback: Callback<Skulls>): void;

    spartanRanks(callback: Callback<SpartanRanks>): void;

    teamColors(callback: Callback<TeamColors>): void;

    vehicles(callback: Callback<Vehicles>): void;

    weapons(callback: Callback<Weapons>): void;
}


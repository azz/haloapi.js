/// <reference path="PlayerMatches.d.ts"/>
/// <reference path="PGCRArena.d.ts"/>

interface Stats {
    
    playerMatches(player: string, callback: Callback<PlayerMatches>): void;

    arenaMatchById(id: guid, callback: Callback<PGCRArena>): void;
    // warzoneMatchById(id: guid, callback: Callback<PGCRWarzone>): void;
    // campaignMatchById(id: guid, callback: Callback<PGCRCampaign>): void;
    // customMatchById(id: guid, callback: Callback<PGCRCustom>): void;

    /** 
     * Single player service record
     */

    // serviceRecordArena(player: string, 
    //     callback: Callback<ArenaServiceRecord>): void;
    // serviceRecordWarzone(player: string, 
    //     callback: Callback<WarzoneServiceRecord>): void;
    // serviceRecordCampaign(player: string, 
    //     callback: Callback<CampaignServiceRecord>): void;
    // serviceRecordCustom(player: string, 
    //     callback: Callback<CustomServiceRecord>): void;

    /** 
     * Multiple player service records
     */

    // serviceRecordsArena(players: string[], 
    //     callback: Callback<ArenaServiceRecord[]>): void;
    // serviceRecordsWarzone(players: string[], 
    //     callback: Callback<WarzoneServiceRecord[]>): void;
    // serviceRecordsCampaign(players: string[], 
    //     callback: Callback<CampaignServiceRecord[]>): void;
    // serviceRecordsCustom(players: string[], 
    //     callback: Callback<CustomServiceRecord[]>): void;

}
/// <reference path="./PlayerMatches.d.ts"/>
/// <reference path="./PGCRArena.d.ts"/>

interface IPlayer {
    player: string;
    [key:string]: string;
}

interface IStats {
    
    playerMatches(params: string | IPlayer, callback: Callback<PlayerMatches>): void;

    arenaMatchById(id: guid, callback: Callback<PGCRArena>): void;

    // TODO: typescript definitions for response
    warzoneMatchById(id: guid, callback: Callback<any>): void;
    campaignMatchById(id: guid, callback: Callback<any>): void;
    customMatchById(id: guid, callback: Callback<any>): void;

    /** 
     * Single player service record 
     */

    // TODO:
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

    // TODO:
    // serviceRecordsArena(players: string[], 
    //     callback: Callback<ArenaServiceRecord[]>): void;
    // serviceRecordsWarzone(players: string[], 
    //     callback: Callback<WarzoneServiceRecord[]>): void;
    // serviceRecordsCampaign(players: string[], 
    //     callback: Callback<CampaignServiceRecord[]>): void;
    // serviceRecordsCustom(players: string[], 
    //     callback: Callback<CustomServiceRecord[]>): void;

}
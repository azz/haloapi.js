/// <reference path="./PlayerMatches.d.ts"/>
/// <reference path="./PGCRArena.d.ts"/>

interface IPlayer {
    player: string;
    [key:string]: string;
}

interface IStats {
    
    /**
     * API: Stats -> Matches for Player
     * Endpoint: https://www.haloapi.com/stats/{title}/players/{player}/matches[?modes][&start][&count]
     * Params:
     *   {title}: Always "h5"
     *   {player}: The Player's gamertag.
     *   // TODO: Optional params.
     */
    playerMatches(params: string | IPlayer, callback: Callback<PlayerMatches>): void;

    /**
     * API: Stats -> Post Game Carnage Report: Arena
     * Endpoint: https://www.haloapi.com/stats/{title}/arena/matches/{matchId}

     * Params:
     *   {title}: Always "h5"
     *   {matchId}: An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    arenaMatchById(id: guid, callback: Callback<PGCRArena>): void;

    // TODO: typescript definitions for response
    warzoneMatchById(id: guid, callback: Callback<any>): void;
    campaignMatchById(id: guid, callback: Callback<any>): void;
    customMatchById(id: guid, callback: Callback<any>): void;

    /** 
     * Single player service record 
     */

    // TODO: typescript definitions for response
    serviceRecordArena(player: string, 
        callback: Callback<any>): void;
    serviceRecordWarzone(player: string, 
        callback: Callback<any>): void;
    serviceRecordCampaign(player: string, 
        callback: Callback<any>): void;
    serviceRecordCustom(player: string, 
        callback: Callback<any>): void;

    /** 
     * Multiple player service records
     */

    // TODO: typescript definitions for response
    serviceRecordsArena(players: string[], 
        callback: Callback<any>): void;
    serviceRecordsWarzone(players: string[], 
        callback: Callback<any>): void;
    serviceRecordsCampaign(players: string[], 
        callback: Callback<any>): void;
    serviceRecordsCustom(players: string[], 
        callback: Callback<any>): void;

}
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
    playerMatches(params: string | IPlayer): Promise<PlayerMatches>;

    /**
     * API: Stats -> Post Game Carnage Report: Arena
     * Endpoint: https://www.haloapi.com/stats/{title}/arena/matches/{matchId}

     * Params:
     *   {title}: Always "h5"
     *   {matchId}: An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    arenaMatchById(id: guid): Promise<PGCRArena>;

    // TODO: typescript definitions for response
    warzoneMatchById(id: guid): Promise<any>;
    campaignMatchById(id: guid): Promise<any>;
    customMatchById(id: guid): Promise<any>;

    /** 
     * Single player service record 
     */

    // TODO: typescript definitions for response
    serviceRecordArena(player: string): Promise<any>;
    serviceRecordWarzone(player: string): Promise<any>;
    serviceRecordCampaign(player: string): Promise<any>;
    serviceRecordCustom(player: string): Promise<any>;

    /** 
     * Multiple player service records
     */

    // TODO: typescript definitions for response
    serviceRecordsArena(players: string[]): Promise<any>;
    serviceRecordsWarzone(players: string[]): Promise<any>;
    serviceRecordsCampaign(players: string[]): Promise<any>;
    serviceRecordsCustom(players: string[]): Promise<any>;

}
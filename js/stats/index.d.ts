import { guid } from '../types';
import { PlayerMatches } from './PlayerMatches';
import { PGCRArena } from './PGCRArena';
export interface IMatchesParams {
    player: string;
    mode?: string;
    start?: number;
    count?: number;
    [key: string]: string | number;
}
export interface IStats {
    /**
     * @api Stats :: Matches for Player
     * @endpoint https://www.haloapi.com/stats/{title}/players/{player}/matches[?modes][&start][&count]
     * @param player  The Player's gamertag.
     */
    playerMatches(player: string): Promise<PlayerMatches>;
    playerMatches(params: IMatchesParams): Promise<PlayerMatches>;
    /**
     * @api Stats :: Post Game Carnage Report: Arena
     * @endpoint https://www.haloapi.com/stats/{title}/arena/matches/{id}
     *   {id} An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    arenaMatchById(id: guid): Promise<PGCRArena>;
    /**
     * @api Stats :: Post Game Carnage Report: Warzone
     * @endpoint https://www.haloapi.com/stats/{title}/warzone/matches/{id}
     * @param id  An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    warzoneMatchById(id: guid): Promise<any>;
    /**
     * @api Stats :: Post Game Carnage Report: Campaign
     * @endpoint https://www.haloapi.com/stats/{title}/campaign/matches/{id}
     * @param id  An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    campaignMatchById(id: guid): Promise<any>;
    /**
     * @api Stats :: Post Game Carnage Report: Custom
     * @endpoint https://www.haloapi.com/stats/{title}/custom/matches/{id}
     * @param id  An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    customMatchById(id: guid): Promise<any>;
    serviceRecordArena(player: string): Promise<any>;
    serviceRecordWarzone(player: string): Promise<any>;
    serviceRecordCampaign(player: string): Promise<any>;
    serviceRecordCustom(player: string): Promise<any>;
    serviceRecordsArena(players: string[]): Promise<any>;
    serviceRecordsWarzone(players: string[]): Promise<any>;
    serviceRecordsCampaign(players: string[]): Promise<any>;
    serviceRecordsCustom(players: string[]): Promise<any>;
}
export { PGCRArena, PlayerMatches };

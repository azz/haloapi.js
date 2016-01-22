import { IHaloAPI } from './index-types';
import { guid } from './types';
import { IStats, IMatchesParams, PlayerMatches, PGCRArena } from './stats/index';
declare class Stats implements IStats {
    api: IHaloAPI;
    private title;
    constructor(api: IHaloAPI);
    /** @inheritdoc */
    playerMatches(params: string | IMatchesParams): Promise<PlayerMatches>;
    /** @inheritdoc */
    warzoneMatchById(id: guid): Promise<PGCRArena>;
    /** @inheritdoc */
    customMatchById(id: guid): Promise<any>;
    /** @inheritdoc */
    campaignMatchById(id: guid): Promise<any>;
    /** @inheritdoc */
    arenaMatchById(id: guid): Promise<PGCRArena>;
    /** @inheritdoc */
    serviceRecordArena(player: string): Promise<any>;
    /** @inheritdoc */
    serviceRecordCampaign(player: string): Promise<any>;
    /** @inheritdoc */
    serviceRecordWarzone(player: string): Promise<any>;
    /** @inheritdoc */
    serviceRecordCustom(player: string): Promise<any>;
    /** @inheritdoc */
    serviceRecordsArena(players: string[]): Promise<any>;
    /** @inheritdoc */
    serviceRecordsCampaign(players: string[]): Promise<any>;
    /** @inheritdoc */
    serviceRecordsWarzone(players: string[]): Promise<any>;
    /** @inheritdoc */
    serviceRecordsCustom(players: string[]): Promise<any>;
    private serviceRecord<T>(gameMode, player);
    private serviceRecords<T>(gameMode, players);
}
export = Stats;

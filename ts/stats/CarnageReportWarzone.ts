import {guid} from '../common';
import {MetaCommendationDelta, ProgressiveCommendationDelta} from '../metadata/Commendations';
import {
    ICarnageReportMatchmadePlayer,
    ICarnageReportRound,
    ICarnageReport,
} from './CarnageReport';

export interface ICarnageReportWarzonePlayer extends ICarnageReportMatchmadePlayer {

    /** The maximum level the player achieved in the match. */
    WarzoneLevel: number;

    /** The total number of "pies" (in-game currency) the player earned in the match. */
    TotalPiesEarned: number;
}

export interface ICarnageReportWarzone extends ICarnageReport {

    /** @inheritdoc */
    PlayerStats: ICarnageReportWarzonePlayer[];
}

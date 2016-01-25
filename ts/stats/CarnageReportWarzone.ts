import {guid} from '../common';
import {MetaCommendationDelta, ProgressiveCommendationDelta} from '../metadata/Commendations';
import {
    ICarnageReportPlayer,
    ICarnageReportRound,
    ICarnageReport
} from './CarnageReport';

export interface ICarnageReportWarzonePlayer {

    /** The maximum level the player achieved in the match. */
    WarzoneLevel: number;

    /** The total number of "pies" (in-game currency) the player earned in the match. */
    TotalPiesEarned: number;
}

export interface ICarnageReportWarzone extends ICarnageReport {
    PlayerStats: ICarnageReportWarzonePlayer[];
}

import {guid} from '../common';
import {MetaCommendationDelta, ProgressiveCommendationDelta} from '../metadata/Commendations';
import {IStatsCsrState} from './common';
import {
    ICarnageReportMatchmadePlayer,
    ICarnageReportMultiplayer,
} from './CarnageReport';

export interface ICarnageReportArenaPlayer extends ICarnageReportMatchmadePlayer {

    /** The Competitive Skill Ranking (CSR) of the player before the match started. If
    the player is still in measurement matches, this field is null. If the player
    finished the last measurement match this match, this field is still null. */
    PreviousCsr: IStatsCsrState;

    /** The Competitive Skill Ranking (CSR) of the player after the match ended. If the
    player is still in measurement matches, this field is null. */
    CurrentCsr: IStatsCsrState;

    /** The player's measurement matches left. If this field is greater than zero, then
    the player will not have a CSR yet. If the player finished the match, this match
    is included in this count. */
    MeasurementMatchesLeft: number;
}

export interface ICarnageReportArena extends ICarnageReportMultiplayer {

    /** @inheritdoc */
    PlayerStats: ICarnageReportArenaPlayer[];
}

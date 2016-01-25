import {ICarnageReport, ICarnageReportPlayer} from './CarnageReport';

export interface ICarnageReportCampaignPlayer extends ICarnageReportPlayer {

    /** The player's biggest score due to a kill. */
    BiggestKillScore: number;

    /** The player's score. */
    Score: number;
}

export interface ICarnageReportCampaign extends ICarnageReport {

    /** @inheritdoc */
    PlayerStats: ICarnageReportCampaignPlayer[];

    /** The total playthrough time of the mission as calculated by the game. This value is */
    /** persisted in save files. */
    TotalMissionPlaythroughTime: string;

    /** The difficulty the mission was played at. Options are: */
    /**   Easy = 0, */
    /**   Normal = 1, */
    /**   Heroic = 2, */
    /**   Legendary = 3 */
    Difficulty: number;

    /** The list of skulls used for the mission. Skulls are available via the Metadata API. */
    Skulls: number[];

    /** Indicates whether the mission was completed when the match ended. */
    MissionCompleted: boolean;
}

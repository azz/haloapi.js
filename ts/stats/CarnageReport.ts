import {guid} from '../common';
import {MetaCommendationDelta, ProgressiveCommendationDelta} from '../metadata/Commendations';
import {
    IStatsCredits,
    IStatsCsrState,
    IStatsEnemyKill,
    IStatsFlexibleCount,
    IStatsFlexibleTimelapse,
    IStatsImpulse,
    IStatsMedalAward,
    IStatsOpponentDetails,
    IStatsRewardSet,
    IStatsWeaponStat,
    IStatsXpInfo,
} from './common';

export interface ICarnageReportPlayer {

    /** The game base variant specific stats for this match. Flexible stats are
    available via the Metadata API. */
    FlexibleStats: {
        /** The set of flexible stats that are derived from medal events. */
        MedalStatCounts: IStatsFlexibleCount[];

        /** The set of flexible stats that are derived from impulse events. */
        ImpulseStatCounts: IStatsFlexibleCount[];

        /** The set of flexible stats that are derived from medal time lapses. */
        MedalTimelapses: IStatsFlexibleTimelapse[];

        /** The set of flexible stats that are derived from impulse time lapses. */
        ImpulseTimelapses: IStatsFlexibleTimelapse[];
    },

    Player: {
        /** The player's gamertag. */
        Gamertag: string;

        /** Internal use only. This will always be null. */
        /** Xuid: null; */
    };

    /** The ID of the team that the player was on when the match ended. */
    TeamId: number;

    /** The player's team-agnostic ranking. */
    Rank: number;

    /** Indicates whether the player was present in the match when it ended. */
    DNF: boolean;

    /** The player's average lifetime. */
    AvgLifeTimeOfPlayer: string;

    /** Internal use only. This will always be null. */
    /** PreMatchRatings: null; */

    /** Internal use only. This will always be null. */
    /** PostMatchRatings: null; */

    /** Total number of kills done by the player. This includes melee kills, shoulder
    bash kills and Spartan charge kills, all power weapons, AI kills and vehicle
    destructions. */
    TotalKills: number;

    /** Total number of headshots done by the player. */
    TotalHeadshots: number;

    /** Total weapon damage dealt by the player. */
    TotalWeaponDamage: number;

    /** Total number of shots fired by the player. */
    TotalShotsFired: number;

    /** Total number of shots landed by the player. */
    TotalShotsLanded: number;

    /** The weapon the player used to get the most kills this match. */
    WeaponWithMostKills: IStatsWeaponStat,

    /** Total number of melee kills by the player. */
    TotalMeleeKills: number;

    /** Total melee damage dealt by the player. */
    TotalMeleeDamage: number;

    /** Total number of assassinations by the player. */
    TotalAssassinations: number;

    /** Total number of ground pound kills by the player. */
    TotalGroundPoundKills: number;

    /** Total ground pound damage dealt by the player. */
    TotalGroundPoundDamage: number;

    /** Total number of shoulder bash kills by the player. */
    TotalShoulderBashKills: number;

    /** Total shoulder bash damage dealt by the player. */
    TotalShoulderBashDamage: number;

    /** Total grenade damage dealt by the player. */
    TotalGrenadeDamage: number;

    /** Total number of power weapon kills by the player. */
    TotalPowerWeaponKills: number;

    /** Total power weapon damage dealt by the player. */
    TotalPowerWeaponDamage: number;

    /** Total number of power weapon grabs by the player. */
    TotalPowerWeaponGrabs: number;

    /** Total power weapon possession by the player. This is expressed as an ISO 8601
    Duration. */
    TotalPowerWeaponPossessionTime: string;

    /** Total number of deaths by the player. */
    TotalDeaths: number;

    /** Total number of assists by the player. */
    TotalAssists: number;

    /** Not used. */
    TotalGamesCompleted: number;

    /** Not used. */
    TotalGamesWon: number;

    /** Not used. */
    TotalGamesLost: number;

    /** Not used. */
    TotalGamesTied: number;

    /** Total timed played in this match by the player. */
    TotalTimePlayed: string;

    /** Total number of grenade kills by the player. */
    TotalGrenadeKills: number;

    /** The set of Medals earned by the player. */
    MedalAwards: IStatsMedalAward[];

    /** List of enemy vehicles destroyed. Vehicles are available via the Metadata API.
    @note this stat measures enemy vehicles, not any vehicle destruction. */
    DestroyedEnemyVehicles: IStatsEnemyKill[];

    /** List of enemies killed, per enemy type. Enemies are available via the Metadata
    API. */
    EnemyKills: IStatsEnemyKill[];

    /** The set of weapons (weapons and vehicles included) used by the player. */
    WeaponStats: IStatsWeaponStat[];

    /** The set of Impulses (invisible Medals) earned by the player. */
    Impulses: IStatsImpulse[];

    /** Total number of Spartan kills by the player. */
    TotalSpartanKills: number;
}

export interface ICarnageReportRound {
    /** The round number this entry pertains to. */
    RoundNumber: number;

    /** The end rank for the team this round. */
    Rank: number;

    /** The end score for the team this round. */
    Score: number;
}

export interface ICarnageReportTeam {

    /** The ID for the team. */
    TeamId: number;

    /** The team's score at the end of the match. The way the score is determined is
    based off the game base variant being played:
    Breakout = number of rounds won,
    CTF = number of flag captures,
    Slayer = number of kills,
    Strongholds = number of points,
    Warzone = number of points. */
    Score: number;

    /** The team's rank at the end of the match. */
    Rank: number;

    /** The set of round stats for the team. */
    RoundStats: ICarnageReportRound[];
}

export interface ICarnageReport {

    /** A list of stats for each player who was present in the match. */
    PlayerStats: ICarnageReportPlayer[];

    /** Indicates if the match is completed or not. Some match details are available while */
    /** the match is in-progress, but the behavior for incomplete matches in undefined. */
    IsMatchOver: boolean;

    /** The length of the match. This is expressed as an ISO 8601 Duration. */
    TotalDuration: string;

    /** The variant of the map for this match. Map variants are available via the Metadata
    API. */
    MapVariantId: guid;

    /** The variant of the game for this match. Game variants are available via the Metadata
    API. */
    GameVariantId: guid;

    /** The playlist ID of the match. Playlists are available via the Metadata API. */
    PlaylistId: guid;

    /** The ID of the base map for this match. Maps are available via the Metadata API. */
    MapId: guid;

    /** The ID of the game base variant for this match. Game base variants are available via
    the Metadata API. */
    GameBaseVariantId: guid;

    /** Whether this was a team-based game or not. */
    IsTeamGame: boolean;

    /** ID for the season the match was played in if it was played in a seasonal playlist and null otherwise. */
    SeasonId: guid;
}

/** Base type from which Arena, Custom, and Warzone players extend from. */
export interface ICarnageReportMultiplayerPlayer extends ICarnageReportPlayer {

    /** The number of times the player killed each opponent. If the player did not kill
    an opponent, there will be no entry for that opponent. */
    KilledOpponentDetails: IStatsOpponentDetails[];

    /** The number of times the player was killed by each opponent. If the player was
    not killed by an opponent, there will be no entry for that opponent. */
    KilledByOpponentDetails: IStatsOpponentDetails[];
}

/** Base type from which Arena and Warzone players extend from. */
export interface ICarnageReportMatchmadePlayer extends ICarnageReportMultiplayerPlayer {

    /** The experience information for the player in this match. */
    XpInfo: IStatsXpInfo;

    /** The set of rewards that the player got in this match. */
    RewardSets: IStatsRewardSet[];

    /** Details on any credits the player may have earned from playing this match. */
    CreditsEarned: IStatsCredits,

    /** The player's progress towards meta commendations. Commendations that had no
    progress earned this match will not be returned. */
    MetaCommendationDeltas: MetaCommendationDelta[];

    /** The player's progress towards progressive commendations. Commendations that had
    no progress earned this match will not be returned. */
    ProgressiveCommendationDeltas: ProgressiveCommendationDelta[];
}

/** Base type from which Arena, Custom, and Warzone players extend from. */
export interface ICarnageReportMultiplayer extends ICarnageReport {

    /** @inheritdoc */
    PlayerStats: ICarnageReportMultiplayerPlayer[];

    /** A list of stats for each team who in the match. Note that in Free For All modes,
    there is an entry for every player. */
    TeamStats: ICarnageReportTeam[];
}

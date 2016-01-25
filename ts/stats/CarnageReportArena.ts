import {guid} from '../common';
import {MetaCommendationDelta, ProgressiveCommendationDelta} from '../metadata/Commendations';
import {
    IStatsCsrState,
    IStatsEnemyKill,
    IStatsFlexible,
    IStatsImpulse,
    IStatsMedalAward,
    IStatsOpponentDetails,
    IStatsRewardSet,
    IStatsTimelapse,
    IStatsWeaponStat,
    IStatsXpInfo,
} from './common-carnage';

export interface ICarnageReportArenaPlayer {
    /** The experience information for the player in this match. */
    XpInfo: IStatsXpInfo;

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

    /** The set of rewards that the player got in this match. */
    RewardSets: IStatsRewardSet[];

    /** The number of times the player killed each opponent. If the player did not kill
    an opponent, there will be no entry for that opponent. */
    KilledOpponentDetails: IStatsOpponentDetails[];

    /** The number of times the player was killed by each opponent. If the player was
    not killed by an opponent, there will be no entry for that opponent. */
    KilledByOpponentDetails: IStatsOpponentDetails[];

    /** The game base variant specific stats for this match. Flexible stats are
    available via the Metadata API. */
    FlexibleStats: {
        /** The set of flexible stats that are derived from medal events. */
        MedalStatCounts: IStatsFlexible[];

        /** The set of flexible stats that are derived from impulse events. */
        ImpulseStatCounts: IStatsFlexible[];

        /** The set of flexible stats that are derived from medal time lapses. */
        MedalTimelapses: IStatsTimelapse[];

        /** The set of flexible stats that are derived from impulse time lapses. */
        ImpulseTimelapses: IStatsTimelapse[];
    },

    /** Details on any credits the player may have earned from playing this match. */
    CreditsEarned: {
        /** Indicates how the credits result was arrived at. Options are:
        - Credits Disabled In Playlist = 0,
        TotalCreditsEarned is zero because this playlist
        has credits disabled.
        - Player Did Not Finish = 1,
        Credits are enabled in this playlist, but
        TotalCreditsEarned is zero because the player did not finish the match.
        - Credits Earned = 2,
        Credits are enabled in this playlist and the player completed
        the match, so the credits formula was successfully evaluated. The fields below
        provide the client with the values used in the formula.
        @note If we used
        one or more default values, we still return NormalResult. The fields below
        will confirm the actual values used. */
        Result: number;

        /** The total number of credits the player earned from playing this match. */
        TotalCreditsEarned: number;

        /** The scalar applied to the credits earned based on the player's Spartan Rank. */
        SpartanRankModifier: number;

        /** The portion of credits earned due to the player's team-agnostic rank in the
        match. */
        PlayerRankAmount: number;

        /** The portion of credits earned due to the time the player played in the match. */
        TimePlayedAmount: number;

        /** The portion of credits earned due to the boost card the user applied */
        BoostAmount: number;
    },

    /** The player's progress towards meta commendations. Commendations that had no
    progress earned this match will not be returned. */
    MetaCommendationDeltas: MetaCommendationDelta[];

    /** The player's progress towards progressive commendations. Commendations that had
    no progress earned this match will not be returned. */
    ProgressiveCommendationDeltas: ProgressiveCommendationDelta[];

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

export interface ICarnageReportArenaRound {
    /** The round number this entry pertains to. */
    RoundNumber: number;

    /** The end rank for the team this round. */
    Rank: number;

    /** The end score for the team this round. */
    Score: number;
}


export interface ICarnageReportArenaTeam {
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
    RoundStats: ICarnageReportArenaRound[];
}

export interface ICarnageReportArena {

    /** A list of stats for each player who was present in the match. */
    PlayerStats: ICarnageReportArenaPlayer[];

    /** A list of stats for each team who in the match. Note that in Free For All modes,
    there is an entry for every player. */
    TeamStats: ICarnageReportArenaTeam[];

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

    /** Internal use only. This will always be null. */
    /** SeasonId: null; */
}

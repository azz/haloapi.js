import {guid} from '../common';

export interface IStatsXpInfo {
    /** The player's Spartan Rank before the match started. */
    PrevSpartanRank: number;

    /** The player's Spartan Rank after the match ended. */
    SpartanRank: number;

    /** The player's XP before the match started. */
    PrevTotalXP: number;

    /** The player's XP after the match ended. */
    TotalXP: number;

    /** The multiplier on the XP earned this match based on their Spartan Rank when */
    /** the match ended. */
    SpartanRankMatchXPScalar: number;

    /** The portion of the XP the player earned this match that was based on how much */
    /** time was spent in-match. */
    PlayerTimePerformanceXPAward: number;

    /** The XP awarded to the player based on how their team ranked when the match */
    /** concluded. */
    PerformanceXP: number;

    /** The XP awarded to the player for their team-agnostic rank. */
    PlayerRankXPAward: number;

    /** The amount of XP the player earned if they played a boost card for this match,
    and the boost card criteria was met. This is a fixed amount of XP, not a
    multiplier. */
    BoostAmount: number;
}

export interface IStatsCsrState {
    /** The CSR tier. */
    Tier: number;

    /** The Designation of the CSR. Options are:
    - 1 through 5: Normal designations
    - 6 and 7: Semi-pro and Pro respectively */
    DesignationId: number;

    /** The CSR value. Zero for normal designations. */
    Csr: number;

    /** The percentage of progress towards the next CSR tier. */
    PercentToNextTier: number;

    /** If the CSR is Semi-pro or Pro, the player's leaderboard ranking. */
    Rank: number;
}

export interface IStatsRewardSet {
    /** The ID of the reward. */
    RewardSet: guid;

    /** The source of the reward. Options are:
    None = 0,
    Meta Commendation = 1,
    Progress Commendation = 2,
    Spartan Rank = 3 */
    RewardSourceType: number;

    /** If the Reward Source is Spartan Rank, this value is set to the Spartan Rank
    the player acquired that led to this reward being granted. Note: Unlike the
    commendations fields in this structure, this is not the GUID to a Spartan
    Rank content item. That's because the Spartan Rank content item itself does
    not detail what specific Spartan Rank it pertains to - this information is
    derived from the list of Spartan Ranks as a whole. Spartan Ranks are
    available via the Metadata API. */
    SpartanRankSource: number;

    /** If the Reward Source is a Commendation, this is the ID of the level of the
    commendation that earned the reward. */
    CommendationLevelId: guid;

    /** If the Reward Source is a Meta Commendation or Progress Commendation, this
    is the ID of the Meta Commendation or Progress Commendation, respectively,
    that earned the reward. Commendations are available via the Metadata API. */
    CommendationSource: guid;
}

export interface IStatsOpponentDetails {
    /** The gamertag of the opponent that killed the player. */
    GamerTag: string;

    /** The number of times the opponent killed the player. */
    TotalKills: number;
}

export interface IStatsFlexibleCount {
    /** The ID of the flexible stat. */
    Id: guid;

    /** The number of times this flexible stat was earned. */
    Count: number;
}

export interface IStatsFlexibleTimelapse {
    /** The ID of the flexible stat. */
    Id: guid;

    /** The amount of time the flexible stat was earned for. This is expressed as
    an ISO 8601 Duration. */
    Timelapse: string
}

export interface IStatsMedalAward {
    /** The ID of the Medal. Medals are available via the Metadata API. */
    MedalId: number;

    /** The number of times the Medal was earned. */
    Count: number;
}

export interface IStatsEnemyKill {
    /** The enemy this entry references */
    Enemy: {
        /** The Base ID for the enemy. */
        BaseId: number;

        /** The attachments (variants) for the enemy. */
        Attachments: number[];
    },

    /** Total number of kills on the enemy by the player */
    TotalKills: number;
}

export interface IStatsWeaponStat {
    WeaponId: {
        /** The ID of the weapon. Weapons are available via the Metadata API. */
        StockId: number;

        /** Any attachments the weapon had. */
        Attachments: number[];
    },

    /** The number of shots fired for this weapon. */
    TotalShotsFired: number;

    /** The number of shots landed for this weapon. */
    TotalShotsLanded: number;

    /** The number of headshots for this weapon. */
    TotalHeadshots: number;

    /** The number of kills for this weapon. */
    TotalKills: number;

    /** The total damage dealt for this weapon. */
    TotalDamageDealt: number;

    /** The total possession time for this weapon. This is expressed as an ISO 8601 */
    /** Duration. */
    TotalPossessionTime: string
}

export interface IStatsImpulse {
    /** The ID of the Impulse. Impulses are available via the Metadata API. */
    Id: number;

    /** The number of times the Impuse was earned. */
    Count: number;
}

interface XpInfo {
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

interface CsrState {
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

interface RewardSet {
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

interface OpponentDetails {
    /** The gamertag of the opponent that killed the player. */
    GamerTag: string;

    /** The number of times the opponent killed the player. */
    TotalKills: number;
}

interface StatCount {
    /** The ID of the flexible stat. */
    Id: guid;

    /** The number of times this flexible stat was earned. */
    Count: number;         
}

interface Timelapse {
    /** The ID of the flexible stat. */
    Id: guid;

    /** The amount of time the flexible stat was earned for. This is expressed as
    an ISO 8601 Duration. */
    Timelapse: string
}

interface MedalAward {
    /** The ID of the Medal. Medals are available via the Metadata API. */
    MedalId: number;

    /** The number of times the Medal was earned. */
    Count: number;
}

interface EnemyKill {
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

interface WeaponStat {
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

interface ImpulseCount {
    /** The ID of the Impulse. Impulses are available via the Metadata API. */
    Id: number;

    /** The number of times the Impuse was earned. */
    Count: number;
}    

interface PlayerStat {
    /** The experience information for the player in this match. */
    XpInfo: XpInfo;

    /** The Competitive Skill Ranking (CSR) of the player before the match started. If 
    the player is still in measurement matches, this field is null. If the player 
    finished the last measurement match this match, this field is still null. */
    PreviousCsr: CsrState;

    /** The Competitive Skill Ranking (CSR) of the player after the match ended. If the
    player is still in measurement matches, this field is null. */
    CurrentCsr: CsrState;

    /** The player's measurement matches left. If this field is greater than zero, then
    the player will not have a CSR yet. If the player finished the match, this match 
    is included in this count. */
    MeasurementMatchesLeft: number;

    /** The set of rewards that the player got in this match. */
    RewardSets: RewardSet[];

    /** The number of times the player killed each opponent. If the player did not kill
    an opponent, there will be no entry for that opponent. */
    KilledOpponentDetails: OpponentDetails[];

    /** The number of times the player was killed by each opponent. If the player was
    not killed by an opponent, there will be no entry for that opponent. */
    KilledByOpponentDetails: OpponentDetails[];

    /** The game base variant specific stats for this match. Flexible stats are
    available via the Metadata API. */
    FlexibleStats: {
        /** The set of flexible stats that are derived from medal events. */
        MedalStatCounts: StatCount[];

        /** The set of flexible stats that are derived from impulse events. */
        ImpulseStatCounts: StatCount[];

        /** The set of flexible stats that are derived from medal time lapses. */
        MedalTimelapses: Timelapse[];

        /** The set of flexible stats that are derived from impulse time lapses. */
        ImpulseTimelapses: Timelapse[];
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
    WeaponWithMostKills: {
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

        /** The total possession time for this weapon. This is expressed as an ISO 8601 
        Duration. */
        TotalPossessionTime: string
    },

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
    MedalAwards: MedalAward[];

    /** List of enemy vehicles destroyed. Vehicles are available via the Metadata API.
    @note this stat measures enemy vehicles, not any vehicle destruction. */
    DestroyedEnemyVehicles: EnemyKill[];

    /** List of enemies killed, per enemy type. Enemies are available via the Metadata
    API. */
    EnemyKills: EnemyKill[];

    /** The set of weapons (weapons and vehicles included) used by the player. */
    WeaponStats: WeaponStat[];

    /** The set of Impulses (invisible Medals) earned by the player. */
    Impulses: ImpulseCount[];

    /** Total number of Spartan kills by the player. */
    TotalSpartanKills: number;
}

interface RoundStat {
    /** The round number this entry pertains to. */
    RoundNumber: number;

    /** The end rank for the team this round. */
    Rank: number;

    /** The end score for the team this round. */
    Score: number;
}


interface TeamStat {
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
    RoundStats: RoundStat[];
}    

interface PGCRArena {

    /** A list of stats for each player who was present in the match. */
    PlayerStats: PlayerStat[];

    /** A list of stats for each team who in the match. Note that in Free For All modes, 
    there is an entry for every player. */
    TeamStats: TeamStat[];

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
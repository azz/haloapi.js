
interface PaginatedResponse<T> {
    /** The starting point that was used. When the start query string parameter is
    specified, this value is identical. When start is omitted, the default value is
    returned. */
    Start: number;

    /** The number of results that the service attempted to retrieve to satisfy this 
    request. Normally this value is equal to the count parameter. If the client 
    specified a count parameter greater than the maximum allowed, this value contains 
    the maximum allowed amount. */
    Count: number;

    /** The number of results that are actually being returned in this response. This field 
    is named ResultCount to avoid confusion with Count. */
    ResultCount: number;

    /** A list of recent matches. Matches are listed in chronological order with the most 
    recently started match first. */
    Results: T[];
}

interface MatchId {
    /** The ID for this match. More match details are available via the applicable 
    Post Game Carnage Report endpoint. */
    MatchId: guid;

    /** The game mode applicable to this match. Options are: 
    - Error = 0, 
    - Arena = 1, 
    - Campaign = 2, 
    - Custom = 3, 
    Warzone = 4. */
    GameMode: number;
}

interface Resource {
    /** The resource type. 3 indicates map variant. 2 indicates game variant. */
    ResourceType: number;

    /** The ID of the map variant. Game/Map variants are available via the Metadata API. */
    ResourceId: guid;

    /** The source of the map variant. Options are: 
    - Unknown = 0 
    - User-generated = 1 and 2, 
    - Official = 3. */
    OwnerType: number;

    /** The owner. Usually set to null. */
    Owner: string
}

interface Match {
    /** Internal use only. A set of related resource links. */
    /** Links: links; */

    Id: MatchId;

    /** The ID of the playlist (aka Hopper) for the match. 
    Hoppers are used in Arena and Warzone. In Arena, they function just as you would 
    expect, similar to previous Halo titles. Warzone uses hoppers as well. There 
    will be multiple Warzone hoppers which contain a rotating playlist of scenarios 
    to play. 
    Null for campaign & custom games. 
    Playlists are available via the Metadata API. */
    HopperId: guid;

    /** The ID of the base map for this match. Maps are available via the Metadata API. */
    MapId: guid;

    /** The variant of the map for this match. There are two sources of map variants:
    official map variants available via the Metadata API and user-generated map
    variants which are not available via the APIs currently. If the map variant for
    this match was an official map variant, then the structure will be as documented
    here. This will be null for campaign games. */
    MapVariant: Resource;

    /** The ID of the game base variant for this match. Game base variants are available 
    via the Metadata API. */
    GameBaseVariantId: guid;

    /** The variant of the game for this match. There are two sources of game variants:
    official game variants available via the Metadata API and user-generated game
    variants which are not available via the APIs currently. If the game variant for
    this match was an official game variant, then the structure will be as
    documented here. This will be null for campaign games. */
    GameVariant: Resource;

    /** The length of the match. This is expressed as an ISO 8601 Duration. */
    MatchDuration: string;

    /** The date and time when match ended. Note that this is different than the
    processing date, once matches end they typically take a small amount of time to
    process. The processing date is not available through this API. The time
    component of this date is always set to 00:00:00. This is expressed as an ISO
    8601 combined Date and Time. */
    MatchCompletedDate: {
        ISO8601Date: string
    };

    /** Provides team data. This list contains all team that Won or Tied. Losing teams 
    are not included. This list is empty for campaign games. */
    Teams: MatchTeam[];

    /** This field contains the player's data. This will only contain data for the 
    player specified in the request. */
    Players: MatchPlayer[];

    /** Whether this was a team-based game or not (e.g. free-for-all). */
    IsTeamGame: boolean;

    /** Internal use only. This will always be null. */
    /** SeasonId: null; */
}

interface MatchTeam {
    /** The ID for the team. The team's ID dictates the team's color. Team colors */
    /** are available via the Metadata API. */
    Id: number;

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
}

interface MatchPlayer {
    Player: {
        /** The player's gamertag. */
        Gamertag: string;

        /** Internal use only. This will always be null. */
        /** Xuid: null; */
    };

    /** The ID of the team that the player was on when the match ended. Zero for 
    campaign games. */
    TeamId: number;

    /** The player's team-agnostic ranking in this match. */
    Rank: number;

    /** Indicates what result the player received at the conclusion of the match.
    Options are:
    - Did Not Finish = 0, The player was not present when the match ended.
    Lost: The player was on a team that was assigned a loss, typically this is
    when a team does not have rank = 1.
    - Lost = 1,
    - Tied = 2, The player was on the team that was awarded a tie. Typically this is
    when the player is on the team with rank = 1, and there is at least one
    other team with rank = 1. Ties are only for rank = 1 teams. Consider the
    scenario when exactly one team is rank = 1, and two teams are rank = 2.
    Players on the rank=1 team will have Won; players on the rank = 2 teams
    will have Lost. For ties, this documentation states 'typically' because
    the game may have unique rules for multi-team and FFA scenarios, in which
    multiple teams are awarded a win.
    - Won = 3, The player was on the team that was assigned the win, typically this is
    the team that has rank = 1.
    */
    Result: number;

    /** The number of enemy kills the player had during this match. This includes */
    /** other Spartans and Enemy AI. */
    TotalKills: number;

    /** The number of times this player died during the match. */
    TotalDeaths: number;

    /** The number of assists credited to the player during the match. This includes 
    other Spartans and Enemy AI. */
    TotalAssists: number;

    /** Internal use only. This will always be null. */
    /** PreMatchRatings: null; */

    /** Internal use only. This will always be null. */
    /** PostMatchRatings: null; */
}

declare type PlayerMatches = PaginatedResponse<Match>;
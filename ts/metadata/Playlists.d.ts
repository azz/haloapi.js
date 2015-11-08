
interface Playlist {
    /**
     A localized name for the playlist, suitable for display to users. The text is
     title cased.
     */
    name: string;

    /**
     A localized description for the playlist, suitable for display to users.
     */
    description: string;

    /**
     Indicates if a CSR (competitive skill rank) is shown for players who participate
     in this playlist.
     */
    isRanked: boolean;

    /**
     An image used to illustrate this playlist.
     */
    imageUrl: string;

    /**
     The game mode played in this playlist. Options are:
     - Arena
     - Campaign
     - Custom
     - Warzone
     */
    gameMode: string;

    /**
     Indicates if this playlist is currently available for play.
     */
    isActive: boolean;

    /**
     The ID that uniquely identifies this playlist.
     */
    id: guid;

    /*
     Internal use only. Do not use.
    contentId: guid;
     */
}

/**
 A list of playlists for the title. To determine which playlists a specific player
 has played within, view the Service Record stats for that player. There is no
 significance to the ordering.
 */
declare type Playlists = Playlist[];

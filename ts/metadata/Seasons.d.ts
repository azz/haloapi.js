///<reference path="Playlists.d.ts"/>

interface Season {
    /** One or more playlists that are available in this season. */ 
    playlists: Playlist[];
    
    /** An icon used to represent this season. */
    iconUrl: string,
    
    /** A localized name for the season, suitable for display to users. */
    name: string;
    
    /** The start date and time of this season. This is expressed as an ISO 8601 combined Date and Time. */
    startDate: string;
    
    /** The end date and time of this season. This is expressed as an ISO 8601 combined Date and Time. **/
    endDate: string;
    
    /** Indicates if this season is currently active. */
    isActive: boolean;
    
    /** The ID that uniquely identifies this season. */
    id: guid;
}

declare type Seasons = Season[];
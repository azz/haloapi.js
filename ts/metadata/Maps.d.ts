
interface BaseMap {
    /**
     A localized name, suitable for display to users.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     This lists all the game modes to which this map is available. Options are:
     - Arena
     - Campaign
     - Custom
     - Warzone
     */
    supportedGameModes: string[];

    /**
     A reference to an image. This may be null if there is no image defined.
     */
    imageUrl: string;

    /**
     The ID that uniquely identifies this map.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

/**
 A list of maps for the title. There is no significance to the ordering.
 */
declare type Maps = BaseMap[];    
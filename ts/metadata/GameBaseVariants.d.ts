
interface GameBaseVariant {
    /**
     A localized name for the game base variant, suitable for display to users. The
     text is title cased.
     */
    name: string;

    /**
     Internal use. The numberernal non-localized name for the the game base variant.
     */
    numberernalName: string;

    /**
     An image to use as the game base variant for the designation.
     */
    iconUrl: string;

    /**
     A list that indicates what game modes this base variant is available within.
     Options are:
     - Arena
     - Campaign
     - Custom
     - Warzone
     */
    supportedGameModes: string[];

    /**
     The ID that uniquely identifies this game base variant.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

/**
 A list of game base variants for the title. There is no mechanism to determine
 which game base variants are currently available for play. To determine which game
 base variants a specific player has played, view the Service Record stats for
 that player.There is no significance to the ordering.
 */
declare type GameBaseVariants = GameBaseVariant[];
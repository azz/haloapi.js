
interface Medal {
    /**
     A localized name for the medal, suitable for display to users.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     The type of this medal. It will be one of the following options:
     - Unknown
     - Multi-kill
     - Spree
     - Style
     - Vehicle
     - Breakout
     - Objective
     */
    classification: string;

    /**
     The anticipated difficulty, relative to all other medals of this classification.
     The difficulty is ordered from easiest to most difficult.
     */
    difficulty: number;

    /**
     The location on the sprite sheet for the medal.
     */
    spriteLocation: SpriteLocation;

    /**
     The ID that uniquely identifies this map medal.
     */
    id: number;

    /*
     Internal use only. Do not use.
    contentId: guid
     */
}

interface SpriteLocation {
    /**
     A reference to an image that contains all the sprites.
     */
    spriteSheetUri: string;

    /**
     The X coordinate where the top-left corner of the sprite is located.
     */
    left: number;

    /**
     The Y coordinate where the top-left corner of the sprite is located.
     */
    top: number;

    /**
     The width of the full sprite sheet (in pixels). The dimensions of the full sheet
     are included so that the sheet can be resized.
     */
    width: number;

    /**
     The height of the full sprite sheet (in pixels). The dimensions of the full
     sheet are included so that the sheet can be resized.
     */
    height: number;

    /**
     The width of this sprite (in pixels).
     */
    spriteWidth: number;

    /**
     The height of this sprite (in pixels).
     */
    spriteHeight: number;
}

/**
 A list of medals for the title. There is no significance to the ordering.
 */
declare type Medals = Medal[];
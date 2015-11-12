
interface TeamColor {
    /**
     A localized name, suitable for display to users.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     A seven-character string representing the team color in RGB Hex notation. This
     notation uses a `#` followed by a hex triplet.
     */
    color: string;

    /**
     A reference to an image for icon use. This may be null if there is no image
     defined.
     */
    iconUrl: string;

    /**
     The ID that uniquely identifies this color. This will be the same as the team's ID
     in responses from the Stats API.
     */
    id: number;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

/**
 A listing of team colors supported in the title. There is no significance to
 the ordering.
 */
declare type TeamColors = TeamColor[];

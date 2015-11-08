
interface Vehicle {
    /**
     A localized name for the object, suitable for display to users. The text is title
     cased.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     A reference to a large image for icon use. This may be null if there is no image
     defined.
     */
    largeIconImageUrl: string;

    /**
     A reference to a small image for icon use. This may be null if there is no image
     defined.
     */
    smallIconImageUrl: string;

    /**
     Indicates whether the vehicle is usable by a player.
     */
    isUsableByPlayer: boolean;

    /**
     The ID that uniquely identifies this vehicle.
     */
    id: number;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

/**
 A list of vehicles for the title. There is no significance to the ordering.
 */
declare type Vehicles = Vehicle[];

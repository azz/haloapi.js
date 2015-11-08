
interface MapVariant {
    /**
     A localized name, suitable for display to users.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     A reference to an image. This may be null if there is no image defined.
     */
    mapImageUrl: string;

    /**
     The ID of the map this is a variant for. Maps are available via the Metadata API.
     */
    mapId: guid;

    /**
     The ID that uniquely identifies this map variant.
     */
    id: guid;

    /*
     Internal use only. Do not use.
    contentId: guid;
     */
}

/*
 Cannot access list of all map variants
 */
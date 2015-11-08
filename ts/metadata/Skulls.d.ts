
interface Skull {
    /**
     A localized name, suitable for display to users. The text is title cased.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     Indicates what mission this skull can be located within. Null when the skull is
     not found in a mission. Missions are available via the Metadata API.
     */
    missionId: guid;

    /**
     The ID that uniquely identifies this skull.
     */
    id: number;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
    }

/**
 A list of skulls for the title. There is no significance to the ordering.
 */
declare type Skulls = Skull[];

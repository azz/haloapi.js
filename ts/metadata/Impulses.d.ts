
interface Impulse {
    /**
     Internal use. The non-localized name of the impulse.
     */
    internalName: string;

    /**
     The ID that uniquely identifies this impulse.
     */
    id: number;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

/**
 A list of impulses (essentially invisible medals) for the title. There is
 no significance to the ordering.
 */
declare type Impulses = Impulse[];
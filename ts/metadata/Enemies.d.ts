 
 interface Enemy {
    /**
     The faction that this enemy is affiliated with. One of the following options:
       - UNSC
       - Covenant
       - Promethean
     */
    faction: string;

    /**
     A localized name for the object, suitable for display to users. The text is title
     cased. 
     */
    name: string;

    /**
     A localized description, suitable for display to users. Note: This may be null.
     */
    description: string;

    /**
     A reference to a large image for icon use. This may be null if there is no image
     defined.
     */
    lageIconImageUrl: url;

    /**
     A reference to a small image for icon use. This may be null if there is no image
     defined.
     */
    smallIconImageUrl: url;

    /**
     The ID that uniquely identifies this enemy.
     */
    id: number;

    /*
     Internal use only. Do not use.
     contentId: guid;  
     */
}
 
/**
 A list of enemies for the title. There is no significance to the ordering.
 */
declare type Enemies = Enemy[];    
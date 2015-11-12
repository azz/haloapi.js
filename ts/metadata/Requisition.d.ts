
interface Requistion {
    /**
     This lists all the game modes that this requisition is redeemable in. Options are:
     - Arena
     - Campaign
     - Custom
     - Warzone
     */
    supportedGameModes: string[];

    /**
     A localized name, suitable for display to users. The text is title cased.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     The non-localized rarity. Indicates the scarcity and thus rarity of the
     requisition. The options are (in increasing order of rarity):
     - Common
     - Uncommon
     - Rare
     - UltraRare
     - Legendary
     */
    rarityType: string;

    /**
     The localized rarity suitable for display to users. Indicates the scarcity and
     thus rarity of the requisition
     */
    rarity: string;

    /**
     Indicates if this requisition has been flagged as having 'mythic status'.
     */
    isMythic: boolean;

    /**
     Indicates if this item is a Certification. Certifications will always be durable
     and are required to earn certain other requisitions.
     */
    isCertification: boolean;

    /**
     Indicates whether the requisition is wearable.
     */
    isWearable: boolean;

    /**
     Indicates how the requisition card may be used. Options are:
     - Consumable: The requisition can be called in and used while in-game. When players
     call in a consumable requisition it is removed from the players inventory.
     - Durable: The requisition is not usable in-game. Players can only earn one of each
     durable requisition and it is used to model awards such as armor suits, helmets,
     emblems or other items such as stickers. Durables are never removed from the
     player inventory.
     - Boost: The requisition is used prior to a match beginning and will modify how many
     XP or Credits the player will earn at the end of the match. When put into effect,
     it is removed from the player inventory.
     - CreditGranting: When obtained, the requisition will grant the player some amount
     of credits. Once the credits are granted the requisition is immediately removed
     from the player inventory.
     */
    useType: string;

    /**
     A reference to a large image for icon use. This may be null if there is no image
     defined.
     */
    largeImageUrl: string;

    /**
     A reference to a medium image for icon use. This may be null if there is no image
     defined.
     */
    mediumImageUrl: string;

    /**
     A reference to a small image for icon use. This may be null if there is no image
     defined.
     */
    smallImageUrl: string;

    /**
     A localized name for the category of the requisition, suitable for display to
     users. The text is title cased.
     */
    categoryName: string;

    /**
     Internal use. A non-localized name for the category of the requisition.
     */
    internalCategoryName: string;

    /**
     A localized name for the sub-category of the requisition, suitable for display to
     users. The text is title cased.
     */
    subcategoryName: string;

    /**
     The order of the subcategory in the category.
     */
    subcategoryOrder: number;

    /**
     This field indicates how many credits the player will receive if they wish to
     discard this requisition. When SellPrice is zero, the card cannot be sold back for
     credits.
     */
    sellPrice: number;

    /**
     The Spartan Rank required in order to use the requisition.
     */
    levelRequirement: number;

    /**
     For requisitions where the useType is CreditGranting, this field indicates how
     many credits the player is rewarded with. When the requisition is not
     CreditGranting, this value is zero.
     */
    creditsAwarded: number;

    /**
     If this is set, this is the ID of the Certification Requisition that is required
     to earn this requisition.
     */
    certificationRequisitionId: guid;

    /**
     The ID that uniquely identifies this requisition.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}
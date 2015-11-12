
interface RequisitionPack {
    /**
     A localized name for the pack, suitable for display to users. The text
     is title cased. 
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     A large image for the pack.
     */
    largeImageUrl: url;

    /**
     A medium image for the pack.
     */
    mediumImageUrl: url;

    /**
     A small image for the pack.
     */
    smallImageUrl: url;

    /**
     Internal use. Whether the item should be featured ahead of others.
     */
    isFeatured: boolean;

    /**
     Internal use. Whether the item should be labeled as "new!"
     */
    isNew: boolean;

    /**
     If the pack is purchasable via credits, this value contains the number
     of credits a player must spend to acquire one pack. This value is zero
     when isPurchasableWithCredits is false.
     */
    creditPrice: number;

    /**
     If the pack is currently available for purchase by spending credits,
     then this value is true.
     */
    isPurchasableWithCredits: boolean,

    /**
     If the pack might be obtainable through the Xbox Live Marketplace, then
     this value is true.
     */
    isPurchasableFromMarketplace: boolean;

    /**
     If this pack might be obtainable through the Xbox Live Marketplace, this
     is the product ID. 
     @note Pricing and availability within the Xbox Live
     marketplace is controlled independently of this value. The presence of
     an Id in this field is not a guarantee the product is purchasable. There
     may be geographic restrictions restricting purchase in certain regions,
     or the item may not be currently purchasable at all.
     */
    xboxMarketplaceProductId: guid;

    /**
     If this pack might be obtainable through the Xbox Live Marketplace, this
     is the URL to the product.
     */
    xboxMarketplaceProductUrl: url;

    /**
     Internal use. The order in which packs are shown for merchandising
     purposes.
     */
     merchandisingOrder: number;

    /**
     Internal use. Indicates the visual treatment of the pack. This is one of
     the following options:
       - None
       - New
       - Hot
       - LeavingSoon
       - MaximumValue
       - Limitedtime
       - Featured
       - BestSeller
       - Popular
     */
    flair: string;

    /**
     The ID that uniquely identifies this pack.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

/**
 * A list of requisition packs
 */
declare type RequisitionPacks = RequisitionPack[];

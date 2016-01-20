
// TODO: figure out if it's possible to use enums to capture string possibilities,
// like so:
// enum CampaignTeam {
//     BlueTeam,
//     OsirisTeam
// }

interface CampaignMission {
    /**
     * The order of the mission in the story. The first mission is #1.
     */
    missionNumber: number;

    /**
     * A localized name suitable for display.
     */
    name: string;

    /**
     * A localized description, suitable for display to users.
     */
    description: string;

    /**
     * An image that is used as the background art for this mission.
     */
    imageUrl: url;

    /**
     * The team for the mission. One of the following values:
     *   - BlueTeam
     *   - OsirisTeam
     */
    type: string;

    /**
     * The ID that uniquely identifies this campaign mission.
     */
    id: guid;

    // Internal use only. Do not use.
    // contentId: guid;
}

/**
 * A listing of campaign missions supported in the title. There is no significance to the
 * ordering.
 */
declare type CampaignMissions = CampaignMission[];/**
 * The progress the player had made towards the commendation level before the
 * match. In C#, this can be reassembled into a Guid in the following manner:
 * <br/>
 * `new Guid((int)Data1, (short)Data2, (short)Data3,
 * BitConverter.GetBytes((long)Data4)).`
*/
interface CommendationMetRequirement {
    Data1: number;

    Data2: number;

    Data3: number;

    Data4: number;
}

interface MetaCommendationDelta {
    /**
     * The commendation ID. Commendations are available via the Metadata API.
     */
    Id: guid;

    /**
     * The progress the player had made towards the commendation level before the
     * match.
     */
    PreviousMetRequirements: CommendationMetRequirement[];
    /**
     * The progress the player had made towards the commendation level after the
     * match.
     */
    MetRequirements: CommendationMetRequirement[];
}

interface ProgressiveCommendationDelta {
    /**
     The commendation ID. Commendations are available via the Metadata API.
     */
    Id: guid;

    /**
     The progress the player had made towards the commendation level before the
     match.
     */
    PreviousProgress: number;

    /**
     The progress the player had made towards the commendation level after the
     match.
     */
    Progress: number;
}

interface CommendationReward {
    /**
     The amount of XP that will be awarded.
     */
    xp: number;

    /**
     The set of requisition packs (if any) that will be awarded.
     */
    requisitionPacks: RequisitionPack[];

    /**
     The ID that uniquely identifies this reward.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

interface CommendationLevel {
    /**
     The reward the player will receive for earning this level.
     */
    reward: CommendationReward;

    /**
     For progressive commendations this indicates the threshold that the player
     must meet or exceed to consider the commendation level "completed". For meta
     commendations, this value is always zero.
     */
    threshold: number;

    /**
     The ID that uniquely identifies this commendation level.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

interface CommendationRequiredLevel {
    /**
     The threshold that the player must meet or exceed in order to consider the
     level requirement met.
     */
    threshold: number;

    /**
     The ID of the commendation level that must be met in order to consider the
     level requirement met.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

interface CommendationCategory {
    /**
     A localized name for the category, suitable for display to users. The text is
     */
      /**
     title cased.
     */
    name: string;

    /**
     An image that is used as the icon for this category.
     */
    iconImageUrl: url;

    /*
     Internal use. The order in which the category should be displayed relative to
     other categories. The lower the value, the more important the category - more
     important categories should be shown before or ahead of less important
     categories.
     order: number;
     */

    /**
     The ID that uniquely identifies this category.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

interface Commendation {
    /**
     Indicates the type of commendation. This is one of the two following options:
       - "Progressive"
       - "Meta"
     Progressive commendations have a series of increasingly difficult thresholds
     (levels) a player must cross to receive increasingly greater rewards.
     Meta commendations are unlocked when a player has completed one or more other
     commendation levels. We model this by giving meta commendations one level with
     dependencies rather than a threshold.
     */
    type: string;

    /**
     A localized name for the commendation, suitable for display to users. The text is
     title cased.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     An image that is used as the icon for this commendation.
     */
    iconImageUrl: url;

    /**
     One or more levels that model what a player must do to earn rewards and complete
     the commendation.
     */
    levels: CommendationLevel[];

    /**
     For meta commendations, the commendation is considered "completed" when all
     required levels have been "completed". This list contains one or more Level Ids
     from other commendations. For progressive commendations, this list is empty.
     */
    requiredLevels: CommendationRequiredLevel[];

    /**
     The reward the player will receive for earning this commendation.
     */
    reward: CommendationReward;

    /**
     Information about how this commendation should be categorized when shown to users.
     */
    category: CommendationCategory;

    /**
     Whether this commendation is enabled or not.
     */
    enabled: boolean;

    /**
     The ID that uniquely identifies this commendation.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
    }

/**
 * A list of commendations for the title. There is no significance to the ordering.
 */
declare type Commendations = Commendation[];

interface CSRTier {
    /**
     An image to use as the icon for th tier.
     */
    iconImageUrl: url;

    /**
     An ID that identifies the tier.
     */
    id: number;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
    }

interface CSRDesignation {
    /**
     A localized name for the designation, suitable for display to users. The text is
     title cased.
     */
    name: string;

    /**
     An image to use as the background for the designation.
     */
    bannerImageUrl: url;

    /**
     An array of "CSR Tier" entries, one for each tier this designation supports.
     Semi-Pro and Pro will not have tiers defined, and this list will be empty.
     */
    tiers: CSRTier[];

    /**
     An ID that identifies the designation. It happens to be the same as the
     designation ordering. This value is the same across all languages. Note that Id =
     0 indicates the player has an "Unranked" designation. The player must complete
     additional matches before being assigned an official CSR designation.
     */
    id: number;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

/**
A list of CSR designations for the title. CSR stands for Competitive Skill Rank.
CSR is organized into a series of designations, each with a set of tiers within
the designation. The designations are: Iron, Bronze, Silver, Gold, Onyx, and Pro.
Within each designation are tiers, for example, Bronze 1, Bronze 2, Bronze 3, etc. The
Pro designation is special. It has only one tier. For Pro players, we show users a
ranking value instead of the tier indicator. For non-Pro players, we keep the absolute
skill ranking hidden and show the CSR tier. To determine what CSR a player has earned,
view the Service Record stats for that player. There is no significance to the ordering.
*/
declare type CSRDesignations = CSRDesignation[];
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
interface FlexibleStat {
    /**
     A localized name for the data point, suitable for display to users. The text is
     title cased.
     */
    name: string;

    /**
     The type of stat this represents, it is one of the following options:
       - Count
       - Duration
     */
    type: string;

    /**
     The ID that uniquely identifies this stat.
     */
    id: guid;

    /*
     Internal use only. Do not use.
    contentId: guid;
     */
}

/**
 A list of defined flexible stat entries for the title. There is no significance to
 the ordering.
 */
declare type FlexibleStats = FlexibleStat[];
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
interface GameVariant {
    /**
     A localized name, suitable for display to users.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     The ID of the game base variant this is a variant for. Game Base Variants are
     available via the Metadata API.
     */
    gameBaseVariantId: guid;

    /**
     An icon image for the game variant.
     */
    iconUrl: string;

    /**
     The ID that uniquely identifies this game variant.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
    }

/*
 Cannot retrieve list of all game variants
 */

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
interface BaseMap {
    /**
     A localized name, suitable for display to users.
     */
    name: string;

    /**
     A localized description, suitable for display to users.
     */
    description: string;

    /**
     This lists all the game modes to which this map is available. Options are:
     - Arena
     - Campaign
     - Custom
     - Warzone
     */
    supportedGameModes: string[];

    /**
     A reference to an image. This may be null if there is no image defined.
     */
    imageUrl: string;

    /**
     The ID that uniquely identifies this map.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

/**
 A list of maps for the title. There is no significance to the ordering.
 */
declare type Maps = BaseMap[];
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
interface Playlist {
    /**
     A localized name for the playlist, suitable for display to users. The text is
     title cased.
     */
    name: string;

    /**
     A localized description for the playlist, suitable for display to users.
     */
    description: string;

    /**
     Indicates if a CSR (competitive skill rank) is shown for players who participate
     in this playlist.
     */
    isRanked: boolean;

    /**
     An image used to illustrate this playlist.
     */
    imageUrl: string;

    /**
     The game mode played in this playlist. Options are:
     - Arena
     - Campaign
     - Custom
     - Warzone
     */
    gameMode: string;

    /**
     Indicates if this playlist is currently available for play.
     */
    isActive: boolean;

    /**
     The ID that uniquely identifies this playlist.
     */
    id: guid;

    /*
     Internal use only. Do not use.
    contentId: guid;
     */
}

/**
 A list of playlists for the title. To determine which playlists a specific player
 has played within, view the Service Record stats for that player. There is no
 significance to the ordering.
 */
declare type Playlists = Playlist[];

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

interface SpartanRank {
    /**
     The amount of XP required to enter this rank.
     */
    startXp: number;

    /**
     The reward the player will receive for earning this Spartan Rank.
     */
    reward: SpartanRankReward;

    /**
     The ID that uniquely identifies this Spartan Rank.
     */
    id: number;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

interface SpartanRankReward {
    /**
     The amount of XP that will be awarded.
     */
    xp: number;

    /**
     The set of requisition packs (if any) that will be awarded.
     */
    requisitionPacks: RequisitionPack[];

    /**
     The ID that uniquely identifies this reward.
     */
    id: guid;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
}

/**
 * List of spartan ranks
 */
declare type SpartanRanks = SpartanRank[];
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

interface Weapon {
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
     The type of the vehicle. Options are:
     - Grenade
     - Turret
     - Vehicle
     - Standard
     - Power
     */
    type: string;

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
     Indicates whether the weapon is usable by a player.
     */
    isUsableByPlayer: boolean;

    /**
     The ID that uniquely identifies the weapon.
     */
    id: number;

    /*
     Internal use only. Do not use.
     contentId: guid;
     */
    }

/**
 A listing of weapons supported in the title. There is no significance to the ordering.
 */
declare type Weapons = Weapon[];

interface IMetadata {

    /**
     * @api Metadata :: Campaign Missions.
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/campaign-missions
     */
    campaignMissions(): Promise<CampaignMissions>;

    /**
     * @api Metadata :: Commendations.
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/commendations
     */
    commendations(): Promise<Commendations>;

    /**
     * @api Metadata :: CSR Designations.
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/csr-designations
     */
    csrDesignations(): Promise<CSRDesignations>;

    /**
     * @api Metadata :: Enemies
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/enemies
     */
    enemies(): Promise<Enemies>;

    /**
     * @api Metadata :: Flexible Stats
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/flexible-stats
     */
    flexibleStats(): Promise<FlexibleStats>;

    /**
     * @api Metadata :: Game Base Variants
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/game-base-variants
     */
    gameBaseVariants(): Promise<GameBaseVariants>;

    /**
     * @api Metadata :: Game Variants
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/game-variants/{id}
     * @param id  An ID that uniquely identifies a Game Variant.
     */
    gameVariantById(id: guid): Promise<GameVariant>;

    /**
     * @api Metadata :: Impulses
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/impulses
     */
    impulses(): Promise<Impulses>;

    /**
     * @api Metadata :: Maps
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/maps
     */
    maps(): Promise<Maps>;

    /**
     * @api Metadata :: Map Variants
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/map-variants/{id}
     * @param id  An ID that uniquely identifies a Map Variant.
     */
    mapVariantById(id: guid): Promise<MapVariant>;

    /**
     * @api Metadata :: Medals
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/medals
     */
    medals(): Promise<Medals>;

    /**
     * @api Metadata :: Playlists
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/playlists
     */
    playlists(): Promise<Playlists>;

    /**
     * @api Metadata :: Requisitions
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/requisitions/{id}
     * @param id  An ID that uniquely identifies a Requisition.
     */
    requisitionById(id: guid): Promise<Requistion>;

    /**
     * @api Metadata :: Requisition Packs
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/requisition-packs/{id}
     * @param id  An ID that uniquely identifies a Requisition Pack.
     */
    requisitionPackById(id: guid): Promise<RequisitionPack>;

    /**
     * Fabricated endpoint, uses constant IDs to retreive
     * the Gold, Silver and Bronze requisition packs
     */
    requisitionPacksPurchasable(): Promise<RequisitionPacks>;

    /**
     * @api Metadata :: Skulls
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/skulls
     */
    skulls(): Promise<Skulls>;

    /**
     * @api Metadata :: Spartan Ranks
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/spartan-ranks
     */
    spartanRanks(): Promise<SpartanRanks>;

    /**
     * @api Metadata :: Team Colors
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/team-colors
     */
    teamColors(): Promise<TeamColors>;

    /**
     * @api Metadata :: Vehicles
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/vehicles
     */
    vehicles(): Promise<Vehicles>;

    /**
     * @api Metadata :: Weapons
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/weapons
     */
    weapons(): Promise<Weapons>;
}


interface PaginatedResponse<T> {
    /** The starting point that was used. When the start query string parameter is
    specified, this value is identical. When start is omitted, the default value is
    returned. */
    Start: number;

    /** The number of results that the service attempted to retrieve to satisfy this
    request. Normally this value is equal to the count parameter. If the client
    specified a count parameter greater than the maximum allowed, this value contains
    the maximum allowed amount. */
    Count: number;

    /** The number of results that are actually being returned in this response. This field
    is named ResultCount to avoid confusion with Count. */
    ResultCount: number;

    /** A list of recent matches. Matches are listed in chronological order with the most
    recently started match first. */
    Results: T[];
}

interface MatchId {
    /** The ID for this match. More match details are available via the applicable
    Post Game Carnage Report endpoint. */
    MatchId: guid;

    /** The game mode applicable to this match. Options are:
    - Error = 0,
    - Arena = 1,
    - Campaign = 2,
    - Custom = 3,
    Warzone = 4. */
    GameMode: number;
}

interface Resource {
    /** The resource type. 3 indicates map variant. 2 indicates game variant. */
    ResourceType: number;

    /** The ID of the map variant. Game/Map variants are available via the Metadata API. */
    ResourceId: guid;

    /** The source of the map variant. Options are:
    - Unknown = 0
    - User-generated = 1 and 2,
    - Official = 3. */
    OwnerType: number;

    /** The owner. Usually set to null. */
    Owner: string
}

interface Match {
    /** Internal use only. A set of related resource links. */
    /** Links: links; */

    Id: MatchId;

    /** The ID of the playlist (aka Hopper) for the match.
    Hoppers are used in Arena and Warzone. In Arena, they function just as you would
    expect, similar to previous Halo titles. Warzone uses hoppers as well. There
    will be multiple Warzone hoppers which contain a rotating playlist of scenarios
    to play.
    Null for campaign & custom games.
    Playlists are available via the Metadata API. */
    HopperId: guid;

    /** The ID of the base map for this match. Maps are available via the Metadata API. */
    MapId: guid;

    /** The variant of the map for this match. There are two sources of map variants:
    official map variants available via the Metadata API and user-generated map
    variants which are not available via the APIs currently. If the map variant for
    this match was an official map variant, then the structure will be as documented
    here. This will be null for campaign games. */
    MapVariant: Resource;

    /** The ID of the game base variant for this match. Game base variants are available
    via the Metadata API. */
    GameBaseVariantId: guid;

    /** The variant of the game for this match. There are two sources of game variants:
    official game variants available via the Metadata API and user-generated game
    variants which are not available via the APIs currently. If the game variant for
    this match was an official game variant, then the structure will be as
    documented here. This will be null for campaign games. */
    GameVariant: Resource;

    /** The length of the match. This is expressed as an ISO 8601 Duration. */
    MatchDuration: string;

    /** The date and time when match ended. Note that this is different than the
    processing date, once matches end they typically take a small amount of time to
    process. The processing date is not available through this API. The time
    component of this date is always set to 00:00:00. This is expressed as an ISO
    8601 combined Date and Time. */
    MatchCompletedDate: {
        ISO8601Date: string
    };

    /** Provides team data. This list contains all team that Won or Tied. Losing teams
    are not included. This list is empty for campaign games. */
    Teams: MatchTeam[];

    /** This field contains the player's data. This will only contain data for the
    player specified in the request. */
    Players: MatchPlayer[];

    /** Whether this was a team-based game or not (e.g. free-for-all). */
    IsTeamGame: boolean;

    /** Internal use only. This will always be null. */
    /** SeasonId: null; */
}

interface MatchTeam {
    /** The ID for the team. The team's ID dictates the team's color. Team colors */
    /** are available via the Metadata API. */
    Id: number;

    /** The team's score at the end of the match. The way the score is determined is
    based off the game base variant being played:
    Breakout = number of rounds won,
    CTF = number of flag captures,
    Slayer = number of kills,
    Strongholds = number of points,
    Warzone = number of points. */
    Score: number;

    /** The team's rank at the end of the match. */
    Rank: number;
}

interface MatchPlayer {
    Player: {
        /** The player's gamertag. */
        Gamertag: string;

        /** Internal use only. This will always be null. */
        /** Xuid: null; */
    };

    /** The ID of the team that the player was on when the match ended. Zero for
    campaign games. */
    TeamId: number;

    /** The player's team-agnostic ranking in this match. */
    Rank: number;

    /** Indicates what result the player received at the conclusion of the match.
    Options are:
    - Did Not Finish = 0, The player was not present when the match ended.
    Lost: The player was on a team that was assigned a loss, typically this is
    when a team does not have rank = 1.
    - Lost = 1,
    - Tied = 2, The player was on the team that was awarded a tie. Typically this is
    when the player is on the team with rank = 1, and there is at least one
    other team with rank = 1. Ties are only for rank = 1 teams. Consider the
    scenario when exactly one team is rank = 1, and two teams are rank = 2.
    Players on the rank=1 team will have Won; players on the rank = 2 teams
    will have Lost. For ties, this documentation states 'typically' because
    the game may have unique rules for multi-team and FFA scenarios, in which
    multiple teams are awarded a win.
    - Won = 3, The player was on the team that was assigned the win, typically this is
    the team that has rank = 1.
    */
    Result: number;

    /** The number of enemy kills the player had during this match. This includes */
    /** other Spartans and Enemy AI. */
    TotalKills: number;

    /** The number of times this player died during the match. */
    TotalDeaths: number;

    /** The number of assists credited to the player during the match. This includes
    other Spartans and Enemy AI. */
    TotalAssists: number;

    /** Internal use only. This will always be null. */
    /** PreMatchRatings: null; */

    /** Internal use only. This will always be null. */
    /** PostMatchRatings: null; */
}

declare type PlayerMatches = PaginatedResponse<Match>;interface XpInfo {
    /** The player's Spartan Rank before the match started. */
    PrevSpartanRank: number;

    /** The player's Spartan Rank after the match ended. */
    SpartanRank: number;

    /** The player's XP before the match started. */
    PrevTotalXP: number;

    /** The player's XP after the match ended. */
    TotalXP: number;

    /** The multiplier on the XP earned this match based on their Spartan Rank when */
    /** the match ended. */
    SpartanRankMatchXPScalar: number;

    /** The portion of the XP the player earned this match that was based on how much */
    /** time was spent in-match. */
    PlayerTimePerformanceXPAward: number;

    /** The XP awarded to the player based on how their team ranked when the match */
    /** concluded. */
    PerformanceXP: number;

    /** The XP awarded to the player for their team-agnostic rank. */
    PlayerRankXPAward: number;

    /** The amount of XP the player earned if they played a boost card for this match,
    and the boost card criteria was met. This is a fixed amount of XP, not a
    multiplier. */
    BoostAmount: number;
}

interface CsrState {
    /** The CSR tier. */
    Tier: number;

    /** The Designation of the CSR. Options are:
    - 1 through 5: Normal designations
    - 6 and 7: Semi-pro and Pro respectively */
    DesignationId: number;

    /** The CSR value. Zero for normal designations. */
    Csr: number;

    /** The percentage of progress towards the next CSR tier. */
    PercentToNextTier: number;

    /** If the CSR is Semi-pro or Pro, the player's leaderboard ranking. */
    Rank: number;
}

interface RewardSet {
    /** The ID of the reward. */
    RewardSet: guid;

    /** The source of the reward. Options are:
    None = 0,
    Meta Commendation = 1,
    Progress Commendation = 2,
    Spartan Rank = 3 */
    RewardSourceType: number;

    /** If the Reward Source is Spartan Rank, this value is set to the Spartan Rank
    the player acquired that led to this reward being granted. Note: Unlike the
    commendations fields in this structure, this is not the GUID to a Spartan
    Rank content item. That's because the Spartan Rank content item itself does
    not detail what specific Spartan Rank it pertains to - this information is
    derived from the list of Spartan Ranks as a whole. Spartan Ranks are
    available via the Metadata API. */
    SpartanRankSource: number;

    /** If the Reward Source is a Commendation, this is the ID of the level of the
    commendation that earned the reward. */
    CommendationLevelId: guid;

    /** If the Reward Source is a Meta Commendation or Progress Commendation, this
    is the ID of the Meta Commendation or Progress Commendation, respectively,
    that earned the reward. Commendations are available via the Metadata API. */
    CommendationSource: guid;
}

interface OpponentDetails {
    /** The gamertag of the opponent that killed the player. */
    GamerTag: string;

    /** The number of times the opponent killed the player. */
    TotalKills: number;
}

interface StatCount {
    /** The ID of the flexible stat. */
    Id: guid;

    /** The number of times this flexible stat was earned. */
    Count: number;
}

interface Timelapse {
    /** The ID of the flexible stat. */
    Id: guid;

    /** The amount of time the flexible stat was earned for. This is expressed as
    an ISO 8601 Duration. */
    Timelapse: string
}

interface MedalAward {
    /** The ID of the Medal. Medals are available via the Metadata API. */
    MedalId: number;

    /** The number of times the Medal was earned. */
    Count: number;
}

interface EnemyKill {
    /** The enemy this entry references */
    Enemy: {
        /** The Base ID for the enemy. */
        BaseId: number;

        /** The attachments (variants) for the enemy. */
        Attachments: number[];
    },

    /** Total number of kills on the enemy by the player */
    TotalKills: number;
}

interface WeaponStat {
    WeaponId: {
        /** The ID of the weapon. Weapons are available via the Metadata API. */
        StockId: number;

        /** Any attachments the weapon had. */
        Attachments: number[];
    },

    /** The number of shots fired for this weapon. */
    TotalShotsFired: number;

    /** The number of shots landed for this weapon. */
    TotalShotsLanded: number;

    /** The number of headshots for this weapon. */
    TotalHeadshots: number;

    /** The number of kills for this weapon. */
    TotalKills: number;

    /** The total damage dealt for this weapon. */
    TotalDamageDealt: number;

    /** The total possession time for this weapon. This is expressed as an ISO 8601 */
    /** Duration. */
    TotalPossessionTime: string
}

interface ImpulseCount {
    /** The ID of the Impulse. Impulses are available via the Metadata API. */
    Id: number;

    /** The number of times the Impuse was earned. */
    Count: number;
}

interface PlayerStat {
    /** The experience information for the player in this match. */
    XpInfo: XpInfo;

    /** The Competitive Skill Ranking (CSR) of the player before the match started. If
    the player is still in measurement matches, this field is null. If the player
    finished the last measurement match this match, this field is still null. */
    PreviousCsr: CsrState;

    /** The Competitive Skill Ranking (CSR) of the player after the match ended. If the
    player is still in measurement matches, this field is null. */
    CurrentCsr: CsrState;

    /** The player's measurement matches left. If this field is greater than zero, then
    the player will not have a CSR yet. If the player finished the match, this match
    is included in this count. */
    MeasurementMatchesLeft: number;

    /** The set of rewards that the player got in this match. */
    RewardSets: RewardSet[];

    /** The number of times the player killed each opponent. If the player did not kill
    an opponent, there will be no entry for that opponent. */
    KilledOpponentDetails: OpponentDetails[];

    /** The number of times the player was killed by each opponent. If the player was
    not killed by an opponent, there will be no entry for that opponent. */
    KilledByOpponentDetails: OpponentDetails[];

    /** The game base variant specific stats for this match. Flexible stats are
    available via the Metadata API. */
    FlexibleStats: {
        /** The set of flexible stats that are derived from medal events. */
        MedalStatCounts: StatCount[];

        /** The set of flexible stats that are derived from impulse events. */
        ImpulseStatCounts: StatCount[];

        /** The set of flexible stats that are derived from medal time lapses. */
        MedalTimelapses: Timelapse[];

        /** The set of flexible stats that are derived from impulse time lapses. */
        ImpulseTimelapses: Timelapse[];
    },

    /** Details on any credits the player may have earned from playing this match. */
    CreditsEarned: {
        /** Indicates how the credits result was arrived at. Options are:
        - Credits Disabled In Playlist = 0,
        TotalCreditsEarned is zero because this playlist
        has credits disabled.
        - Player Did Not Finish = 1,
        Credits are enabled in this playlist, but
        TotalCreditsEarned is zero because the player did not finish the match.
        - Credits Earned = 2,
        Credits are enabled in this playlist and the player completed
        the match, so the credits formula was successfully evaluated. The fields below
        provide the client with the values used in the formula.
        @note If we used
        one or more default values, we still return NormalResult. The fields below
        will confirm the actual values used. */
        Result: number;

        /** The total number of credits the player earned from playing this match. */
        TotalCreditsEarned: number;

        /** The scalar applied to the credits earned based on the player's Spartan Rank. */
        SpartanRankModifier: number;

        /** The portion of credits earned due to the player's team-agnostic rank in the
        match. */
        PlayerRankAmount: number;

        /** The portion of credits earned due to the time the player played in the match. */
        TimePlayedAmount: number;

        /** The portion of credits earned due to the boost card the user applied */
        BoostAmount: number;
    },

    /** The player's progress towards meta commendations. Commendations that had no
    progress earned this match will not be returned. */
    MetaCommendationDeltas: MetaCommendationDelta[];

    /** The player's progress towards progressive commendations. Commendations that had
    no progress earned this match will not be returned. */
    ProgressiveCommendationDeltas: ProgressiveCommendationDelta[];

    Player: {
        /** The player's gamertag. */
        Gamertag: string;

        /** Internal use only. This will always be null. */
        /** Xuid: null; */
    };

    /** The ID of the team that the player was on when the match ended. */
    TeamId: number;

    /** The player's team-agnostic ranking. */
    Rank: number;

    /** Indicates whether the player was present in the match when it ended. */
    DNF: boolean;

    /** The player's average lifetime. */
    AvgLifeTimeOfPlayer: string;

    /** Internal use only. This will always be null. */
    /** PreMatchRatings: null; */

    /** Internal use only. This will always be null. */
    /** PostMatchRatings: null; */

    /** Total number of kills done by the player. This includes melee kills, shoulder
    bash kills and Spartan charge kills, all power weapons, AI kills and vehicle
    destructions. */
    TotalKills: number;

    /** Total number of headshots done by the player. */
    TotalHeadshots: number;

    /** Total weapon damage dealt by the player. */
    TotalWeaponDamage: number;

    /** Total number of shots fired by the player. */
    TotalShotsFired: number;

    /** Total number of shots landed by the player. */
    TotalShotsLanded: number;

    /** The weapon the player used to get the most kills this match. */
    WeaponWithMostKills: {
        WeaponId: {
            /** The ID of the weapon. Weapons are available via the Metadata API. */
            StockId: number;

            /** Any attachments the weapon had. */
            Attachments: number[];
        },

        /** The number of shots fired for this weapon. */
        TotalShotsFired: number;

        /** The number of shots landed for this weapon. */
        TotalShotsLanded: number;

        /** The number of headshots for this weapon. */
        TotalHeadshots: number;

        /** The number of kills for this weapon. */
        TotalKills: number;

        /** The total damage dealt for this weapon. */
        TotalDamageDealt: number;

        /** The total possession time for this weapon. This is expressed as an ISO 8601
        Duration. */
        TotalPossessionTime: string
    },

    /** Total number of melee kills by the player. */
    TotalMeleeKills: number;

    /** Total melee damage dealt by the player. */
    TotalMeleeDamage: number;

    /** Total number of assassinations by the player. */
    TotalAssassinations: number;

    /** Total number of ground pound kills by the player. */
    TotalGroundPoundKills: number;

    /** Total ground pound damage dealt by the player. */
    TotalGroundPoundDamage: number;

    /** Total number of shoulder bash kills by the player. */
    TotalShoulderBashKills: number;

    /** Total shoulder bash damage dealt by the player. */
    TotalShoulderBashDamage: number;

    /** Total grenade damage dealt by the player. */
    TotalGrenadeDamage: number;

    /** Total number of power weapon kills by the player. */
    TotalPowerWeaponKills: number;

    /** Total power weapon damage dealt by the player. */
    TotalPowerWeaponDamage: number;

    /** Total number of power weapon grabs by the player. */
    TotalPowerWeaponGrabs: number;

    /** Total power weapon possession by the player. This is expressed as an ISO 8601
    Duration. */
    TotalPowerWeaponPossessionTime: string;

    /** Total number of deaths by the player. */
    TotalDeaths: number;

    /** Total number of assists by the player. */
    TotalAssists: number;

    /** Not used. */
    TotalGamesCompleted: number;

    /** Not used. */
    TotalGamesWon: number;

    /** Not used. */
    TotalGamesLost: number;

    /** Not used. */
    TotalGamesTied: number;

    /** Total timed played in this match by the player. */
    TotalTimePlayed: string;

    /** Total number of grenade kills by the player. */
    TotalGrenadeKills: number;

    /** The set of Medals earned by the player. */
    MedalAwards: MedalAward[];

    /** List of enemy vehicles destroyed. Vehicles are available via the Metadata API.
    @note this stat measures enemy vehicles, not any vehicle destruction. */
    DestroyedEnemyVehicles: EnemyKill[];

    /** List of enemies killed, per enemy type. Enemies are available via the Metadata
    API. */
    EnemyKills: EnemyKill[];

    /** The set of weapons (weapons and vehicles included) used by the player. */
    WeaponStats: WeaponStat[];

    /** The set of Impulses (invisible Medals) earned by the player. */
    Impulses: ImpulseCount[];

    /** Total number of Spartan kills by the player. */
    TotalSpartanKills: number;
}

interface RoundStat {
    /** The round number this entry pertains to. */
    RoundNumber: number;

    /** The end rank for the team this round. */
    Rank: number;

    /** The end score for the team this round. */
    Score: number;
}


interface TeamStat {
    /** The ID for the team. */
    TeamId: number;

    /** The team's score at the end of the match. The way the score is determined is
    based off the game base variant being played:
    Breakout = number of rounds won,
    CTF = number of flag captures,
    Slayer = number of kills,
    Strongholds = number of points,
    Warzone = number of points. */
    Score: number;

    /** The team's rank at the end of the match. */
    Rank: number;

    /** The set of round stats for the team. */
    RoundStats: RoundStat[];
}

interface PGCRArena {

    /** A list of stats for each player who was present in the match. */
    PlayerStats: PlayerStat[];

    /** A list of stats for each team who in the match. Note that in Free For All modes,
    there is an entry for every player. */
    TeamStats: TeamStat[];

    /** Indicates if the match is completed or not. Some match details are available while */
    /** the match is in-progress, but the behavior for incomplete matches in undefined. */
    IsMatchOver: boolean;

    /** The length of the match. This is expressed as an ISO 8601 Duration. */
    TotalDuration: string;

    /** The variant of the map for this match. Map variants are available via the Metadata
    API. */
    MapVariantId: guid;

    /** The variant of the game for this match. Game variants are available via the Metadata
    API. */
    GameVariantId: guid;

    /** The playlist ID of the match. Playlists are available via the Metadata API. */
    PlaylistId: guid;

    /** The ID of the base map for this match. Maps are available via the Metadata API. */
    MapId: guid;

    /** The ID of the game base variant for this match. Game base variants are available via
    the Metadata API. */
    GameBaseVariantId: guid;

    /** Whether this was a team-based game or not. */
    IsTeamGame: boolean;

    /** Internal use only. This will always be null. */
    /** SeasonId: null; */
}/// <reference path="./PlayerMatches.d.ts"/>
/// <reference path="./PGCRArena.d.ts"/>

interface IMatchesParams {
    player: string;
    mode?: string;
    start?: number;
    count?: number;
    [key:string]: string | number;
}

interface IStats {

    /**
     * @api Stats :: Matches for Player
     * @endpoint https://www.haloapi.com/stats/{title}/players/{player}/matches[?modes][&start][&count]
     * @param player  The Player's gamertag.
     */
    playerMatches(player: string): Promise<PlayerMatches>;
    playerMatches(params: IMatchesParams): Promise<PlayerMatches>;

    /**
     * @api Stats :: Post Game Carnage Report: Arena
     * @endpoint https://www.haloapi.com/stats/{title}/arena/matches/{id}
     *   {id} An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    arenaMatchById(id: guid): Promise<PGCRArena>;

    // TODO: typescript definitions for response


    /**
     * @api Stats :: Post Game Carnage Report: Warzone
     * @endpoint https://www.haloapi.com/stats/{title}/warzone/matches/{id}
     * @param id  An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    warzoneMatchById(id: guid): Promise<any>;

    /**
     * @api Stats :: Post Game Carnage Report: Campaign
     * @endpoint https://www.haloapi.com/stats/{title}/campaign/matches/{id}
     * @param id  An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    campaignMatchById(id: guid): Promise<any>;

    /**
     * @api Stats :: Post Game Carnage Report: Custom
     * @endpoint https://www.haloapi.com/stats/{title}/custom/matches/{id}
     * @param id  An ID that uniquely identifies a match. Match IDs can be retrieved from the "GET Matches for Player" API.
     */
    customMatchById(id: guid): Promise<any>;

    /*
     * Single player service record
     */

    // TODO: typescript definitions for response
    serviceRecordArena(player: string): Promise<any>;
    serviceRecordWarzone(player: string): Promise<any>;
    serviceRecordCampaign(player: string): Promise<any>;
    serviceRecordCustom(player: string): Promise<any>;

    /*
     * Multiple player service records
     */

    // TODO: typescript definitions for response
    serviceRecordsArena(players: string[]): Promise<any>;
    serviceRecordsWarzone(players: string[]): Promise<any>;
    serviceRecordsCampaign(players: string[]): Promise<any>;
    serviceRecordsCustom(players: string[]): Promise<any>;

}
/**
 * The URL of an image of the player's emblem
 */
declare type EmblemImage = url;
/**
 * The URL of the player's Spartan Image
 */
declare type SpartanImage = url; /// <reference path="EmblemImage.d.ts"/>
/// <reference path="SpartanImage.d.ts"/>

interface IProfileParams {
    player: string;

    /**
     * An optional size (specified in pixels) of the image
     * requested. When specified, this value must be one of the following
     * values: 95, 128, 190, 256, 512. These values should be kept in service
     * config so adjustments can be made later if necessary. If a value is
     * specified that is not in this list, the API returns HTTP 400 ("Bad
     * Request"). If the size is empty or missing, the API will use 256.
     */
    size?: number;

    /**
     * An optional crop that will be used to determine what
     * portion of the Spartan is returned in the image. The value must be
     * either "full" or "portrait". If no value is specified "full" is used.
     * If an unsupported value is provided, the API returns HTTP 400 ("Bad
     * Request").
     * @note Only available for the Spartan Image endpoint
     */
    crop?: string;

    /**
     * This object can be indexed using JavaScript ["key"] notation.
     */
    [key: string]: any;
}

interface IProfile {
    /**
     * @api Profile :: Emblem Image
     * @endpoint https://www.haloapi.com/metadata/{title}/profile/{player}/emblem[?size]
     * @param params  The Player's Gamertag, or an IProfileParams options object
     */
    emblemImage(player: string): Promise<EmblemImage>;
    emblemImage(params: IProfileParams): Promise<EmblemImage>;

    /**
     * @api Profile :: Spartan Image
     * @endpoint https://www.haloapi.com/profile/{title}/profiles/{player}/spartan[?size][&crop]
     * @param params  The Player's Gamertag, or an IProfileParams options object
     */
    spartanImage(player: string): Promise<SpartanImage>;
    spartanImage(params: IProfileParams): Promise<SpartanImage>;
}/// <reference path="./metadata/index.d.ts"/>
/// <reference path="./stats/index.d.ts"/>
/// <reference path="./profile/index.d.ts"/>

/**
 * Declare some simple aliases for semantic purposes
 */

declare type guid = string;
declare type url = string;

/**
 * @param apiKey Your API key. API keys are obtained from
 *               http://developer.haloapi.com/
 * @param title The title of the game for this API instance. Currently
 *              only "h5" (Halo 5: Guardians) is supported.
 * @param cache The caching layer. Default is null, for no caching,
 *              current supported options: "redis"
 * @param cacheOptions the options object or argument list passed to the
 *                     caching client. For redis this can be omitted, or, e.g.
 *                     `[ 'redis://user:pass@host:port', options ]`.
 */
interface IHaloAPIOptions {
    apiKey: string,
    cache?: string,
    cacheOptions?: any,
    title?: string
}

/**
 * The root HaloAPI interface.
 * Provides access to endpoint services,
 * and optional caching support.
 */
interface IHaloAPI {
    /**
     * Access metadata endpoints
     */
    metadata: IMetadata;

    /**
     * Access stats endpoints
     */
    stats: IStats;

    /**
     * Access profile endpoints
     */
    profile: IProfile;

    /**
     * Asynchronously retreive an endpoint from the Halo API.
     * @param endpoint The endpoint path (not including host) to request.
     * @param <T>      The type of the argument passed on promise fulfillment
     */
    getJSON<T>(endpoint: string, bypassCache?: boolean): Promise<T>;

    /**
     * Asynchronously retreive the location header from the Halo API.
     * @param endpoint  The endpoint path (not including host) to request.
     */
    getImageURL(endpoint: string): Promise<url>;

    /**
     * Ensures that a guid is roughly in the shape of a guid.
     * Only checks that the characters are correct. Does not validate length.
     * Bi-product is that all `id`s that return true do not need to be encoded
     * in a URL component.
     */
    isGuid(id: guid): boolean;

    /**
     * Provide this function with an endpoint function from this api,
     * such as `api.metadata.commendations`, and it will provide a
     * schema for the expected successful response.
     * @param endpointFn the function which which to retrieve a schema.
     * @returns a JSON Schema for a particular endpoint.
     */
    jsonSchema(endpointFn: Function): {};

    /**
     * Clear the cache. If no cache is in use this will instantly
     * reject.
     * @return A promise to be fulfilled when the case is cleared,
     * or rejected of an error occurs or no items were cleared.
     */
    cacheClear(): Promise<number>;
}

/**
 * Adapters to various supported caches.
 */
interface CacheAdapter {

    /**
     * Get an item to the cache with a specified key.
     * @param key  The specified key.
     * @param <T>  The type of the value.
     * @returns A promise resolving to the value, or a rejection on cache miss.
     */
    get<T>(key: string): Promise<T>;

    /**
     * Set an intem in the cache with a specified key.
     * @param key  The specified key.
     * @param value  The value to store.
     * @param <T>  The type of `value`
     */
    set<T>(key: string, value: T): Promise<void>;

    /**
     * Retrieve all keys matching a pattern.
     * @param pattern a key to search the cache with.
     * @return  A promise resolving to a list of keys.
     */
    keys(pattern: string): Promise<string[]>;

    /**
     * Delete a key
     * @param  The key to delete.
     * @return A promise to be fulfilled when the key is deleted.
     */
    delete(key: string): Promise<number>;

    /**
     * Delete a set of keys.
     * @param  The keys to delete.
     * @return A promise to be fulfilled when the key is deleted.
     */
    delete(keys: string[]): Promise<number>;
}

interface CacheAdapterClass {
    /**
     * Create an adapter
     * @param Options will be passed to through to the cache implementation.
     */
    new (options: any): CacheAdapter;
}

interface HaloAPIClass {
    /**
     * Create an instance of the HaloAPI.
     * @param opts  Either an options object or your API key string.
     */
    new (): IHaloAPI;
}

/**
 * An object whose keys are the names of cache systems,
 * and values are the classes to be constructed to adapt the
 * cache system.
 */
interface SupportedCaches {
    [name: string]: CacheAdapterClass;
}

declare module 'haloapi/schema' {
     var _default: (service: string, path?: string) => (target: any, key: string) => void;
    export = _default;

}
declare module 'haloapi/stats' {
     class Stats implements IStats {
        api: IHaloAPI;
        private title;
        constructor(api: IHaloAPI);
        /** @inheritdoc */
        playerMatches(params: string | IMatchesParams): Promise<PlayerMatches>;
        /** @inheritdoc */
        warzoneMatchById(id: guid): Promise<PGCRArena>;
        /** @inheritdoc */
        customMatchById(id: guid): Promise<any>;
        /** @inheritdoc */
        campaignMatchById(id: guid): Promise<any>;
        /** @inheritdoc */
        arenaMatchById(id: guid): Promise<PGCRArena>;
        /** @inheritdoc */
        serviceRecordArena(player: string): Promise<any>;
        /** @inheritdoc */
        serviceRecordCampaign(player: string): Promise<any>;
        /** @inheritdoc */
        serviceRecordWarzone(player: string): Promise<any>;
        /** @inheritdoc */
        serviceRecordCustom(player: string): Promise<any>;
        /** @inheritdoc */
        serviceRecordsArena(players: string[]): Promise<any>;
        /** @inheritdoc */
        serviceRecordsCampaign(players: string[]): Promise<any>;
        /** @inheritdoc */
        serviceRecordsWarzone(players: string[]): Promise<any>;
        /** @inheritdoc */
        serviceRecordsCustom(players: string[]): Promise<any>;
        private serviceRecord<T>(gameMode, player);
        private serviceRecords<T>(gameMode, players);
    }
    export = Stats;

}
declare module 'haloapi/metadata' {
     class Metadata implements IMetadata {
        api: IHaloAPI;
        private title;
        constructor(api: IHaloAPI);
        /** @inheritdoc */
        campaignMissions(): Promise<CampaignMissions>;
        /** @inheritdoc */
        commendations(): Promise<Commendations>;
        /** @inheritdoc */
        csrDesignations(): Promise<CSRDesignations>;
        /** @inheritdoc */
        enemies(): Promise<Enemies>;
        /** @inheritdoc */
        flexibleStats(): Promise<FlexibleStats>;
        /** @inheritdoc */
        gameBaseVariants(): Promise<GameBaseVariants>;
        /** @inheritdoc */
        gameVariantById(id: guid): Promise<GameVariant>;
        /** @inheritdoc */
        impulses(): Promise<Impulses>;
        /** @inheritdoc */
        maps(): Promise<Maps>;
        /** @inheritdoc */
        mapVariantById(id: guid): Promise<MapVariant>;
        /** @inheritdoc */
        medals(): Promise<Medals>;
        /** @inheritdoc */
        playlists(): Promise<Playlists>;
        /** @inheritdoc */
        requisitionById(id: guid): Promise<Requistion>;
        /** @inheritdoc */
        requisitionPackById(id: guid): Promise<RequisitionPack>;
        /** @inheritdoc */
        requisitionPacksPurchasable(): Promise<RequisitionPacks>;
        /** @inheritdoc */
        skulls(): Promise<Skulls>;
        /** @inheritdoc */
        spartanRanks(): Promise<SpartanRanks>;
        /** @inheritdoc */
        teamColors(): Promise<TeamColors>;
        /** @inheritdoc */
        vehicles(): Promise<Vehicles>;
        /** @inheritdoc */
        weapons(): Promise<Weapons>;
    }
    export = Metadata;

}
declare module 'haloapi/profile' {
     class Profile implements IProfile {
        api: IHaloAPI;
        private title;
        constructor(api: IHaloAPI);
        /** @inheritdoc */
        emblemImage(params: string | IProfileParams): Promise<EmblemImage>;
        /** @inheritdoc */
        spartanImage(params: string | IProfileParams): Promise<SpartanImage>;
        private constructQs(params);
    }
    export = Profile;

}
declare module 'haloapi/index' {
     class HaloAPI implements IHaloAPI {
        /** @inheritdoc */
        stats: IStats;
        /** @inheritdoc */
        metadata: IMetadata;
        /** @inheritdoc */
        profile: IProfile;
        private apiKey;
        private host;
        private cacheName;
        private title;
        private cacheManager;
        constructor(opts: string | IHaloAPIOptions);
        /** @inheritdoc */
        getJSON<T>(endpoint: string, bypassCache?: boolean): Promise<T>;
        /** @inheritdoc */
        getImageURL(endpoint: string): Promise<url>;
        /** @inheritdoc */
        isGuid(id: guid): boolean;
        /** @inheritdoc */
        jsonSchema(endpointFn: any): {};
        private handleRequestRejection<T>(endpoint, error, isJSON);
        private duplicateRequest<T>(message, endpoint, isJSON);
        /** @inheritdoc */
        cacheClear(): Promise<number>;
    }
    export = HaloAPI;

}
declare module 'haloapi' {
    import HaloAPI = require('haloapi/index');
    interface HaloAPIClass {
        new(opts: string | IHaloAPIOptions): HaloAPI;
    }

    var __haloAPI: HaloAPIClass;
    export = __haloAPI;
}

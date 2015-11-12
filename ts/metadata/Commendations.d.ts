/**
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

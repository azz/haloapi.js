
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
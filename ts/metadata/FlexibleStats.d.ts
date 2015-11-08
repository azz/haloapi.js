 
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
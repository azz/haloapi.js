import { guid, url } from '../types';
export interface CampaignMission {
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
}
/**
 * A listing of campaign missions supported in the title. There is no significance to the
 * ordering.
 */
export declare type CampaignMissions = CampaignMission[];

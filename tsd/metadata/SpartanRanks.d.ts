/// <reference path="../common.d.ts"/>
/// <reference path="RequisitionPacks.d.ts"/>

/**
 * API: Metadata -> Spartan Ranks
 * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/spartan-ranks
 * Params:
 *   {title}: Always "h5"
 */

interface SpartanRank {
    // The amount of XP required to enter this rank.
    startXp: number;

    // The reward the player will receive for earning this Spartan Rank.
    reward: SpartanRankReward;

    // The ID that uniquely identifies this Spartan Rank.
    id: number;

    // Internal use only. Do not use.
    // contentId: guid;
}

interface SpartanRankReward {
    // The amount of XP that will be awarded.
    xp: number;

    // The set of requisition packs (if any) that will be awarded.
    requisitionPacks: RequisitionPack[];

    // The ID that uniquely identifies this reward.
    id: guid;

    // Internal use only. Do not use.
    // contentId: guid;
}

declare type SpartanRanks = SpartanRank[];
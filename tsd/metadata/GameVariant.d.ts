/// <reference path="../common.d.ts"/>

/**
 * API: Metadata -> Game Variants
 * Endpoint: https://www.haloapi.com/metadata/{title}/metadata/game-variants/{id}
 * Params:
 *   {title}: Always "h5"
 *   {id}: An ID that uniquely identifies a Game Variant.
 */

interface GameVariant {
    // A localized name, suitable for display to users.
    name: string;

    // A localized description, suitable for display to users.
    description: string;

    // The ID of the game base variant this is a variant for. Game Base Variants are
    // available via the Metadata API.
    gameBaseVariantId: guid;

    // An icon image for the game variant.
    iconUrl: string;

    // The ID that uniquely identifies this game variant.
    id: guid;

    // Internal use only. Do not use.
    // contentId: guid;
}

// Cannot retrieve list of all game variants
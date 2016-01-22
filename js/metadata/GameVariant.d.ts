import { guid } from '../types';
export interface GameVariant {
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
}

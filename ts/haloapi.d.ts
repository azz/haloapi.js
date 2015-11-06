/// <reference path="./metadata/index.d.ts"/>
/// <reference path="./stats/index.d.ts"/>
/// <reference path="./profile/index.d.ts"/>

/**
 * Declare some simple aliases for semantic purposes
 */

declare type guid = string;
declare type url = string;
declare type Callback<T> = (success?: T, error?: string) => void;

interface IHaloAPI {
    metadata: IMetadata;
    stats: IStats;
    profile: IProfile;

    /**
     * Asynchronously retreive an endpoint from the Halo API.
     * Callback fired with two arguments:
     *   {data}: The JSON data
     *   {error}: The string representing the error
     * Only one of these will ever be defined.
     */
    getJSON<T>(endpoint: string, 
               callback: Callback<T>): void;

    /**
     * Asynchronously retreive the location header from the Halo API.
     * Callback fired with two arguments:
     *   {data}: The URL location
     *   {error}: The string representing the error
     * Only one of these will ever be defined.
     */
    getImageURL(endpoint: string, 
                callback: Callback<url>): void;

    /**
     * Ensures that a guid is roughly in the shape of a guid.
     * Only checks that the characters are correct. Does not validate length.
     * Bi-product is that all {id}s that return true do not need to be encoded
     * in a URL component.
     */
    isGuid(id: guid): boolean;
}

declare var HaloAPI: IHaloAPI;

declare module "haloapi" {
    export = HaloAPI;
}





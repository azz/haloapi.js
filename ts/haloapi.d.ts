/// <reference path="./metadata/index.d.ts"/>
/// <reference path="./stats/index.d.ts"/>
/// <reference path="./profile/index.d.ts"/>

/**
 * Declare some simple aliases for semantic purposes
 */

declare type guid = string;
declare type url = string;

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
     * Bi-product is that all {id}s that return true do not need to be encoded
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

}

declare var HaloAPI: IHaloAPI;

declare module "haloapi" {
    export = HaloAPI;
}





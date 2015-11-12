/// <reference path="./metadata/index.d.ts"/>
/// <reference path="./stats/index.d.ts"/>
/// <reference path="./profile/index.d.ts"/>

/**
 * Declare some simple aliases for semantic purposes
 */

declare type guid = string;
declare type url = string;

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

/**
 * The TypeScript module to export a Node JS module.
 */
declare module "haloapi" {

    /**
     * The exported HaloAPI class
     */
    export = HaloAPIClass;
}





/*!
 *! Copyright (c) 2015 Lucas Azzola 
 *! Distributed under the MIT License. 
 *! (See accompanying file LICENSE.md or visit:
 *!  <http://opensource.org/licenses/MIT> 
 */

/// <reference path="./haloapi.d.ts"/>
/// <reference path="./lib/tsd.d.ts" />

import Stats = require("./stats");
import Metadata = require("./metadata");
import Profile = require("./profile");

import rp = require("request-promise");
var codependency = require("codependency"); // no typings? oh well

var requireOptional = codependency.register(module, {
    index: ['optionalCacheDependencies']
})

const DEBUG: boolean = !!process.env.HALOAPI_DEBUG;

/**
 * @param apiKey Your API key. API keys are obtained from 
 *               http://developer.haloapi.com/ 
 * @param title The title of the game for this API instance. Currently
 *              only "h5" (Halo 5: Guardians) is supported.     
 * @param cache The caching layer. Default is null, for no caching,
 *              current supported options: "redis"
 * @param cacheOptions the options object or argument list passed to the 
 *                     caching client. For redis this can be omitted, or, e.g.
 *                     `[ 'redis://user:pass@host:port', options ]`.
 */
interface HaloAPIOptions {
    apiKey: string,
    cache?: string,
    cacheOptions?: any,
    title?: string
}

class HaloAPI implements IHaloAPI {
    /** @inheritdoc */
    stats: IStats;

    /** @inheritdoc */
    metadata: IMetadata;

    /** @inheritdoc */
    profile: IProfile;

    // Important: Privacy is only enforced by the TypeScript compiler.
    // This member will still be accessible from a JS console, for instance.
    private apiKey: string;
    private host: string;
    private cacheName: string;
    private title: string;

    private cacheManager: CacheManager;

    constructor(opts: string | HaloAPIOptions) {
        var options: HaloAPIOptions = {
            apiKey: null
        };
        if (typeof opts === "string") {
            options = { apiKey: opts };
        } else {
            options = opts;
        }

        this.stats = new Stats(this);
        this.metadata = new Metadata(this);
        this.profile = new Profile(this);

        this.host = "https://www.haloapi.com";
        this.apiKey = options.apiKey;
        this.title = options.title || "h5";
        this.cacheName = options.cache || null;

        this.cacheManager = new CacheManager(this.cacheName, options.cacheOptions);
    }

    /** @inheritdoc */
    getJSON<T>(endpoint: string, bypassCache?: boolean): Promise<T> {
        var options = {
            url: this.host + endpoint,
            headers: { 
                'Ocp-Apim-Subscription-Key': this.apiKey,
            },
            gzip: true,
            json: true,
            // resolveWithFullResponse: true
        };

        var promise = bypassCache 
            ? Promise.reject(null)
            : this.cacheManager.cacheGet<T>(endpoint);

        return promise.catch((cacheError) => {
            DEBUG && console.log("fetching:", options.url);
            return rp.get(options)
                .catch((error: any) => {
                    return this.handleRequestRejection<T>(endpoint, error, true);
                })
                .then((response) => {
                    this.cacheManager.cacheSet(endpoint, <T>response);
                    return response;
                });
        });

    }

    /** @inheritdoc */
    getImageURL(endpoint: string): Promise<url> {
        var options = {
            url: this.host + endpoint,
            followRedirect: false,
            headers: { 
                'Ocp-Apim-Subscription-Key': this.apiKey 
            },
            resolveWithFullResponse: true
        };

        DEBUG && console.log("fetching:", options.url);

        return rp.get(options)
            .catch(error => {
                var response = error.response;
                if (response.statusCode == 302)
                    return response.headers.location;

                throw error;
            })
            .catch((error: any) => {
                return this.handleRequestRejection<url>(endpoint, error, false);
            })

    }    

    /** @inheritdoc */
    isGuid(id: guid): boolean {
        if (id && /^[a-zA-Z0-9\-]+$/.test(id)) {
            return true;
        }
        return false;
    }

    /** @inheritdoc */
    jsonSchema(endpointFn: any): {} {
        // relative to this file when compiled (i.e js/)
        var path: string = "../haloapi-schema/";

        if ("schema" in endpointFn) {
            path += endpointFn.schema;
        } else {
            throw "Invalid schema endpoint function";            
        }

        try {
            return require(path);
        } catch (error) {
            throw `Cannot find schema: ${path}`;
        }
    }

    private handleRequestRejection<T>(
        endpoint: string, 
        error: any, 
        isJSON: boolean
    ): Promise<T> {

        if (error.name === "RequestError") {
            throw error.message;
        } else {

            var json = error.response ? error.response.toJSON() : {};

            var message = json.body
                ? json.body.message
                : "An error occurred.";

            json.requestError = error;
            json.statusCode = json.statusCode || error.statusCode;

            if (json.statusCode == 429) {
                return this.duplicateRequest<T>(message, endpoint, isJSON);
            }
            throw json;
        }
    }

    private duplicateRequest<T>(
        message, 
        endpoint: string, 
        isJSON: boolean
    ): Promise<T> {
        // parse the response to get the seconds to next request
        var seconds;
        if (isJSON) {
            seconds = message.split(" ").filter(parseInt);
            seconds = seconds.length ? parseInt(seconds[0]) : 2;
        } else {
            seconds = 2;
        }

        var wait: number = 100 + (seconds * 1000);
        DEBUG && console.log("retrying in:", wait);

        return new Promise<T>((accept: any, reject: any) => {
            setTimeout(() => {
                if (isJSON) {
                    this.getJSON<T>(endpoint)
                        .then(accept).catch(reject);
                } else {
                    this.getImageURL(endpoint)
                        .then(accept).catch(reject); 
                }
            }, wait);
        });
    }

    /** @inheritdoc */
    cacheClear(): Promise<number> {
        if (!this.cacheName)
            return Promise.reject("No cache in use");

        return this.cacheManager.cacheClear();
    }
};

class CacheManager {

    private adapter: CacheAdapter;

    constructor(public name: string, public options: any) {
        if (!name) {
            this.adapter = null;
            return;
        }
        DEBUG && console.log("initializing cache:", name);
        if (!(name in CacheAdapters)) {
            throw `The cache: ${name} is not supported.`;
        }
        this.adapter = new (CacheAdapters[name])(options);
    }

    /** @inheritdoc */
    cacheSet<T>(uri: string, item: T): void {
        if (!this.adapter) return;
        this.adapter.set<T>(`haloapi.js:uri:${uri}`, item)
        DEBUG && console.log("cache set: ", uri);
    }

    /** @inheritdoc */
    cacheGet<T>(uri: string): Promise<T> {
        if (!this.adapter)
            return Promise.reject("No cache specified");

        return this.adapter.get<T>(`haloapi.js:uri:${uri}`)
            .then(_ => { 
                DEBUG && console.log("cache hit:", uri);
                return _;
            })
            .catch(_ => {
                DEBUG && console.log("cache miss: ", uri);
                return Promise.reject(_);
            });
    }    

    /** @inheritdoc */
    cacheClear() {
        if (!this.adapter)
            return Promise.reject("No cache specied");

        return this.adapter.keys("haloapi.js:uri:*")
            .then(keys => {
                if (!keys.length)
                    return Promise.resolve(0);
                else
                    return this.adapter.delete(keys);
            })
            .then(n => {
                DEBUG && console.log("cache cleared: ", n);
                return n;
            });
    }
}

/**
 * Redis cache adapter.
 * @todo Pull this out to a seperate directory.
 */
class RedisCache implements CacheAdapter {

    private redis: any;
    private redisClient: any;

    /** @inheritdoc */
    constructor(private options: any) {
        this.redis = requireOptional('redis');

        if (!this.redis) 
            throw "ERROR: You've opted for redis caching, yet redis "
                + "client is not installed. Run `npm install redis` first.";

        this.redisClient = Array.isArray(options)
            ? this.redis.createClient(...options)
            : this.redis.createClient(options);
    }

    /** @inheritdoc */
    get<T>(key: string): Promise<T> {
        return new Promise<T>((accept, reject) => {
            this.redisClient.get(key, (err, reply) => {
                reply ? accept(<T>JSON.parse(reply)) : reject(err);
            });
        });
    }

    /** @inheritdoc */
    set<T>(key: string, value: T): Promise<void> {
        return new Promise<void>((accept, reject) => {
            this.redisClient.set(key, JSON.stringify(value), (err, ok) => {
                err ? reject(err) : accept(ok);                                    
            });
        });
    }

    /** @inheritdoc */
    keys(pattern: string): Promise<string[]> {
        return new Promise<string[]>((accept, reject) => {
            this.redisClient.keys(pattern, (err, replies: string[]) => {
                err ? reject(err) : accept(replies);
            });
        });
    }

    /** @inheritdoc */
    delete(param: any): Promise<number> {
        var keys = [].concat(param);
        return new Promise<number>((accept, reject) => {
            this.redisClient.del(keys, (err, count: number) => {
                err ? reject(err) : accept(count);
            });
        });
    }
};

var CacheAdapters: SupportedCaches = {};

CacheAdapters["redis"] = RedisCache;

export = HaloAPI;

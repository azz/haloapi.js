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

var Caches = {
    get redis() {
        return requireOptional('redis');
    }
};

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

    private cacheClient: any;

    /**
     * Create an instance of the HaloAPI. 
     * @param opts  Either an options object or your API key string.
     */
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

        this.initCache(options.cacheOptions);
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
            : this.cacheGet<T>(endpoint);

        return promise.catch((cacheError) => {
            DEBUG && console.log("fetching:", options.url);
    
            return rp.get(options)
                .then((response) => {
                    this.cacheSet(endpoint, <T>response);
                    return response;
                })
                .catch((error: any) => {
                    if (error.name === "RequestError") {
                        throw error.message;
                    } else {
                        var json = error.response.toJSON();

                        var message = json.body
                            ? json.body.message
                            : "An error occurred.";

                        if (json.statusCode == 429) {
                            return this.duplicateRequest<T>(message, endpoint, true);
                        }

                        throw `${json.statusCode} - ${message}`;
                    }
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
            .catch((error: any) => {
                if (error.name === "RequestError") {
                    throw error.message;
                } else {
                    DEBUG 
                        && console.log("error:", error.message, options.url);
                    
                    if (error.statusCode == 429) {
                        return this.duplicateRequest<url>("2", endpoint, false);
                    }

                    // console.info(error, response, body);
                    var response = error.response;
                    if (response.statusCode == 302) 
                        return response.headers.location;

                    throw response.statusCode;                
                }
            });        
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

    private duplicateRequest<T>(
        message, 
        endpoint: string, 
        isJSON: boolean
    ): Promise<T> {
        // parse the response to get the seconds to next request
        var seconds = message.split(" ").filter(parseInt);
        seconds = seconds.length ? parseInt(seconds[0]) : 1;

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

    private initCache(cacheOptions: any): void {
        if (!this.cacheName) {
            this.cacheClient = null;
            return;
        }
        DEBUG && console.log("initializing cache:", this.cacheName);

        switch (this.cacheName) {
        case "redis":
            if (!Caches.redis)
                throw "ERROR: You've opted for redis caching, yet redis client is not installed."
                    + '       Run `npm install redis` first.'
            if (cacheOptions && cacheOptions.length)
                this.cacheClient = Caches.redis.createClient(...cacheOptions);
            else    
                this.cacheClient = Caches.redis.createClient(cacheOptions);
            break;
        }
    }

    private cacheSet<T>(uri: string, item: T) {
        if (!this.cacheClient) return;
        var json: string = JSON.stringify(item);

        switch (this.cacheName) {
            case "redis":
                this.cacheClient.set(`haloapi.js:uri:${uri}`, json);
                DEBUG && console.log("cache set: ", uri);
                break;
        }
    }

    private cacheGet<T>(uri: string): Promise<T> {
        if (!this.cacheClient) 
            return Promise.reject("No cache specified");

        return new Promise<T>((accept, reject) => {
            switch (this.cacheName) {
            case "redis":
                this.cacheClient.get(`haloapi.js:uri:${uri}`, (err, reply) => {
                    if (DEBUG)
                       reply
                           ? console.log("cache hit: ", uri)
                           : console.error("cache miss: ", uri);

                    reply ? accept(<T>JSON.parse(reply)) : reject(err);
                });
                break;
            }

        });
    }

    cacheClear(): Promise<number> {
        if (!this.cacheClient) 
            return Promise.reject("No cache in use");

        switch (this.cacheName) {
        case "redis":
            return new Promise<number>((accept, reject) => {
                this.cacheClient.keys("haloapi.js:uri:*", (err, replies) => {
                    if (!replies.length)
                        reject("Nothing to delete");

                    this.cacheClient.del(replies, (err, count: number) => {
                        if (err)
                            reject(err);
                        accept(count);
                    });
                });
            });
        }
    }
};

export = HaloAPI;

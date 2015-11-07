/// <reference path="./haloapi.d.ts"/>
/// <reference path="./lib/tsd.d.ts" />

import Stats = require("./stats");
import Metadata = require("./metadata");
import Profile = require("./profile");

import {get} from "request-promise";

class HaloAPI implements IHaloAPI {
    stats: IStats;
    metadata: IMetadata;
    profile: IProfile;

    // Important: Privacy is only enforced by the TypeScript compiler.
    // This member will still be accessible from a JS console, for instance.
    private apiKey: string;
    private host: string;

    constructor(apiKey: string, public title: string = "h5") {
        this.stats = new Stats(this);
        this.metadata = new Metadata(this);
        this.profile = new Profile(this);

        this.apiKey = apiKey;
        this.host = "https://www.haloapi.com";
    }

    getJSON<T>(endpoint: string): Promise<T> {
        var options = {
            url: this.host + endpoint,
            headers: { 
                'Ocp-Apim-Subscription-Key': this.apiKey 
            },
            json: true,
            // resolveWithFullResponse: true
        };
        process.env.HALOAPI_DEBUG && console.log("fetching:", options.url);

        // TODO check if we're running in a browser and use XMLHttpRequest
        return get(options)
            .catch((error: any) => {
                if (error.name === "RequestError") {
                    throw error.message;
                } else {                    
                    var json = error.response.toJSON();
                    var message = json.body 
                        ? json.body.message 
                        : "An error occurred.";
                    throw `${json.statusCode} - ${message}`;
                }
            });

    }

    getImageURL(endpoint: string): Promise<url> {
        var options = {
            url: this.host + endpoint,
            followRedirect: false,
            headers: { 
                'Ocp-Apim-Subscription-Key': this.apiKey 
            },
            resolveWithFullResponse: true
        };

        process.env.HALOAPI_DEBUG && console.log("fetching:", options.url);

        return get(options)
            .catch((error: any) => {
                if (error.name === "RequestError") {
                    throw error.message;
                } else {
                    // console.info(error, response, body);
                    var response = error.response;
                    if (response.statusCode == 302) 
                        return response.headers.location;

                    throw response.statusCode;                
                }
            });        
    }    

    isGuid(id: guid): boolean {
        if (id && /^[a-zA-Z0-9\-]+$/.test(id)) {
            return true;
        }
        return false;
    }
};

export = HaloAPI;

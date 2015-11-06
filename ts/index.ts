/// <reference path="./haloapi.d.ts"/>
/// <reference path="./lib/tsd.d.ts" />

import Stats = require("./stats");
import Metadata = require("./metadata");
import Profile = require("./profile");

import {get} from "request";

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

    getJSON<T>(endpoint: string, 
               callback: Callback<T>): void {
        var options = {
            url: this.host + endpoint,
            headers: { 
                'Ocp-Apim-Subscription-Key': this.apiKey 
            }
        };
        // TODO switch to "request-promise" 
        // TODO check if we're running in a browser and use XMLHttpRequest
        get(options, (error: any, response: any, body: any) => {
            if (!error && response.statusCode == 200) {
                callback(JSON.parse(body));
            } else {                
                // TODO handle throttling
                try {
                    var obj = JSON.parse(body);
                    callback(null, `${obj.statusCode} - ${obj.message}`);
                } catch(e) {
                    callback(null, String(response.statusCode));
                }
            }
        });
    }

    getImageURL(endpoint: string, 
                callback: Callback<url>): void {
        var options = {
            url: this.host + endpoint,
            followRedirect: false,
            headers: { 
                'Ocp-Apim-Subscription-Key': this.apiKey 
            }
        };
        get(options, (error: any, response: any, body: any) => {
            // console.info(error, response, body);
            if (response.statusCode == 302) {
                callback(response.headers.location);
            } else {                
                callback(null, response.statusCode);
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

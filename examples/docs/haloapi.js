// This package is a JavaScript client of the Halo 5 Developer's API [Beta], written in TypeScript (a superset of JavaScript) and transpiled into a Node JS module.

// It provides one function for each endpoint, returning a promise. There are some additional functions that offer alternate access to some endpoints.

// # Links

// <table cellpadding=5>
// <tr>
// <td> [![NPM](https://logo.clearbit.com/npmjs.com)](https://www.npmjs.com/package/haloapi "NPM Package") </td>
// <td> [![Documentation](http://typedoc.org/images/logo-128.png)](https://haloapi.js.org/typedoc/ "Documentation") </td>
// </tr>
// <tr>
// <td>[NPM Package](https://www.npmjs.com/package/haloapi)</td>
// <td>[Full Documentation](http://haloapi.js.org/typedoc/)</td>
// </tr>
// <tr><td colspan=2></td></tr>
// <tr>
// <td>[![GitHub](https://logo.clearbit.com/github.com)](https://github.com/azz/haloapi.js "GitHub") </td>
// <td>[![Halo Waypoint](https://logo.clearbit.com/halowaypoint.com)](https://www.halowaypoint.com/en-us/forums/01b3ca58f06c4bd4ad074d8794d2cf86/topics/binding-javascript-node-js-module/bc2b9b9a-cef3-4394-b56e-523eb68aa9e6/posts "Halo Waypoint Thread") </td>
// </tr>
// <tr>
// <td>[GitHub Repository](https://github.com/azz/haloapi.js)</td>
// <td>[Waypoint Thread](https://www.halowaypoint.com/en-us/forums/01b3ca58f06c4bd4ad074d8794d2cf86/topics/binding-javascript-node-js-module/bc2b9b9a-cef3-4394-b56e-523eb68aa9e6/posts)</td>
// </table>

// # Installation 

// This project can be installed as a node module with NPM.

$ npm install haloapi --save

// If you don't have Node or NPM, go ahead and [install it](https://nodejs.org/en/download/).

// *Requires Node version `0.11` or later.*

// # Initialization

// Create an instance of the API client, providing your API key.

var api = new (require("haloapi"))('YOUR API KEY HERE');

// That is a shortcut for this.

var HaloAPI = require("haloapi");
var api = new HaloAPI('YOUR API KEY HERE');

// ## Persistent Caching (redis)

// [Redis](https://redis.io/) caching is currently supported and when opten-in 
// will automatically cache any response that isn't expected to be modified. 
// This includes all metadata endpoints and some stats endpoints, such as the 
// response from a request for a match by ID.

var api = new HaloAPI({
    apiKey: 'YOUR API KEY HERE',
    cache: 'redis',
    cacheOptions: {} // or ['url', {options...}]
});

// As redis is optional, you need to install the client if you want to use it.
// To do so, do an `npm install redis`.

// The `cacheOptions` are passed directly to the `createClient(...)` redis
// function. If you're running a stock redis server, you won't need to pass
// the `cacheOptions` object. Otherwise you can pass either an object or a 
// list that will be passed to one of the `redis.createClient` overloads.

/* 
 * Redis client overloads:
 *   redis.createClient()
 *   redis.createClient(options)
 *   redis.createClient(unix_socket, options)
 *   redis.createClient('redis://user:pass@host:port', options)
 *   redis.createClient(port, host, options)
 */

// See [here](https://www.npmjs.com/package/redis#overloading) for further
// information. 

// ### Clearing the Cache

// You may at any time clear the cache. 
 
api.cacheClear().then(function (n) {
    console.log(n, 'items in cache were removed.');
});

// Additional caches and database support may come in the future, 
// along with the ability to remove a specific entry from the cache. 

// # Making Requests

// Instances of `HaloAPI` comprises three instances (objects) that you will 
// be using. `metadata`, `stats`, and `profile`. These correspond to the three
// API services provided at 
// [developer.haloapi.com](http://developer.haloapi.com/).

// Each of these three objects consist of a number of functions that will 
// make a request to the Halo API and parse the response. In general these
// will be of the form `api.<service>.<endpoint>(<params...>)`. For example:
 
api.profile.spartanImage("Major Nelson");
api.stats.playerMatches("Major Nelson");
api.metadata.commendations();

// All of these functions return a Promise. Promises are mechanisms for 
// receiving results from an asynchronous call, without providing a 
// callback as a parameter. The standard API for handling promises is:

var promise = getSomePromise();
promise.then(successHandler).catch(errorHandler);

// Where `successHandler` and `errorHandler` are both functions to be
// invoked with results or errors. 

// As all our functions return promises, we can handle the results in 
// like this:

api.metadata.weapons()
    .then(function (weapons) {
        /* do something with `weapons` */
    })
    .catch(function (error) {
        /* do something with `error` */
    });
// `error` will usually have be an object 
// containing a `message` and `statusCode`.         

// The above is ECMAScript 5 compatible. If you are writing using ECMAScript 
// 2015 (aka ES6), you may remove some clutter by using lambdas. 

api.metadata.weapons()
    .then(weapons => {
        /* do something with `weapons` */
    })
    .catch(error => {
        /* do something with `error` */
    });

// And if you are using ECMAScript 2016 (ES7), you can use the async/await
// syntax to reduce it down to this.

try {
    var weapons = await api.metadata.weapons();
    /* do something with `weapons` **/
} catch (error) {
    /* do something with `error` */    
}

// Excellent. For the rest of this document, for brevity, we will ommit error
// handling, and provide basic usage for each of the functions available. 

// # List of Endpoints

// ## Metadata Endpoints

// These APIs will provide access to Metadata. Use them to translate IDs
// from other APIs. All Metadata APIs support all locales that are supported
// by the game.

// Get all campaign missions, and log the name.

api.metadata.campaignMissions()
    .then(function (missions) {
        missions.forEach(function (mission) {
            console.log(mission.name);
        });
    });

// Get all commendations.

api.metadata.commendations().then(console.log);

// Get all CSR Designations (Ranks and Tiers).

api.metadata.csrDesignations().then(console.log);

// Get all campaign enemies.

api.metadata.enemies().then(console.log);


// Get all flexible statistic metadata. Impulses and medals.

api.metadata.flexibleStats().then(console.log);

// Get all base game variants (game types).

api.metadata.gameBaseVariants().then(console.log); 

// Get a specific game variant. IDs for this endpoint can be obtained from 
// the `api.stats.playerMatches` endpoint.

api.metadata.gameVariantById("963ca478-369a-4a37-97e3-432fa13035e1")
    .then(function (gameVariant) {
        console.log(gameVariant.name); // -> "Slayer"
    });

// Get all impulses (invisible medals such as "kill" and "assist").

api.metadata.impulses().then(console.log);

// Get all base maps.

api.metadata.maps().then(console.log);

// Get a map variant by its ID guid. These IDs can be obtained from 
// `api.stats.playerMatches`.

api.metadata.mapVariantById("a44373ee-9f63-4733-befd-5cd8fbb1b44a")
    .then(function (map) {
        console.log(map.name); // -> "Truth"
    });

// Get a list of all medals. 

api.metadata.medals().then(console.log);

// Get playlists (hoppers).

api.metadata.playlists().then(console.log);

// Get a requisition (card) by ID. These IDs can be obtained from
// rank rewards in `api.metadata.spartanRanks`.

api.metadata.requisitionById("e4f549b2-90af-4dab-b2bc-11a46ea44103")
    .then(function (req) {
        console.log(req.name); // -> "10 RP"
        console.log(req.description); // -> "Claim 10 REQ Points."
    });

// Get a requisition pack by ID. Requisition packs include those purchasable,
// and those obtained by unlocking ranks and commendations. 

api.metadata.requisitionPackById("d10141cb-68a5-4c6b-af38-4e4935f973f7")
    .then(console.log);

// Get an array containing three packs, Gold, Silver and Bronze. 
// Underling this funciton are three separate calls to 
// `api.metadata.requisitionById`.

api.metadata.requisitionPacksPurchasable()
    .then(console.log);

// Get all arena seasons

api.metadata.seasons().then(console.log);

// Get all skulls from the campaign.

api.metadata.skulls().then(console.log);

// Get all spartan ranks. Useful for determining rewards for ranking up.
 
api.metadata.spartanRanks().then(console.log);

// Get all teams colors for multiplayer. Red, green, blue, etc. 
// Also provides images for each team.

api.metadata.teamColors().then(console.log);

// Get an array of all vehicles in the game. 

api.metadata.vehicles().then(console.log);

// Get an array of all weapons in the game. 

api.metadata.weapons().then(console.log);

// ## Stats Endpoints

// These APIs provide statistical data about players and matches.


// **NEW** Retrieve game events for a match.

api.stats.events("58976373-026c-4b31-8e79-cb6e9e3a1bbb").then(console.log);

// Retreive most recent matches by a player. 

api.stats.playerMatches("Frankie")
    .then(function (data) {
        data.Results.forEach(function (match) {
            var date = new Date(match.MatchCompletedDate.ISO8601Date);
            console.log("Match Completed on " + date.toDateString());
        })
    });

// Additional options are available on this endpoint, to make use of them
// pass an options object instead of a string.

api.stats.playerMatches({
    player: "Frankie",
    modes: "arena,warzone",
    start: 10,
    count: 20
}).then(console.log);

// Get the post game carnaage report for an arena game. 

api.stats.arenaMatchById("1ad1cdec-a86a-4e2c-94d5-cab180b55eea")
    .then(function (match) {
        console.log(match.TeamStats);
    });

// The same is available for `warzone`, `custom`, and `campaign`.

api.stats.warzoneMatchById('...').then(console.log);
api.stats.customMatchById('...').then(console.log);
api.stats.campaignMatchById('...').then(console.log);


// Get a player's service record for arena.

api.stats.serviceRecordArena("Major Nelson")
    .then(console.log);

// The same is available for `warzone`, `custom`, and `campaign`.

api.stats.serviceRecordWarzone("...").then(console.log);
api.stats.serviceRecordCustom("...").then(console.log);
api.stats.serviceRecordCampaign("...").then(console.log);

// The above four functions have partners that return multiple service 
// records, one for each player. Note the `s` in `Records`.

var players = [ "Frankie", "Major Nelson" ];
api.stats.serviceRecordsArena(players).then(console.log);
api.stats.serviceRecordsWarzone(players).then(console.log);
api.stats.serviceRecordsCustom(players).then(console.log);
api.stats.serviceRecordsCampaign(players).then(console.log);

// ## Profile Endpoints

// These APIs provide profile data for players.

// Get a URL that points to an image of a player's in-game emblem.

api.profile.emblemImage("Frankie").then(console.log);

// Additionally, you can specify the size of the emblem.

api.profile.emblemImage({
    player: "Frankie",
    size: 512 // Default 256. Options 95, 128, 190, 256, 512.
}).then(console.log);

// Get a URL that points to an image of the player's in-game spartan.

api.profile.spartanImage("Frankie").then(console.log);

// Similarly, you can pass an options object to specify size and crop.

api.profile.spartanImage({
    player: "Frankie",
    size: 512, // Default 256. Options 95, 128, 190, 256, 512.
    crop: "portrait" // Default "full", options "full", "portrait"
});

// # JSON Schemas 

// This package integrates with 
// [haloapi-schema](https://github.com/azz/haloapi-schema), 
// a package containing schemas to define the shape of responses from the API.
// These schemas are used in test cases, but can also be accessed
// using the `api.jsonSchema(endpointFunction)` function.

var commendationsSchema = api.jsonSchema(api.metadata.commendations);

// You can use the `json-schema` npm package to perform validation.

var validate = require('json-schema').validate;
api.metadata.commendations()
    .then(function (commendations) {
        var validation = validate(commendations, commendationsSchema);
        if (validation.valid) {
            /* success! */
        } else {
            /* validation errors :( */ 
            validation.errors.forEach(console.log);
        }
    });

// # Feedback and Support

// If you have any feedback or issues, feel free to 
// [open an issue](https://github.com/azz/haloapi.js/issues),
// post in [the Waypoint thread](https://www.halowaypoint.com/en-us/forums/01b3ca58f06c4bd4ad074d8794d2cf86/topics/binding-javascript-node-js-module/bc2b9b9a-cef3-4394-b56e-523eb68aa9e6/posts)
// or, tweet me [@DerFlatulator](https://twitter.com/DerFlatulator).

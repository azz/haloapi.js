# Halo API - JavaScript Binding (with TypeScript)

This project is a statically typed JavaScript binding of the Halo 5 Developer's API using TypeScript.

Using this project with your development IDE, such as WebStorm, Visual Studio or Atom, it will provide both an API and static type checking for what can be a complex entagnlement of statistics and metadata.

## How Do I Get Started?

If you haven't aready grabbed a key, head to [developer.haloapi.com](https://developer.haloapi.com/), sign in, head to Products and grab a key. The documentation for the API itself is also availble there. 

If you have any issues there are forums available [here](https://www.halowaypoint.com/en-us/forums/01b3ca58f06c4bd4ad074d8794d2cf86/topics), and a thread for this particular binding [here](https://www.halowaypoint.com/en-us/forums/01b3ca58f06c4bd4ad074d8794d2cf86/topics/binding-javascript-node-js-module/bc2b9b9a-cef3-4394-b56e-523eb68aa9e6/posts).

## Installation 

This project can be installed as a node module with

    npm install haloapi

Easy!

If you don't have Node or NPM, go ahead an [install it](https://nodejs.org/en/download/).

## What is TypeScript?

TypeScript is a language developed by Microsoft in order to add static typing to the JavaScript programming language. While this project is written with TypeScript, it produces JavaScript that is readable and usable without even knowing that TypeScript exists.

To find out more about TypeScript, [head here](http://www.typescriptlang.org/).

## Basic Usage

Usage with plain old JavaScript

Setup:

    var HaloAPI = require('haloapi'); 
    var h5 = new HaloAPI('YOUR API KEY');

(If you've cloned this repo use `require('./js/index')`)

Retreive all Weapons:

    h5.metadata.weapons().then(function (weapons) {
        weapons.forEach(function (weapon) {
            console.log(weapon.name, '\n\t', weapon.description);
        });
    });

Get my player's emblem:

    h5.profile.emblemImage("Your Gamertag").then(function (url) { 
        console.log(url); 
    });

Check if you've a higher max rank than your friend:

    h5.stats.serviceRecordsArena([ "Your GT", "Their GT" ]).then(function (d) {  
        function isBetter(a, b) {
            return [
                a.Result.ArenaStats.HighestCsrAttained, 
                b.Result.ArenaStats.HighestCsrAttained
              ].sort(function (_a, _b) {
                // Do some fancy JS sorting... Rank, then Tier, then % to next tier.
                var n = _b.DesignationId - _a.DesignationId;
                if (n) return n;
                n = _b.Tier - _a.Tier;
                if (n) return n;
                return _b.PercentToNextTier - _a.PercentToNextTier;
            })[0] === a.Result.ArenaStats.HighestCsrAttained;
        }
        console.log(isBetter(d[0], d[1]) ? "You win" : "You lose");
    });

With **all** requests, you are returned a Promise. Basic promise usage is as follows:

    h5.stats.playerMatches("Frankie")
        .then(function (data) {
            // success, iterate through your matches
        })
        .catch(function (error) {  
            // uh oh, handle error here.
        });

With ECMAScript2016 (ES7), you can do the following, which will await in a non-blocking manner:

    var matches = await h5.stats.spartanImage("Frankie");    

Using with TypeScript (completely optional)
    
    /// <reference path="ts/haloapi.d.ts"/>
    import HaloAPI = require('haloapi');
    var h5: IHaloAPI = new HaloAPI('YOUR API KEY');

    h5.metadata.weapons().then((weapons: Weapons) => {
        weapons.forEach((weapon: Weapon) => {
            console.log(weapon.name, '\n\t', weapon.description);
        });
    });

## TODO

- Full usage documentation
- Complete the TypeScript definitions for remaining stats endpoints.
- Handle rate limiting

## Development

If you've modified the TypeScript sources, you'll need to regenerate the JS. Run this in a terminal at the top-level directory for this repository.

    $ npm run build  

## Testing

Test suite is written with Mocha and Chai. Before running tests, set the `HALOAPI_KEY` variable in your environment.

    $ export HALOAPI_KEY=YOUR-API-KEY-HERE

And run all tests with:

    $ npm test 

## Contributers

Feel free to send a pull request if you wish to contribute.

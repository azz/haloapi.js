[![Build Status](https://travis-ci.org/azz/haloapi.js.svg)][ci-server]
[![npm version](https://badge.fury.io/js/haloapi.svg)][npm-package] 
[![npm downloads](https://img.shields.io/npm/dt/haloapi.svg)][npm-package]

# Halo API  - JavaScript Client

This package is a JavaScript client of the Halo 5 Developer's API [Beta], written in TypeScript (a superset of JavaScript) and transpiled into a Node JS module. 

It provides one function for each endpoint, returning a promise. There are some additional functions that offer alternate access to some endpoints. 

Using this project with your development IDE, such as WebStorm, Visual Studio or Atom, it will provide both an API and static type checking for what can be a complex entanglement of statistics and metadata.

## About This Package

### Features

- One function per endpoint, with a handful of helper functions provided.
- Supports caching with redis. 
- Built in retries when rate limited. 
- Fully documented response typing.
- Available on NPM.
- Unit tested.

### How Do I Get Started?

If you haven't already grabbed a key, head to [developer.haloapi.com][developer-haloapi], sign in, head to Products and grab a key. The documentation for the API itself is also available there. 

If you have any issues there are forums available [here][waypoint-api-support], and a thread for this particular binding [here][waypoint-thread].

### What is TypeScript?

TypeScript is a language developed by Microsoft in order to add static typing to the JavaScript programming language. While this project is written with TypeScript, it produces JavaScript that is readable and usable without even knowing that TypeScript exists.

To find out more about TypeScript, [head here](http://www.typescriptlang.org/).

### Quick Links

- [Halo Waypoint API Support Forum][waypoint-api-support]
- [Halo Waypoint haloapi.js Thread][waypoint-thread]
- [haloapi.js NPM Package][npm-package]
- [haloapi.js Continous Integration (Travis CI)][ci-server]
- [haloapi.js Usage Documentation][usage-docs]
- [Official Halo API Documentation][developer-haloapi]
- [JSON Schemas for Halo API Responses][json-schemas]

## Usage Guide

### Package Installation 

This project can be installed as a node module with

```bash
$ npm install haloapi
```

Easy!

If you don't have Node or NPM, go ahead and [install it](https://nodejs.org/en/download/).

Requires Node version 0.11 or later.

### Basic Usage

Brief usage instructions follow. **[More in depth usage info is available here][usage-docs]**.

Usage with plain old JavaScript.

#### Setup

```javascript
var HaloAPI = require('haloapi'); 
var h5 = new HaloAPI('YOUR API KEY');
```

(If you've cloned this repo use `require('./js/index')`)

#### Retrieve all Weapons

```javascript
h5.metadata.weapons().then(function (weapons) {
    weapons.forEach(function (weapon) {
        console.log(weapon.name, '\n\t', weapon.description);
    });
});
```

#### Get my player's emblem

```javascript
h5.profile.emblemImage("Your Gamertag").then(function (url) { 
    console.log(url); 
});
```

With **all** requests, you are returned a Promise. Basic promise usage is as follows:

```javascript
h5.stats.playerMatches("Frankie")
    .then(function (data) {
        // success, iterate through your matches
    })
    .catch(function (error) {  
        // uh oh, handle error here.
    });
```

#### ECMAScript2016 (ES7) `async`/`await`

With ECMAScript2016 (ES7), you can do the following, which will await in a non-blocking manner:

```javascript
let url = await h5.stats.spartanImage`Frankie`;    
```

Using with TypeScript (completely optional)

```typescript    
/// <reference path="ts/haloapi.d.ts"/>
import HaloAPI = require('haloapi');
var h5: IHaloAPI = new HaloAPI('YOUR API KEY');

h5.metadata.weapons().then((weapons: Weapons) => {
    weapons.forEach((weapon: Weapon) => {
        console.log(weapon.name, '\n\t', weapon.description);
    });
});
```

## Development

### TODO List
- Complete the TypeScript definitions for remaining stats endpoints.

### Transpiling TypeScript

If you've modified the TypeScript sources, you'll need to regenerate the JS. Run this in a terminal at the top-level directory for this repository.

```bash
$ npm run build  
```

### Building Documentation

Documentation is currently being built with [docco](https://jashkenas.github.io/docco/). All files in the `examples/docs/` directory are converted to html files with docco and hosted at, e.g. `https://azz.github.io/haloapi.js/docco/<filename>.html`. This is using GitHub pages feature (see branch `gh-pages`). The `npm run document` command will build these docs. If you are interested in sending a pull request with new docs, you may either send just the JS file and I can generate the docs, *or* follow these instructions carefully:

First time only:

```bash
$ mkdir -p docs && cd docs
$ git checkout --orphan gh-pages  # Grab current docs
$ git branch -u origin/gh-pages   # Track gh-pages branch on remote.
$ git branch -D master            # We don't need code branches.
$ cd ..                           # Back to code repository root
```

And for each time you want to build/push documentation:

```bash
$ npm run document                # Will generate files in docs/
$ cd docs                         # Important! 
$ git add docco/*.html            # Or just files you want to add
$ git commit -m "YOUR COMMIT MESSAGE"
$ git push origin gh-pages
$ cd ..                           # Return to code repo.
```

See [this blog post](https://srackham.wordpress.com/2014/12/14/publishing-a-project-website-to-github-pages/) for some explanation of what just happened. 

### Testing

Test suite is written with Mocha and Chai. Before running tests, set the `HALOAPI_KEY` variable in your environment.

```bash
$ export HALOAPI_KEY=YOUR-API-KEY-HERE
```

And run all tests with:

```bash
$ npm test 
```

All commits pushed to this repository are automatically tested on [Travis CI][ci-server].

## Contributors

Feel free to send a pull request if you wish to contribute.

## Legal 

API Client provided under the MIT license, see [`LICENSE.md`](https://github.com/azz/haloapi.js/blob/master/LICENSE.md). 

**Halo 5: Guardians © Microsoft Corporation. haloapi.js was created under Microsoft's "[Game Content Usage Rules](Game Content Usage Rules)" using assets from Halo 5: Guardians, and it is not endorsed by or affiliated with Microsoft.**

Contributors and users should also read the rules. 

[waypoint-api-support]: https://www.halowaypoint.com/en-us/forums/01b3ca58f06c4bd4ad074d8794d2cf86/topics
[waypoint-thread]: https://www.halowaypoint.com/en-us/forums/01b3ca58f06c4bd4ad074d8794d2cf86/topics/binding-javascript-node-js-module/bc2b9b9a-cef3-4394-b56e-523eb68aa9e6/posts
[npm-package]: https://www.npmjs.com/package/haloapi
[ci-server]: https://travis-ci.org/azz/haloapi.js
[usage-docs]: https://azz.github.io/haloapi.js/docco/haloapi.html
[developer-haloapi]: https://developer.haloapi.com/
[json-schemas]: https://github.com/azz/haloapi-schema

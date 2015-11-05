# Halo 5 Beta API -- JavaScript / TypeScript

*This repository is a work in progress.*

This project aims to develop a statically typed JavaScript wrapper of the Halo 5 Developer's API using TypeScript.

The project consists of two directories. 

- `src` The source code for what will become a NPM module.
- `tsd` The TypeScript definitions for the API and the reponse types. 

Using this project with your development IDE, such as WebStorm or Visual Studio, it will provide both an API and static type checking for what can be a complex entagnlement of statistics and metadata.

## TODO

- Complete the definitions for the stats endpoints.
- Move documentation from the top of `.d.ts` files to their associated function stubs.

## Installation 

Run this in a terminal at the top-level directory for this repository.

    $ npm build    

If you don't have Node or NPM, go ahead an [install it](https://nodejs.org/en/download/).

## Basic Usage

Usage with plain old JavaScript

    var HaloAPI = require('haloapi'); // if you've cloned this repo use './build/haloapi'
    var h5 = new HaloAPI('YOUR API KEY');

    h5.metadata.weapons(function (weapons) {
        weapons.forEach(function (weapon) {
            console.log(weapon.name, '\n\t', weapon.description);
        });
    });

Using with TypeScript (completely optional)
    
    /// <reference path="tsd/haloapi.d.ts"/>
    import HaloAPI from 'haloapi'; // if you've cloned this repo use './build/haloapi'
    var h5: IHaloAPI = new HaloAPI('YOUR API KEY');

    h5.metadata.weapons((weapons: Weapons) => {
        weapons.forEach((weapon: Weapon) => {
            console.log(weapon.name, '\n\t', weapon.description);
        });
    });

## Contributers

Feel free to send a pull request if you wish to contribute.

/// <reference path="./metadata/index.d.ts"/>
/// <reference path="./stats/index.d.ts"/>
/// <reference path="./profile/index.d.ts"/>

/**
 * Declare some simple aliases for semantic purposes
 */

declare type guid = string;
declare type url = string;
declare type Callback<T> = (success?: T, error?: string) => void;

interface IHaloAPI {
  metadata: IMetadata;
  stats: IStats;
  profile: IProfile;

  getJSON<T>(endpoint: string, 
             callback: Callback<T>): void;

  getImageURL(endpoint: string, 
              callback: Callback<url>): void;

  isGuid(id: guid): boolean;

}

declare var HaloAPI: IHaloAPI;

declare module "haloapi" {
    export = HaloAPI;
}





/// <reference path="metadata/metadata.d.ts"/>
/// <reference path="stats/stats.d.ts"/>
/// <reference path="profile/profile.d.ts"/>

declare var HaloAPI: IHaloAPI;

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
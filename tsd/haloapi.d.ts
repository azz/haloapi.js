/// <reference path="metadata/metadata.d.ts"/>
/// <reference path="stats/stats.d.ts"/>
/// <reference path="profile/profile.d.ts"/>

declare var HaloAPI: HaloAPI;

interface HaloAPI {
  metadata: Metadata;
  stats: Stats;
  profile: Profile;
}
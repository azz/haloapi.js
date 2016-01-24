import Promise = require('bluebird');
import {guid} from '../common';

import {CampaignMissions, CampaignMission} from './CampaignMissions';
import {Commendations, Commendation} from './Commendations';
import {CSRDesignations, CSRDesignation} from './CSRDesignations';
import {Enemies, Enemy} from './Enemies';
import {FlexibleStats, FlexibleStat} from './FlexibleStats';
import {GameBaseVariants, GameBaseVariant} from './GameBaseVariants';
import {GameVariant} from './GameVariant';
import {Impulses, Impulse} from './Impulses';
import {Maps, BaseMap} from './Maps';
import {MapVariant} from './MapVariant';
import {Medals, Medal} from './Medals';
import {Playlists, Playlist} from './Playlists';
import {Requistion} from './Requisition';
import {RequisitionPack, RequisitionPacks} from './RequisitionPacks';
import {Skulls, Skull} from './Skulls';
import {SpartanRanks, SpartanRank} from './SpartanRanks';
import {TeamColors, TeamColor} from './TeamColors';
import {Vehicles, Vehicle} from './Vehicles';
import {Weapons, Weapon} from './Weapons';

export interface IMetadata {

    /**
     * @api Metadata :: Campaign Missions.
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/campaign-missions
     */
    campaignMissions(): Promise<CampaignMissions>;

    /**
     * @api Metadata :: Commendations.
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/commendations
     */
    commendations(): Promise<Commendations>;

    /**
     * @api Metadata :: CSR Designations.
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/csr-designations
     */
    csrDesignations(): Promise<CSRDesignations>;

    /**
     * @api Metadata :: Enemies
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/enemies
     */
    enemies(): Promise<Enemies>;

    /**
     * @api Metadata :: Flexible Stats
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/flexible-stats
     */
    flexibleStats(): Promise<FlexibleStats>;

    /**
     * @api Metadata :: Game Base Variants
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/game-base-variants
     */
    gameBaseVariants(): Promise<GameBaseVariants>;

    /**
     * @api Metadata :: Game Variants
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/game-variants/{id}
     * @param id  An ID that uniquely identifies a Game Variant.
     */
    gameVariantById(id: guid): Promise<GameVariant>;

    /**
     * @api Metadata :: Impulses
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/impulses
     */
    impulses(): Promise<Impulses>;

    /**
     * @api Metadata :: Maps
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/maps
     */
    maps(): Promise<Maps>;

    /**
     * @api Metadata :: Map Variants
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/map-variants/{id}
     * @param id  An ID that uniquely identifies a Map Variant.
     */
    mapVariantById(id: guid): Promise<MapVariant>;

    /**
     * @api Metadata :: Medals
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/medals
     */
    medals(): Promise<Medals>;

    /**
     * @api Metadata :: Playlists
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/playlists
     */
    playlists(): Promise<Playlists>;

    /**
     * @api Metadata :: Requisitions
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/requisitions/{id}
     * @param id  An ID that uniquely identifies a Requisition.
     */
    requisitionById(id: guid): Promise<Requistion>;

    /**
     * @api Metadata :: Requisition Packs
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/requisition-packs/{id}
     * @param id  An ID that uniquely identifies a Requisition Pack.
     */
    requisitionPackById(id: guid): Promise<RequisitionPack>;

    /**
     * Fabricated endpoint, uses constant IDs to retreive
     * the Gold, Silver and Bronze requisition packs
     */
    requisitionPacksPurchasable(): Promise<RequisitionPacks>;

    /**
     * @api Metadata :: Skulls
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/skulls
     */
    skulls(): Promise<Skulls>;

    /**
     * @api Metadata :: Spartan Ranks
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/spartan-ranks
     */
    spartanRanks(): Promise<SpartanRanks>;

    /**
     * @api Metadata :: Team Colors
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/team-colors
     */
    teamColors(): Promise<TeamColors>;

    /**
     * @api Metadata :: Vehicles
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/vehicles
     */
    vehicles(): Promise<Vehicles>;

    /**
     * @api Metadata :: Weapons
     * @endpoint https://www.haloapi.com/metadata/{title}/metadata/weapons
     */
    weapons(): Promise<Weapons>;
}

export {
    BaseMap,
    CampaignMissions,
    CampaignMission,
    Commendation,
    Commendations,
    CSRDesignation,
    CSRDesignations,
    Enemies,
    Enemy,
    FlexibleStat,
    FlexibleStats,
    GameBaseVariant,
    GameBaseVariants,
    GameVariant,
    Impulse,
    Impulses,
    Maps,
    MapVariant,
    Medal,
    Medals,
    Playlist,
    Playlists,
    Requistion,
    RequisitionPack,
    RequisitionPacks,
    Skull,
    Skulls,
    SpartanRank,
    SpartanRanks,
    TeamColor,
    TeamColors,
    Vehicle,
    Vehicles,
    Weapon,
    Weapons,
}

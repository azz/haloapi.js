import { IHaloAPI } from './index-types';
import { guid } from './types';
import { IMetadata, CampaignMissions, Commendations, CSRDesignations, Enemies, FlexibleStats, GameBaseVariants, GameVariant, Impulses, Maps, MapVariant, Medals, Playlists, Requistion, RequisitionPack, RequisitionPacks, Skulls, SpartanRanks, TeamColors, Vehicles, Weapons } from './metadata/index';
declare class Metadata implements IMetadata {
    api: IHaloAPI;
    private title;
    constructor(api: IHaloAPI);
    /** @inheritdoc */
    campaignMissions(): Promise<CampaignMissions>;
    /** @inheritdoc */
    commendations(): Promise<Commendations>;
    /** @inheritdoc */
    csrDesignations(): Promise<CSRDesignations>;
    /** @inheritdoc */
    enemies(): Promise<Enemies>;
    /** @inheritdoc */
    flexibleStats(): Promise<FlexibleStats>;
    /** @inheritdoc */
    gameBaseVariants(): Promise<GameBaseVariants>;
    /** @inheritdoc */
    gameVariantById(id: guid): Promise<GameVariant>;
    /** @inheritdoc */
    impulses(): Promise<Impulses>;
    /** @inheritdoc */
    maps(): Promise<Maps>;
    /** @inheritdoc */
    mapVariantById(id: guid): Promise<MapVariant>;
    /** @inheritdoc */
    medals(): Promise<Medals>;
    /** @inheritdoc */
    playlists(): Promise<Playlists>;
    /** @inheritdoc */
    requisitionById(id: guid): Promise<Requistion>;
    /** @inheritdoc */
    requisitionPackById(id: guid): Promise<RequisitionPack>;
    /** @inheritdoc */
    requisitionPacksPurchasable(): Promise<RequisitionPacks>;
    /** @inheritdoc */
    skulls(): Promise<Skulls>;
    /** @inheritdoc */
    spartanRanks(): Promise<SpartanRanks>;
    /** @inheritdoc */
    teamColors(): Promise<TeamColors>;
    /** @inheritdoc */
    vehicles(): Promise<Vehicles>;
    /** @inheritdoc */
    weapons(): Promise<Weapons>;
}
export = Metadata;

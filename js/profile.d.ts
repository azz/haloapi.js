import Promise = require('bluebird');
import { IHaloAPI } from './index-types';
import { IProfile, IProfileParams, EmblemImage, SpartanImage } from './profile/index';
declare class Profile implements IProfile {
    api: IHaloAPI;
    private title;
    constructor(api: IHaloAPI);
    /** @inheritdoc */
    emblemImage(params: string | IProfileParams): Promise<EmblemImage>;
    /** @inheritdoc */
    spartanImage(params: string | IProfileParams): Promise<SpartanImage>;
    private constructQs(params);
}
export = Profile;

import { IHaloAPI, IHaloAPIOptions, IMetadata, IProfile, IStats } from './index-types';
import { guid, url } from './types';
declare class HaloAPI implements IHaloAPI {
    /** @inheritdoc */
    stats: IStats;
    /** @inheritdoc */
    metadata: IMetadata;
    /** @inheritdoc */
    profile: IProfile;
    name: string;
    private apiKey;
    private host;
    private cacheName;
    private title;
    private cacheManager;
    constructor(opts: string | IHaloAPIOptions);
    /** @inheritdoc */
    getJSON<T>(endpoint: string, bypassCache?: boolean): Promise<T>;
    /** @inheritdoc */
    getImageURL(endpoint: string): Promise<url>;
    /** @inheritdoc */
    isGuid(id: guid): boolean;
    /** @inheritdoc */
    jsonSchema(endpointFn: any): {};
    private handleRequestRejection<T>(endpoint, error, isJSON);
    private duplicateRequest<T>(message, endpoint, isJSON);
    /** @inheritdoc */
    cacheClear(): Promise<number>;
}
export = HaloAPI;

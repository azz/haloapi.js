/// <reference path="EmblemImage.d.ts"/>
/// <reference path="SpartanImage.d.ts"/>

interface IProfileParams {
    player: string;

    /** 
     * An optional size (specified in pixels) of the image
     * requested. When specified, this value must be one of the following
     * values: 95, 128, 190, 256, 512. These values should be kept in service
     * config so adjustments can be made later if necessary. If a value is
     * specified that is not in this list, the API returns HTTP 400 ("Bad 
     * Request"). If the size is empty or missing, the API will use 256.
     */
    size?: number;

    /**
     * An optional crop that will be used to determine what
     * portion of the Spartan is returned in the image. The value must be 
     * either "full" or "portrait". If no value is specified "full" is used.
     * If an unsupported value is provided, the API returns HTTP 400 ("Bad 
     * Request").
     * @note Only available for the Spartan Image endpoint
     */
    crop?: string;

    /**
     * This object can be indexed using JavaScript ["key"] notation.
     */
    [key: string]: any;
}

interface IProfile {    
    /**
     * @api Profile :: Emblem Image
     * @endpoint https://www.haloapi.com/metadata/{title}/profile/{player}/emblem[?size]
     * @param params  The Player's Gamertag, or an IProfileParams options object
     */
    emblemImage(player: string): Promise<EmblemImage>;
    emblemImage(params: IProfileParams): Promise<EmblemImage>;
    
    /**
     * @api Profile :: Spartan Image
     * @endpoint https://www.haloapi.com/profile/{title}/profiles/{player}/spartan[?size][&crop]
     * @param params  The Player's Gamertag, or an IProfileParams options object
     */
    spartanImage(player: string): Promise<SpartanImage>;
    spartanImage(params: IProfileParams): Promise<SpartanImage>;
}
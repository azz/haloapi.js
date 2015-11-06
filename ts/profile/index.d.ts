/// <reference path="EmblemImage.d.ts"/>
/// <reference path="SpartanImage.d.ts"/>

interface IProfileParams {
    player: string;
    size?: number;
    crop?: number;
    [key: string]: any;
}

interface IProfile {
    
    /**
     * API: Profile -> Emblem Image
     * Endpoint: https://www.haloapi.com/metadata/{title}/profile/{player}/emblem[?size]
     * Params:
     *   {title}: Always "h5"
     *   {player}: The Player's Gamertag
     *   {size}: (Optional) An optional size (specified in pixels) of the image
     *       requested. When specified, this value must be one of the following
     *       values: 95, 128, 190, 256, 512. These values should be kept in service
     *       config so adjustments can be made later if necessary. If a value is
     *       specified that is not in this list, the API returns HTTP 400 ("Bad 
     *       Request"). If the size is empty or missing, the API will use 256.
     */
    emblemImage(params: string | IProfileParams): Promise<EmblemImage>;

    /**
     * API: Profile -> Spartan Image
     * Endpoint: https://www.haloapi.com/profile/{title}/profiles/{player}/spartan[?size][&crop]
     * Params:
     *   {title}: Always "h5"
     *   {player}: The Player's Gamertag
     *   {size}: (Optional) An optional size (specified in pixels) of the image
     *       requested. When specified, this value must be one of the following
     *       values: 95, 128, 190, 256, 512. These values should be kept in service
     *       config so adjustments can be made later if necessary. If a value is
     *       specified that is not in this list, the API returns HTTP 400 ("Bad 
     *       Request"). If the size is empty or missing, the API will use 256.
     *   {crop}: (Optional) An optional crop that will be used to determine what
     *       portion of the Spartan is returned in the image. The value must be 
     *       either "full" or "portrait". If no value is specified "full" is used.
     *       If an unsupported value is provided, the API returns HTTP 400 ("Bad 
     *       Request").
     */
    spartanImage(params: string | IProfileParams): Promise<SpartanImage>;
}
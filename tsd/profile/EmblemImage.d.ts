/// <reference path="../common.d.ts"/>

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


declare type EmblemImage = url; 
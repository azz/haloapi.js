/// <reference path="EmblemImage.d.ts"/>
/// <reference path="SpartanImage.d.ts"/>

interface IProfileParams {
    player: string;
    size?: number;
    crop?: number;
    [key: string]: any;
}

interface IProfile {
    
    emblemImage(params: IProfileParams, callback: Callback<EmblemImage>): void;

    spartanImage(params: IProfileParams, callback: Callback<SpartanImage>): void;
}
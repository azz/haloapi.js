/// <reference path="EmblemImage.d.ts"/>
/// <reference path="SpartanImage.d.ts"/>

interface Profile {
    
    emblemImage(callback: Callback<EmblemImage>): void;

    spartanImage(callback: Callback<SpartanImage>): void;
}
/// <reference path="./haloapi.d.ts"/>

class Profile implements IProfile {

    private title: string;

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }

    /** @inheritdoc */
    emblemImage(params: string | IProfileParams): Promise<EmblemImage> {
        var p: IProfileParams;
        p = typeof params === "string" ? { player: params } : params;
        let endpoint: string = `/profile/${this.title}/profiles/` 
            + `${encodeURIComponent(p.player)}/emblem`;
        return this.api.getImageURL(endpoint + this.constructQs(p));
    }

    /** @inheritdoc */
    spartanImage(params: string | IProfileParams): Promise<SpartanImage> {
        var p: IProfileParams;
        p = typeof params === "string" ? { player: params } : params;
        let endpoint: string = `/profile/${this.title}/profiles/`
            + `${encodeURIComponent(p.player)}/spartan`;
        return this.api.getImageURL(endpoint + this.constructQs(p));
    }

    private constructQs(params: IProfileParams): string {
        let qs: string[] = [];
        for (let key in params) {
            if (key !== "player")
                qs.push(encodeURIComponent(key) + "=" 
                    + encodeURIComponent(String(params[key])));
        }
        if (qs.length) 
           return `?${qs.join("&")}`;
        return "";
    }
};

export = Profile;
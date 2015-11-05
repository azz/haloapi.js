
export default class Profile implements IProfile {

    private title: string;

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }

    emblemImage(params: IProfileParams, callback: Callback<EmblemImage>): void {
        let endpoint = `/profile/${this.title}/profiles/${encodeURIComponent(params.player)}/emblem`;
        this.api.getImageURL(endpoint + this.constructQs(params), callback);
    }

    spartanImage(params: IProfileParams, callback: Callback<SpartanImage>): void {
        let endpoint = `/profile/${this.title}/profiles/${encodeURIComponent(params.player)}/spartan`;
        this.api.getImageURL(endpoint + this.constructQs(params), callback);
    }

    private constructQs(params: IProfileParams): string {
        let qs: string[] = [];
        for (let key in params) {
            if (key !== "player")
                qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(params[key])));
        }
        if (qs.length) 
           return `?${qs.join(",")}`;
        return "";
    }
};
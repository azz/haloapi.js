/// <reference path="./haloapi.d.ts"/>

class Stats implements IStats {

    private title: string;

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }

    playerMatches(params: string | IPlayer, callback: Callback<PlayerMatches>): void {
        var _params: IPlayer = {player: null};
        if (typeof params === "object")           
            _params = <IPlayer>params;
        else
            _params = { player: <string>params };
        let endpoint = `/stats/${this.title}/players/${_params.player}/matches`;

        let qs: string[] = [];
        delete _params.player;
        for (let key in _params) {
            qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(_params[key])));
        }
        if (qs.length) 
            endpoint += `?${qs.join(",")}`;

        this.api.getJSON(endpoint, callback);
    } 


    warzoneMatchById(id: guid, callback: Callback<PGCRArena>): void {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON(`/stats/${this.title}/warzone/matches/${id}`, callback);
    }

    // below are incompletely typed. providing `any` instead of their respective types

    customMatchById(id: guid, callback: Callback<any>): void {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON(`/stats/${this.title}/custom/matches/${id}`, callback);
    }

    campaignMatchById(id: guid, callback: Callback<any>): void {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON(`/stats/${this.title}/campaign/matches/${id}`, callback);
    }

    arenaMatchById(id: guid, callback: Callback<any>): void {
        if (!this.api.isGuid(id)) {
            callback(null, "Invalid ID provided");
            return;
        }
        this.api.getJSON(`/stats/${this.title}/arena/matches/${id}`, callback);
    }

};

export = Stats;
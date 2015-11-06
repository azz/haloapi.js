/// <reference path="./haloapi.d.ts"/>

class Stats implements IStats {

    private title: string;

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }

    playerMatches(params: string | IPlayer): Promise<PlayerMatches> {
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

        return this.api.getJSON<PlayerMatches>(endpoint);
    } 


    warzoneMatchById(id: guid): Promise<PGCRArena> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<PGCRArena>(
            `/stats/${this.title}/warzone/matches/${id}`);
    }

    // below are incompletely typed. providing `any` instead of their respective types

    customMatchById(id: guid): Promise<any> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON(`/stats/${this.title}/custom/matches/${id}`);
    }

    campaignMatchById(id: guid): Promise<any> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON(`/stats/${this.title}/campaign/matches/${id}`);
    }

    arenaMatchById(id: guid): Promise<any> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON(`/stats/${this.title}/arena/matches/${id}`);
    }

    serviceRecordArena(player: string): Promise<any> {
        return this.serviceRecord("arena", player);
    }

    serviceRecordCampaign(player: string): Promise<any> { 
        return this.serviceRecord("campaign", player);       
    }

    serviceRecordWarzone(player: string): Promise<any> {
        return this.serviceRecord("warzone", player);                   
    }

    serviceRecordCustom(player: string): Promise<any> {
        return this.serviceRecord("custom", player);                           
    }

    serviceRecordsArena(players: string[]): Promise<any> {
        return this.serviceRecords("arena", players);
    }

    serviceRecordsCampaign(players: string[]): Promise<any> {
        return this.serviceRecords("campaign", players);
    }

    serviceRecordsWarzone(players: string[]): Promise<any> {
        return this.serviceRecords("warzone", players);
    }

    serviceRecordsCustom(players: string[]): Promise<any> {
        return this.serviceRecords("custom", players);
    }

    private serviceRecord<T>(gameMode: string, player: string): Promise<T> {
        return this.serviceRecords<T>(gameMode, [ player ]);
    }

    private serviceRecords<T>(gameMode: string, players: string[]): Promise<T> {
        var p: string = players.map(encodeURIComponent).join(",");
        return this.api.getJSON<any>(
            `/stats/${this.title}/servicerecords/${gameMode}?players=${p}`)
            .then((data) => data.Results);
    }

};

export = Stats;
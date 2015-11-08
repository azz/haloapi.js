/// <reference path="./haloapi.d.ts"/>

class Stats implements IStats {

    private title: string;

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }

    /** @inheritdoc */
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
            endpoint += `?${qs.join("&")}`;

        return this.api.getJSON<PlayerMatches>(endpoint);
    } 

    /** @inheritdoc */
    warzoneMatchById(id: guid): Promise<PGCRArena> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<PGCRArena>(
            `/stats/${this.title}/warzone/matches/${id}`);
    }

    // below are incompletely typed. providing `any` instead of their respective types

    /** @inheritdoc */
    customMatchById(id: guid): Promise<any> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON(`/stats/${this.title}/custom/matches/${id}`);
    }

    /** @inheritdoc */
    campaignMatchById(id: guid): Promise<any> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON(`/stats/${this.title}/campaign/matches/${id}`);
    }

    /** @inheritdoc */
    arenaMatchById(id: guid): Promise<any> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON(`/stats/${this.title}/arena/matches/${id}`);
    }

    /** @inheritdoc */
    serviceRecordArena(player: string): Promise<any> {
        return this.serviceRecord("arena", player);
    }

    /** @inheritdoc */
    serviceRecordCampaign(player: string): Promise<any> { 
        return this.serviceRecord("campaign", player);       
    }

    /** @inheritdoc */
    serviceRecordWarzone(player: string): Promise<any> {
        return this.serviceRecord("warzone", player);                   
    }

    /** @inheritdoc */
    serviceRecordCustom(player: string): Promise<any> {
        return this.serviceRecord("custom", player);                           
    }

    /** @inheritdoc */
    serviceRecordsArena(players: string[]): Promise<any> {
        return this.serviceRecords("arena", players);
    }

    /** @inheritdoc */
    serviceRecordsCampaign(players: string[]): Promise<any> {
        return this.serviceRecords("campaign", players);
    }

    /** @inheritdoc */
    serviceRecordsWarzone(players: string[]): Promise<any> {
        return this.serviceRecords("warzone", players);
    }

    /** @inheritdoc */
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
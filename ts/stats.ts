/// <reference path="./haloapi.d.ts"/>

import schema = require("./schema");

class Stats implements IStats {

    private title: string;

    constructor(public api: IHaloAPI) {
        this.title = "h5";
    }


    /** @inheritdoc */
    @schema("stats")
    events(matchId: guid): Promise<MatchEvents> {
        if (!this.api.isGuid(matchId)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<MatchEvents>(
            `/stats/${this.title}/matches/${matchId}/events`);
    }
    
    /** @inheritdoc */
    @schema("stats")
    playerMatches(params: string | IMatchesParams): Promise<PlayerMatches> {
        var _params: IMatchesParams = {player: null};
        if (typeof params === "object")           
            _params = <IMatchesParams>params;
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

        return this.api.getJSON<PlayerMatches>(endpoint, true);
    } 

    /** @inheritdoc */
    @schema("stats", "warzone-matches")
    warzoneMatchById(id: guid): Promise<PGCRArena> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<PGCRArena>(
            `/stats/${this.title}/warzone/matches/${id}`);
    }

    // below are incompletely typed. providing `any` instead of their respective types

    /** @inheritdoc */
    @schema("stats", "custom-matches")
    customMatchById(id: guid): Promise<any> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON(`/stats/${this.title}/custom/matches/${id}`);
    }

    /** @inheritdoc */
    @schema("stats", "campaign-matches")
    campaignMatchById(id: guid): Promise<any> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON(`/stats/${this.title}/campaign/matches/${id}`);
    }

    /** @inheritdoc */
    @schema("stats", "arena-matches")
    arenaMatchById(id: guid): Promise<PGCRArena> {
        if (!this.api.isGuid(id)) {
            return Promise.reject("Invalid ID provided");
        }
        return this.api.getJSON<PGCRArena>(`/stats/${this.title}/arena/matches/${id}`);
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
    @schema("stats")
    serviceRecordsArena(players: string[]): Promise<any> {
        return this.serviceRecords("arena", players);
    }

    /** @inheritdoc */
    @schema("stats")
    serviceRecordsCampaign(players: string[]): Promise<any> {
        return this.serviceRecords("campaign", players);
    }

    /** @inheritdoc */
    @schema("stats")
    serviceRecordsWarzone(players: string[]): Promise<any> {
        return this.serviceRecords("warzone", players);
    }

    /** @inheritdoc */
    @schema("stats")
    serviceRecordsCustom(players: string[]): Promise<any> {
        return this.serviceRecords("custom", players);
    }

    private serviceRecord<T>(gameMode: string, player: string): Promise<T> {
        return this.serviceRecords<T>(gameMode, [ player ])
            .then(results => results[0]);
    }

    private serviceRecords<T>(gameMode: string, players: string[]): Promise<T> {
        var p: string = players.map(encodeURIComponent).join(",");
        return this.api.getJSON<any>(
            `/stats/${this.title}/servicerecords/${gameMode}?players=${p}`, true)
            .then((data) => data.Results);
    }
    
};

export = Stats;
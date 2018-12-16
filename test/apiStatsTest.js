var HaloAPI = require("../js/index");
var chai = require('chai'),
    expect = chai.expect;

chai.use(require("chai-as-promised"));
chai.use(require("chai-things"));

describe("h5.stats", function () {
    var promise, options, id,
        player = "Frankie",
        players = [ player, "Major Nelson" ],
        h5 = new HaloAPI(process.env.HALOAPI_KEY);

    // very leniant 30 second timemout
    this.timeout(30000);

    describe(".events(matchId: guid)", function () {
        it("should succeed", function () {
            id = "58976373-026c-4b31-8e79-cb6e9e3a1bbb";
            return h5.stats.events(id);
        });
        it("should immediately error with no id", function () {
            return expect(h5.stats.events())
                .to.be.rejectedWith("Invalid ID provided");
        });
    });

    describe(".playerMatches(player: string)", function () {
        it("should succeed", function () {
            var player = "Frankie";
            return h5.stats.playerMatches(player);
        });
        it("should 4xx on bad gamertag", function () {
            var badPlayer = "this gameratag is too long";
            return expect(h5.stats.playerMatches(badPlayer))
                .to.be.rejected
                .and.eventually.have.property("statusCode")
                .and.match(/4../);
        });
    });

    describe(".playerMatches(params: IMatchesParams)", function () {
        before(function () {
            options = {
                player: "Frankie",
                count: 4,
                modes: "arena"
            };
            promise = h5.stats.playerMatches(options);
        });
        it("should succeed", function () {
            return promise;
        });
        it("should have ResultCount set to X", function () {
            return expect(promise)
                .to.eventually.have.property("ResultCount").and.equal(4)
        });
        it("should have Results of length X", function () {
            return expect(promise)
                .to.eventually.have.property("Results").and.have.length(4);
        });
    });

    // post game carnage reports are quite large,
    // expecting many seconds per test
    describe(".warzoneMatchById(id: guid)", function () {
        before(function () {
            id = "07c635c6-d753-4b27-9215-b026656243d7";
            promise = h5.stats.warzoneMatchById(id);
        });
        it("should succeed", function () {
            return promise;
        });
        it("should have player stats", function () {
            return expect(promise).to.eventually.have.property("PlayerStats")
                .and.be.an('array');
        });
        it("should have team stats", function () {
            return expect(promise).to.eventually.have.property("TeamStats")
                .and.be.an('array');
        });
        it("should immediately error with no id", function () {
            return expect(h5.stats.warzoneMatchById())
                .to.be.rejectedWith("Invalid ID provided");
        });
    });

    describe(".arenaMatchById(id: guid)", function () {
        before(function () {
            id = "1ad1cdec-a86a-4e2c-94d5-cab180b55eea";
            promise = h5.stats.arenaMatchById(id);
        });
        it("should succeed", function () {
            return promise;
        });
        it("should have player stats", function () {
            return expect(promise).to.eventually.have.property("PlayerStats")
                .and.be.an('array');
        });
        it("should have team stats", function () {
            return expect(promise).to.eventually.have.property("TeamStats")
                .and.be.an('array');
        });
        it("should immediately error with no id", function () {
            return expect(h5.stats.arenaMatchById())
                .to.be.rejectedWith("Invalid ID provided");
        });
    });

    describe(".campaignMatchById(id: guid)", function () {
        before(function () {
            id = "83a1c166-b2f9-49a2-8043-7f0b3f8a745a";
            promise = h5.stats.campaignMatchById(id);
        });
        it("should succeed", function () {
            return promise;
        });
        it("should have player stats", function () {
            return expect(promise).to.eventually.have.property("PlayerStats")
                .and.be.an('array');
        });
        it("should immediately error with no id", function () {
            return expect(h5.stats.campaignMatchById())
                .to.be.rejectedWith("Invalid ID provided");
        });
    });

    describe(".customMatchById(id: guid)", function () {
        before(function () {
            id = "08b3bad7-25cd-449b-956d-72bc4d57b280";
            promise = h5.stats.customMatchById(id);
        });
        it("should succeed", function () {
            return promise;
        });
        it("should have player stats", function () {
            return expect(promise).to.eventually.have.property("PlayerStats")
                .and.be.an('array');
        });
        it("should have team stats", function () {
            return expect(promise).to.eventually.have.property("TeamStats")
                .and.be.an('array');
        });
        it("should immediately error with no id", function () {
            return expect(h5.stats.customMatchById())
                .to.be.rejectedWith("Invalid ID provided");
        });
    });

    describe(".serviceRecordsArena(players: string[])", function () {
        before(function () {
            promise = h5.stats.serviceRecordsArena(players);
        });

        it("should succeed", function () {
            return promise;
        });
        it("should have results of requested players", function () {
            promise.then(function (data) {
                players.forEach(function (player, i) {
                    expect(data[i].Id).to.equal(player);
                })
            });
        });
    });

    describe(".serviceRecordsWarzone(players: string[])", function () {
        before(function () {
            promise = h5.stats.serviceRecordsWarzone(players);
        });

        it("should succeed", function () {
            return promise;
        });
        it("should have results of requested players", function () {
            promise.then(function (data) {
                players.forEach(function (player, i) {
                    expect(data[i].Id).to.equal(player);
                })
            });
        });
    });

    describe(".serviceRecordsCustom(players: string[])", function () {
        before(function () {
            promise = h5.stats.serviceRecordsCustom(players);
        });

        it("should succeed", function () {
            return promise;
        });
        it("should have results of requested players", function () {
            promise.then(function (data) {
                players.forEach(function (player, i) {
                    expect(data[i].Id).to.equal(player);
                })
            });
        });
    });

    describe(".serviceRecordsCampaign(players: string[])", function () {
        before(function () {
            promise = h5.stats.serviceRecordsCampaign(players);
        });

        it("should succeed", function () {
            return promise;
        });
        it("should have results of requested players", function () {
            promise.then(function (data) {
                players.forEach(function (player, i) {
                    expect(data[i].Id).to.equal(player);
                })
            });
        });
    });

    // individual player service record

    describe(".serviceRecordArena(player: string)", function () {
        before(function () {
            promise = h5.stats.serviceRecordArena(player);
        });

        it("should succeed", function () {
            return promise;
        });
        it("should have results of requested players", function () {
            return expect(promise).to.eventually.have.property("Id")
                .and.equal(player);
        });
    });

    describe(".serviceRecordWarzone(player: string)", function () {
        before(function () {
            promise = h5.stats.serviceRecordWarzone(player);
        });

        it("should succeed", function () {
            return promise;
        });
        it("should have results of requested player", function () {
            return expect(promise).to.eventually.have.property("Id")
                .and.equal(player);
        });
    });

    describe(".serviceRecordCustom(player: string)", function () {
        before(function () {
            promise = h5.stats.serviceRecordCustom(player);
        });

        it("should succeed", function () {
            return promise;
        });
        it("should have results of requested player", function () {
            return expect(promise).to.eventually.have.property("Id")
                .and.equal(player);
        });
    });

    describe(".serviceRecordCampaign(player: string)", function () {
        before(function () {
            promise = h5.stats.serviceRecordCampaign(player);
        });

        it("should succeed", function () {
            return promise;
        });
        it("should have results of requested player", function () {
            return expect(promise).to.eventually.have.property("Id")
                .and.equal(player);
        });
    });

});
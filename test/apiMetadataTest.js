var HaloAPI = require("../js/index");
var chai = require('chai'),
    expect = chai.expect;

chai.use(require("chai-as-promised"));

describe("h5.metadata", function () {
    var h5 = new HaloAPI(process.env.HALOAPI_KEY);
    
    // very leniant 30 second timemout
    this.timeout(30000);

    describe(".campaignMissions()", function () {
        it("should succeed", function () {
            return h5.metadata.campaignMissions();
        });
    });
    describe(".commendations()", function () {
        it("should succeed", function () {
            return h5.metadata.commendations();
        });
    });
    describe(".csrDesignations()", function () {
        it("should succeed", function () {
            return h5.metadata.csrDesignations();
        });
    });
    describe(".enemies()", function () {
        it("should succeed", function () {
            return h5.metadata.enemies();
        });
    });
    describe(".flexibleStats()", function () {
        it("should succeed", function () {
            return h5.metadata.flexibleStats();
        });
    });
    describe(".gameBaseVariants()", function () {    
        it("should succeed", function () {
            return h5.metadata.gameBaseVariants();
        });
    });
    describe(".gameVariantById(id: guid)", function () {
        it("should succeed", function () {
            var id = '963ca478-369a-4a37-97e3-432fa13035e1';
            return h5.metadata.gameVariantById(id);
        });
        it("should fail with bad id", function () {
            var id = '00000000-0000-0000-0000-0000000000000';
            return expect(h5.metadata.gameVariantById(id))
                .to.be.rejected;
        });
    });
    describe(".impulses()", function () {
        it("should succeed", function () {
            return h5.metadata.impulses();
        });
    });
    describe(".maps()", function () {
        it("should succeed", function () {
            return h5.metadata.maps();
        });
    });
    describe(".mapVariantById(id: guid)", function () {
        it("should succeed", function () {
            var id = 'a44373ee-9f63-4733-befd-5cd8fbb1b44a';
            return h5.metadata.mapVariantById(id);
        });
        it("should fail with bad id", function () {
            var id = '00000000-0000-0000-0000-0000000000000';
            return expect(h5.metadata.mapVariantById(id))
                .to.be.rejected;
        });
    });
    describe(".medals()", function () {
        it("should succeed", function () {
            return h5.metadata.medals();
        });
    });
    describe(".playlists()", function () {
        it("should succeed", function () {
            return h5.metadata.playlists();
        });
    });
    // TODO: find out how to get an id for this endpoint
    // describe(".requisitionById(id: guid)", function () {
    //     it("should succeed", function () {
    //         var id = '????'; 
    //         return h5.metadata.requisitionById(id);
    //     });
    // });
    describe(".requisitionPackById()", function () {
        it("should succeed", function () {
            var id = 'd10141cb-68a5-4c6b-af38-4e4935f973f7';
            return h5.metadata.requisitionPackById(id);
        });
        it("should fail with bad id", function () {
            var id = '00000000-0000-0000-0000-0000000000000';
            return expect(h5.metadata.requisitionPackById(id))
                .to.be.rejected;
        });
    });
    describe(".skulls()", function () {
        it("should succeed", function () {
            return h5.metadata.skulls();
        });
    });
    describe(".spartanRanks()", function () {
        it("should succeed", function () {
            return h5.metadata.spartanRanks();
        });
    });
    describe(".teamColors()", function () {
        it("should succeed", function () {
            return h5.metadata.teamColors();
        });
    });
    describe(".vehicles()", function () {
        it("should succeed", function () {
            return h5.metadata.vehicles();
        });
    });
    describe(".weapons()", function () {
        it("should succeed", function () {
            return h5.metadata.weapons();
        });
    });
});
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
        it("should immediately error with no id", function () {
            return expect(h5.metadata.gameVariantById())
                .to.be.rejectedWith("Invalid ID provided");
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
        it("should immediately error with no id", function () {
            return expect(h5.metadata.mapVariantById())
                .to.be.rejectedWith("Invalid ID provided");
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
    // ID retrieved from here:
    // https://www.halowaypoint.com/en-us/forums/01b3ca58f06c4bd4ad074d8794d2cf86/topics/how-do-i-get-the-id-for-a-req/a8abb35e-6fd7-4a18-ab68-0946eaa2ce0d/posts?page=1#post5
    describe(".requisitionById(id: guid)", function () {
        it("should succeed", function () {
            var id = 'e4f549b2-90af-4dab-b2bc-11a46ea44103'; 
            return h5.metadata.requisitionById(id);
        });
        it("should immediately error with no id", function () {
            return expect(h5.metadata.requisitionById())
                .to.be.rejectedWith("Invalid ID provided");
        });
    });
    describe(".requisitionPackById()", function () {
        it("should succeed (reward req pack)", function () {
            var id = 'd10141cb-68a5-4c6b-af38-4e4935f973f7';
            return h5.metadata.requisitionPackById(id);
        });
        it("should succeed (gold req pack)", function () {
            var id = '3a1614d9-20a4-4817-a189-88cb781e9152';
            return h5.metadata.requisitionPackById(id);
        });
        it("should fail with bad id", function () {
            var id = '00000000-0000-0000-0000-0000000000000';
            return expect(h5.metadata.requisitionPackById(id))
                .to.be.rejected;
        });
        it("should immediately error with no id", function () {
            return expect(h5.metadata.requisitionPackById())
                .to.be.rejectedWith("Invalid ID provided");
        });        
    });
    describe(".requisitionPacksPurchasable()", function () {
        var promise;
        before(function () {
            promise = h5.metadata.requisitionPacksPurchasable();
        });

        it("should succeed", function () {
            return promise;
        });
        it("should have three items", function () {
            expect(promise).to.eventually.have.length(3);
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
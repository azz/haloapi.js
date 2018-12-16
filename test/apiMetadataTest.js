var HaloAPI = require("../js/index");

var JSONSchema = require('json-schema');
var chai = require('chai'),
    expect = chai.expect;

chai.use(require("chai-as-promised"));

function validatePromise(promise, schema) {
    return promise.then(function (response) {
        var v = JSONSchema.validate(response, schema);
        if (v.errors.length) {
            console.error(v.errors);
        }
        return v;
    })
}

// This closure will be executed three times:
// 1. with cache enabled, but clear, to populate it.
// 2. with cache enabled, and read from it.
// 3. with cache disabled.

var metadata = function (h5, description) { 
    describe("h5.metadata" + description, function () {
        var promise, schema, id;

        // very leniant 30 second timemout
        this.timeout(30000);

        describe(".campaignMissions()", function () {
            before(function () {
                promise = h5.metadata.campaignMissions();
                schema = h5.jsonSchema(h5.metadata.campaignMissions);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".commendations()", function () {
            before(function () {
                promise = h5.metadata.commendations();
                schema = h5.jsonSchema(h5.metadata.commendations);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".csrDesignations()", function () {
            before(function () {
                promise = h5.metadata.csrDesignations();
                schema = h5.jsonSchema(h5.metadata.csrDesignations);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".enemies()", function () {
            before(function () {
                promise = h5.metadata.enemies();
                schema = h5.jsonSchema(h5.metadata.enemies);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".flexibleStats()", function () {
            before(function () {
                promise = h5.metadata.flexibleStats();
                schema = h5.jsonSchema(h5.metadata.flexibleStats);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".gameBaseVariants()", function () {    
            before(function () {
                promise = h5.metadata.gameBaseVariants();
                schema = h5.jsonSchema(h5.metadata.gameBaseVariants);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".gameVariantById(id: guid)", function () {
            before(function () {
                id = '963ca478-369a-4a37-97e3-432fa13035e1';
                promise = h5.metadata.gameVariantById(id);
                schema = h5.jsonSchema(h5.metadata.gameVariantById);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
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
            before(function () {
                promise = h5.metadata.impulses();
                schema = h5.jsonSchema(h5.metadata.impulses);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".maps()", function () {
            before(function () {
                promise = h5.metadata.maps();
                schema = h5.jsonSchema(h5.metadata.maps);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".mapVariantById(id: guid)", function () {
            before(function () {
                id = 'a44373ee-9f63-4733-befd-5cd8fbb1b44a';
                promise = h5.metadata.mapVariantById(id);
                schema = h5.jsonSchema(h5.metadata.mapVariantById);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
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
            before(function () {
                promise = h5.metadata.medals();
                schema = h5.jsonSchema(h5.metadata.medals);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".playlists()", function () {
            before(function () {
                promise = h5.metadata.playlists();
                schema = h5.jsonSchema(h5.metadata.playlists);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        // ID retrieved from here:
        // https://www.halowaypoint.com/en-us/forums/01b3ca58f06c4bd4ad074d8794d2cf86/topics/how-do-i-get-the-id-for-a-req/a8abb35e-6fd7-4a18-ab68-0946eaa2ce0d/posts?page=1#post5
        describe(".requisitionById(id: guid)", function () {
            before(function () {
                id = 'e4f549b2-90af-4dab-b2bc-11a46ea44103'; 
                promise = h5.metadata.requisitionById(id);
                schema = h5.jsonSchema(h5.metadata.requisitionById);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
            it("should immediately error with no id", function () {
                return expect(h5.metadata.requisitionById())
                    .to.be.rejectedWith("Invalid ID provided");
            });
        });
        describe(".requisitionPackById()", function () {
            before(function () {
                id = 'd10141cb-68a5-4c6b-af38-4e4935f973f7'; 
                promise = h5.metadata.requisitionPackById(id);
                schema = h5.jsonSchema(h5.metadata.requisitionPackById);
                validation = validatePromise(promise, schema);
            });

            it("should succeed (reward req pack)", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
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
            before(function () {
                promise = h5.metadata.skulls();
                schema = h5.jsonSchema(h5.metadata.skulls);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".spartanRanks()", function () {
            before(function () {
                promise = h5.metadata.spartanRanks();
                schema = h5.jsonSchema(h5.metadata.spartanRanks);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".teamColors()", function () {
            before(function () {
                promise = h5.metadata.teamColors();
                schema = h5.jsonSchema(h5.metadata.teamColors);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".vehicles()", function () {
            before(function () {
                promise = h5.metadata.vehicles();
                schema = h5.jsonSchema(h5.metadata.vehicles);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
        describe(".weapons()", function () {
            before(function () {
                promise = h5.metadata.weapons();
                schema = h5.jsonSchema(h5.metadata.weapons);
                validation = validatePromise(promise, schema);
            });

            it("should succeed", function () {
                return promise;
            });
            it("should match json schema", function () {
                return expect(validation)
                    .to.eventually.have.property("errors")
                    .and.be.empty;
            });
        });
    });
};

var withCache = new HaloAPI({
    apiKey: process.env.HALOAPI_KEY,
    cache: 'redis'
});
var withoutCache = new HaloAPI(process.env.HALOAPI_KEY);

withCache.cacheClear().then(function () {
    metadata(withCache, " {cache set} ");
    metadata(withCache, " {cache read} ");
    metadata(withoutCache, " {no cache} ");
});

var HaloAPI = require("../js/index");

var JSONSchema = require('json-schema');
var chai = require('chai'),
    expect = chai.expect;

chai.use(require("chai-as-promised"));


describe("redis caching", function () {
    var h5 = new HaloAPI({
        apiKey: process.env.HALOAPI_KEY,
        cache: 'redis'
    });
    var promise, timeStart, resultCached, resultUncached;

    // very leniant 30 second timemout
    this.timeout(30000);

    before(function () {
        return h5.cacheClear()
            .catch(function () {
                return 0;
            }); // returns promise so mocha waits
    });

    describe("uncached and cached times", function () {
        beforeEach(function () {
            timeStart = new Date();
            promise = h5.metadata.commendations();
        });

        it("[fetch] should take > 50ms", function () {
            return promise.then(function (result) {
                resultUncached = result;
                var delta = new Date() - timeStart;
                expect(delta).to.be.gt(50);
            });
        });
        it("[cached] should take < 50ms", function () {
            return promise.then(function (result) {
                resultCached = result;
                var delta = new Date() - timeStart;
                expect(delta).to.be.lt(50);
            });
        });
    });

    describe("cache clearing", function () {
        before(function () {
            return h5.cacheClear();
        });
        beforeEach(function () {
            promise = h5.metadata.commendations();
        })

        it("[fetch again] should take > 50ms", function () {
            return promise.then(function () {
                var delta = new Date() - timeStart;
                expect(delta).to.be.gt(50);
            })
        })
    });

    describe("equivelence", function () {

        it("uncached and cached results match", function () {
            return expect(resultCached).to.deep.equal(resultUncached);
        });

    });
});
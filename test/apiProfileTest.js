var HaloAPI = require("../js/index");
var chai = require('chai'),
    expect = chai.expect;

chai.use(require("chai-as-promised"));
chai.use(require("chai-string"));

describe("h5.profile", function () {
    var h5 = new HaloAPI(process.env.HALOAPI_KEY);
    var promise,
        player = "Frankie"; 
        
    // very leniant 30 second timemout
    // shouldn't be required, but if rate limiting is a factor
    // requests may take some time to be accepted
    this.timeout(30000);

    describe(".spartanImage(player: string)", function () {
        before(function () {
            promise = h5.profile.spartanImage(player);
        })
        it("should succeed", function () {
            return expect(promise).to.be.fulfilled;
        });
        it("should be a url", function (done) {
            promise.then(function (url) {
                expect(url).to.be.a('string');
                expect(url).to.startsWith('http');
                done();
            });
        });

        it("should 4xx on bad gamertag", function () {
            var badPlayer = "this gameratag is too long";
            return expect(h5.profile.spartanImage(badPlayer))
                .to.be.rejected
                .and.eventually.have.property("statusCode")
                .and.match(/4../);
        })
    });

    describe(".spartanImage(params: IProfileParams)", function () {
        var params = {
            player: player,
            crop: "portrait",
            size: 512
        };
        before(function () {
            promise = h5.profile.spartanImage(params);
        });
        it("should succeed", function () {
            return expect(promise).to.be.fulfilled;
        });
        it("should be a url", function (done) {
            promise.then(function (url) {
                expect(url).to.be.a('string');
                expect(url).to.startsWith('http');
                expect(url.indexOf(String(params.size))).to.not.equal(-1);
                done();
            });
        });
    });

    describe(".emblemImage(player: string)", function () {
        before(function () {
            promise = h5.profile.emblemImage(player);
        });
        it("should succeed", function () {
            return expect(promise).to.be.fulfilled;
        });
        it("should be a url", function (done) {
            promise.then(function (url) {
                expect(url).to.be.a('string');
                expect(url).to.startsWith('http');
                done();
            });
        });

        it("should 4xx on bad gamertag", function () {
            var badPlayer = "this gameratag is too long";
            return expect(h5.profile.emblemImage(badPlayer))
                .to.be.rejected
                .and.eventually.have.property("statusCode")
                .and.match(/4../);
        });
    });

    describe(".emblemImage(params: IProfileParams)", function () {
        var params;
        before(function () {
            params = {
                player: player,
                size: 128
            };
            promise = h5.profile.spartanImage(params);;
        });
        it("should succeed", function () {
            return expect(promise).to.be.fulfilled;
        });
        it("should be a url", function (done) {
            promise.then(function (url) {
                expect(url).to.be.a('string');
                expect(url).to.startsWith('http');
                expect(url.indexOf(String(params.size))).to.not.equal(-1);
                done();
            });
        });
    });

});
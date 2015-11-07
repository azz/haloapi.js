var chai = require('chai'),
    expect = chai.expect;

describe("api key", function () {
    /*
     * If this test is failing you need to:
     *   $ export HALOAPI_KEY=YOUR-API-KEY
     * before running $ npm test
     */
    it("should be set", function () {
        expect(process.env.HALOAPI_KEY).to.exist;
        expect(process.env.HALOAPI_KEY).to.be.a('string');
        expect(process.env.HALOAPI_KEY.length).to.be.above(10);    
    });
});
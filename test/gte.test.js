var expect = require('chai').expect;
var R = require('../dist/R');

describe('gte', function () {

    it('checks whether one item is greater than or equal to another', function() {
        expect(R.gte(3, 2)).to.be.true;
        expect(R.gte(100, 50)).to.be.true;
        expect(R.gte(0, -1)).to.be.true;
        expect(R.gte(20, 20)).to.be.true;
        expect(R.gte(50, 100)).to.be.false;
    });

    it('is curried', function() {
        var lte20 = R.gte(20);
        expect(lte20(10)).to.be.true;
        expect(lte20(20)).to.be.true;
        expect(lte20(25)).to.be.false;
    });

    it('behaves right curried when passed `R.__` for its first argument', function() {
        var gte20 = R.gte(R.__, 20);
        expect(gte20(10)).to.be.false;
        expect(gte20(20)).to.be.true;
        expect(gte20(25)).to.be.true;
    });

});
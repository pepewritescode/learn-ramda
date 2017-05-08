var expect = require('chai').expect;
var R = require('../dist/R');

describe('lte', function () {

    it('checks whether one item is less than or equal to another', function() {
        expect(R.lte(2, 3)).to.be.true;
        expect(R.lte(3, 3)).to.be.true;
        expect(R.lte(50, 100)).to.be.true;
        expect(R.lte(-1, 0)).to.be.true;
        expect(R.lte(7, 5)).to.be.false;
    });

    it('is curried', function() {
        var gte20 = R.lte(20);
        expect(gte20(30)).to.be.true;
        expect(gte20(20)).to.be.true;
        expect(gte20(10)).to.be.false;
    });

    it('behaves right curried when passed `R.__` for its first argument', function() {
        var lte20 = R.lte(R.__, 20);
        expect(lte20(30)).to.be.false;
        expect(lte20(20)).to.be.true;
        expect(lte20(15)).to.be.true;
    });

});
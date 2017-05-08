var expect = require('chai').expect;
var R = require('../dist/R');

describe('lt', function () {

    it('returns true if the first argument is smaller than the second', function() {
        expect(R.lt(2, 3)).to.be.true;
        expect(R.lt(50, 100)).to.be.true;
        expect(R.lt(-1, 0)).to.be.true;
    });

    it('returns false if the first argument is larger than the second', function() {
        expect(R.lt(3, 2)).to.be.false;
        expect(R.lt(100, 50)).to.be.false;
        expect(R.lt(0, -1)).to.be.false;
    });

    it('is curried', function() {
        var gt20 = R.lt(20);
        expect(gt20(30)).to.be.true;
        expect(gt20(20)).to.be.false;
        expect(gt20(10)).to.be.false;
    });

    it('behaves right curried when passed `R.__` for its first argument', function() {
        var lt20 = R.lt(R.__, 20);
        expect(lt20(30)).to.be.false;
        expect(lt20(20)).to.be.false;
        expect(lt20(15)).to.be.true;
    });

});
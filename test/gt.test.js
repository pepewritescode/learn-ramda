var expect = require('chai').expect;
var R = require('../dist/R');

describe('gt', function () {

    it('returns true if the first argument is greater than the second', function() {
        expect(R.gt(3, 2)).to.be.true;
        expect(R.gt(100, 50)).to.be.true;
        expect(R.gt(0, -1)).to.be.true;
    });

    it('returns false if the first argument is smaller than the second', function() {
        expect(R.gt(2, 3)).to.be.false;
        expect(R.gt(50, 100)).to.be.false;
        expect(R.gt(-1, 0)).to.be.false;
    });

    it('is curried', function() {
        var lt20 = R.gt(20);
        expect(lt20(10)).to.be.true;
        expect(lt20(20)).to.be.false;
        expect(lt20(25)).to.be.false;
    });

    it('behaves right curried when passed `R.__` for its first argument', function() {
        var gt20 = R.gt(R.__, 20);
        expect(gt20(10)).to.be.false;
        expect(gt20(20)).to.be.false;
        expect(gt20(25)).to.be.true;
    });

});
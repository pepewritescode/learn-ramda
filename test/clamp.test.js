var expect = require('chai').expect;
var R = require('../dist/R');

describe('clamp', function () {
    it('clamps to the lower bound', function() {
        expect(R.clamp(1, 10, 0)).to.equal(1);
        expect(R.clamp(5, 7, 9)).to.equal(7);
    });

    it('clamps to the upper bound', function() {
        expect(R.clamp(1, 10, 20)).to.equal(10);
        expect(R.clamp(-5, 0, 5)).to.equal(0);
    });

    it('leaves it alone when within the bound', function() {
        expect(R.clamp(1, 5, 3)).to.equal(3);
        expect(R.clamp(-1, 1, 0)).to.equal(0);
    });

    it('works with letters as well', function () {
        expect(R.clamp('a', 'b', 'c')).to.equal('b');
        expect(R.clamp('x', 'z', 'y')).to.equal('y');
    });

});
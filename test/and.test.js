var expect = require('chai').expect;
var R = require('../dist/R');

describe('and', function() {
    
    it('returns true if both arguments are true; false otherwise', function () {
        expect(R.and(true, true)).to.be.true;
        expect(R.and(false, false)).to.be.false;
        expect(R.and(false, true)).to.be.false;
    });

    it('supports currying', function () {
        let halfTruth = R.and(true);
        expect(halfTruth(true)).to.be.true;
        expect(halfTruth(false)).to.be.false;
    });
});
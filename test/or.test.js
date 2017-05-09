var expect = require('chai').expect;
var R = require('../dist/R');

describe('or', function() {
    it('compares two values with js ||', function () {
        expect(R.or(true, true)).to.be.true;
        expect(R.or(false, true)).to.be.true;
        expect(R.or(true, false)).to.be.true;
        expect(R.or(false, false)).to.be.false;
    });

    it('is curried', function () {
        expect(R.or(true)(true)).to.be.true;
        expect(R.or(false)(false)).to.be.false;
    });
});
var expect = require('chai').expect;
var R = require('../dist/R');

describe('negate', function() {
    it('negates a number', function () {
        expect(R.negate(1)).to.equal(-1);
        expect(R.negate(-5)).to.equal(5);
    });
});
var expect = require('chai').expect;
var R = require('../dist/R');

describe('isNil', function () {
    it('tests whether a value is null or undefined', function() {
        expect(R.inc(2)).to.equal(3);
        expect(R.inc(-10)).to.equal(-9);
    });

});
var expect = require('chai').expect;
var R = require('../dist/R');

describe('inc', function () {
    it('increases a number by 1', function() {
        expect(R.inc(2)).to.equal(3);
        expect(R.inc(-10)).to.equal(-9);
    });

});
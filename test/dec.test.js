var expect = require('chai').expect;
var R = require('../dist/R');

describe('dec', function () {
    it('decreases a number by 1', function() {
        expect(R.dec(2)).to.equal(1);
        expect(R.dec(-9)).to.equal(-10);
    });

});
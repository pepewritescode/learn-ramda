var expect = require('chai').expect;
var R = require('../dist/R');

describe('divide', function () {

    it('divides one number by another', function() {
        expect(R.divide(4, 2)).to.equal(2);
    });

    it('is curried', function () {
        expect(R.divide(28)(4)).to.equal(7);
    });

    it('works with a placeholder value', function () {
        const half = R.divide(R.__, 2);
        expect(half(10)).to.equal(5);
    });

});
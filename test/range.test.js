var expect = require('chai').expect;
var R = require('../dist/R');

describe('range', function() {
    it('returns a list of numbers', function () {
        expect(R.range(1, 4)).to.deep.equal([1, 2, 3]);
    });

    it('returns an empty list if the first parameter is not larger than the second', function () {
        expect(R.range(5, 3)).to.deep.equal([]);
    });

    it('is curried', function () {
        const fromTen = R.range(10);
        expect(fromTen(12)).to.deep.equal([10, 11]);
    });
});
var expect = require('chai').expect;
var R = require('../dist/R');

describe('subract', function () {
    it('subtracts the second number from the first', function() {
        expect(R.subtract(10, 7)).to.equal(3);
        expect(R.subtract(10, 5)).to.equal(5);
    });

    it('coerces its arguments to numbers', function() {
        expect(R.subtract('1', '2')).to.equal(-1);
        expect(R.subtract('10', 5)).to.equal(5);
    });

    it('is curried', function() {
        let subtractFromTen = R.subtract('10');
        expect(subtractFromTen(9)).to.equal(1);
    });

    it('works with placeholder values', function () {
        let minusFive = R.subtract(R.__, 5);
        expect(minusFive(10)).to.equal(5);
    });
});
var expect = require('chai').expect;
var R = require('../dist/R');

describe('multiply', function() {
    it('multiplies two numbers', function () {
        expect(R.multiply(1, 2)).to.equal(2);
        expect(R.multiply(5, 5)).to.equal(25);
    });

    it('is curried', function () {
        let triple = R.multiply(3);
        expect(triple(3)).to.equal(9);
        expect(triple(10)).to.equal(30);
    });
});
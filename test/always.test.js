var expect = require('chai').expect;
var R = require('../dist/R');

describe('always', function() {
    
    it('returns a function that returns the object initially supplied', function () {
        let number = R.always(42);
        expect(number()).to.equal(42);
        expect(number(10)).to.equal(42);
    });
});
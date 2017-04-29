var expect = require('chai').expect;
var R = require('../dist/R');

describe('T', function () {

    it('always returns true', function() {
        expect(R.T()).to.be.true;
        expect(R.T(1)).to.be.true;
        expect(R.T(5)).to.be.true;
    });

});
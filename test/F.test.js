var expect = require('chai').expect;
var R = require('../dist/R');

describe('F', function () {

    it('always returns false', function() {
        expect(R.F()).to.be.false;
        expect(R.F(1)).to.be.false;
        expect(R.F(5)).to.be.false;
    });

});
var expect = require('chai').expect;
var R = require('../dist/R');

describe('identity', function () {

    it('always returns the supplied parameter', function() {
        expect(R.identity(3)).to.equal(3);
        expect(R.identity('identity')).to.equal('identity');
        expect(R.identity(1, 2)).to.equal(1);
    });

});
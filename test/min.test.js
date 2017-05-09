var expect = require('chai').expect;
var R = require('../dist/R');

describe('min', function() {
    it('returns the smaller of its two arguments', function () {
        expect(R.min(1, 2)).to.equal(1);
        expect(R.min(0, -1)).to.equal(-1);
    });

    it('works for any orderable types', function () {
        expect(R.min('a', 'b')).to.equal('a');
        expect(R.min('z', 'y')).to.equal('y');
    });
});
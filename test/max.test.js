var expect = require('chai').expect;
var R = require('../dist/R');

describe('max', function() {
    it('returns the larger of its two arguments', function () {
        expect(R.max(1, 2)).to.equal(2);
        expect(R.max(0, -1)).to.equal(0);
    });

    it('works for any orderable types', function () {
        expect(R.max('a', 'b')).to.equal('b');
        expect(R.max('z', 'y')).to.equal('z');
    });
});
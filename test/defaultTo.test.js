var expect = require('chai').expect;
var R = require('../dist/R');

describe('defaultTo', function () {
    let defaultTo42;

    before(function () {
        defaultTo42 = R.defaultTo(42);
    });

    it('returns the default value if input is null, undefined or NaN', function() {
        expect(defaultTo42(null)).to.equal(42);
        expect(defaultTo42(undefined)).to.equal(42);
        expect(defaultTo42(NaN)).to.equal(42);
    });

    it('returns the input value if it is not null, undefined or NaN', function() {
        expect(defaultTo42(43)).to.equal(43);
    });

});
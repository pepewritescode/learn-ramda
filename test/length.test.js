var expect = require('chai').expect;
var R = require('../dist/R');

describe('length', function() {
    it('returns the length of a list', function () {
        expect(R.length([])).to.equal(0);
        expect(R.length(['a', 'b', 'c', 'd', 'e'])).to.equal(5);
    });

    it('returns the length of a string', function () {
        expect(R.length('')).to.equal(0);
        expect(R.length('xyz')).to.equal(3);
    });

    it('returns the length of a function', function () {
        expect(R.length(function () {})).to.equal(0);
        expect(R.length(function (x, y, z) {})).to.equal(3);
    });

    it('returns the length of an arguments object', function () {
        /**
         * Note: Arrow functions do not bind an arguments object.
         * So we are using a regular anonymouse function here.
         */
        const getArguments = function () {
            return arguments;
        };
        expect(R.length(getArguments())).to.equal(0);
        expect(R.length(getArguments(1, 2, 3))).to.equal(3);
    });
    
    // TODO: Test for cases where the return value is NaN. 
});
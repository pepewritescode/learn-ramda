var expect = require('chai').expect;
var R = require('../dist/R');

describe('zip', function () {

    it('returns an array of "tuples"', function () {
        var a = [1, 2, 3];
        var b = [100, 200, 300];
        expect(R.zip(a, b)).to.deep.equal([[1, 100], [2, 200], [3, 300]]);
    });

    it('returns a list as long as the shorter of the two input lists', function () {
        var a = [1, 2, 3];
        var b = [99, 100];
        expect(R.zip(a, b)).to.deep.equal([[1, 99], [2, 100]]);
    });

});
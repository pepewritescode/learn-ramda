var expect = require('chai').expect;
var R = require('../dist/R');

describe('zipWith', function () {

    it('returns an array created by applying the function pair-wise', function () {
        var a = [1, 2, 3];
        var b = [100, 200, 300];
        var add = (a, b) => a + b;
        expect(R.zipWith(add, a, b)).to.deep.equal([101, 202, 303]);
    });

    it('returns a list as long as the shorter of the two input lists', function () {
        var a = [1, 2, 3];
        var b = [99, 100];
        var subtract = (a, b) => a - b;
        var result = R.zipWith(subtract, a, b);
        expect(result).to.deep.equal([-98, -98]);
        expect(result.length).to.equal(2);
    });

    it('zipWith(function(a, b) { return [a, b] }) is equivalent to zip(a, b)', function () {
        var a = [1, 2, 3];
        var b = [4, 5];
        var fn = (a, b) => [a, b];
        expect(R.zip(a, b)).to.deep.equal(R.zipWith(fn, a, b));
    });

});
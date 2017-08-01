var expect = require('chai').expect;
var R = require('../dist/R');

describe('zipObj', function () {

    it('combines an array of keys with an array of values into a single object', function () {
        var a = ['a', 'b', 'c'];
        var b = [100, 200, 300];
        expect(R.zipObj(a, b)).to.deep.equal({'a': 100, 'b': 200, 'c': 300});
    });

    it('ignores extra values', function () {
        expect(R.zipObj(['a', 'b'], [1, 2, 3])).to.deep.equal({'a': 1, 'b': 2});
    });

    it('ignores extra keys', function () {
        expect(R.zipObj(['a', 'b'], [1])).to.deep.equal({'a': 1});
    });

});
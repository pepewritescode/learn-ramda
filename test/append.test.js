var expect = require('chai').expect;
var R = require('../dist/R');

describe('append', function () {
    it('adds the element to the end of the list', function() {
        expect(R.append(3, [1, 2])).to.deep.equal([1, 2, 3]);
        expect(R.append('c', ['a', 'b'])).to.deep.equal(['a', 'b', 'c']);
    });

    it('works on empty list', function() {
        expect(R.append('1', [])).to.deep.equal(['1']);
    });

    it('is curried', function() {
        expect(R.append(1)([3, 2])).to.deep.equal([3, 2, 1]);
    });

    it('works with placeholder values', function () {
        expect(R.append(R.__, [3, 2])(1)).to.deep.equal([3, 2, 1]);
        expect(R.append(1, R.__)()([3, 2])).to.deep.equal([3, 2, 1]);
    });

});
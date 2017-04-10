var expect = require('chai').expect;
var R = require('../dist/R');

describe('adjust', function() {
    let array;

    before(function () {
        array = [1, 2, 0, 4, 5];
    });

    it('applies the given function to the value at the given index of the supplied array', function () {
        // R.add(3) is a curried "add"" function that accepts a number, adds 3 to it, and returns it
        expect(R.adjust(R.add(3), 2, array)).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('offsets negative indexes from the end of the array', function () {
        expect(R.adjust(R.add(3), -3, array)).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('returns the original array if the supplied index is out of bounds', function () {
        expect(R.adjust(R.add(3), 5, array)).to.deep.equal(array);
        expect(R.adjust(R.add(3), -6, array)).to.deep.equal(array);
    });

    it('does not mutate the original array', function () {
        expect(R.adjust(R.add(3), 3, array)).to.deep.equal([1, 2, 0, 7, 5]);
        expect(array).to.deep.equal([1, 2, 0, 4, 5]);
    });

    it('curries the arguments', function () {
        expect(R.adjust(R.add(3))(2)(array)).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('accepts an array-like object', function () {
        function args() {
            return arguments;
        }
        expect(R.adjust(R.add(3))(2, args(1, 2, 0, 4, 5))).to.deep.equal([1, 2, 3, 4, 5]);
    });
});
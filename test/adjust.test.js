var expect = require('chai').expect;
var R = require('../dist/R');

describe('adjust', function() {
    it('applies the given function to the value at the given index of the supplied array', function () {
        let array = [1, 2, 0, 4, 5];
        // R.add(3) is a curried "add"" function that accepts a number, adds 3 to it, and returns it
        expect(R.adjust(R.add(3), 2, array)).to.deep.equal([1, 2, 3, 4, 5]);
    });
});
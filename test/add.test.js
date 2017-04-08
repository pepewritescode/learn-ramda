var expect = require('chai').expect;
var R = require('../dist/R');

describe('add', function () {
    it('adds together two numbers', function() {
        expect(R.add(3, 7)).to.equal(10);
    });

    it('coerces its arguments to numbers', function() {
        expect(R.add('1', '2')).to.equal(3);
        expect(R.add(1, '2')).to.equal(3);
        expect(R.add(true, false)).to.equal(1);
    });

    it('is curried', function() {
        let inc = R.add(1);
        expect(inc(9)).to.equal(10);
    });
});
var expect = require('chai').expect;
var R = require('../dist/R');

describe('prop', function () {

    it('returns a function that fetches a given property from an object (currying)', function () {
        var a = {'name': 'Eric'};
        var fn = R.prop('name');
        expect(fn(a)).to.equal('Eric');
    });

    it('returns undefined if the property is not found', function () {
        var a = {'name': 'Eric'};
        var fn = R.prop('age');
        expect(fn(a)).to.be.undefined;
    });
});
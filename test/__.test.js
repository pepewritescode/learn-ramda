var expect = require('chai').expect;
var R = require('../dist/R');

describe('__ acts as a placeholder value', function () {
    it('works properly', function () {
        let __ = R.__;
        expect(__['@@functional/placeholder']).to.be.true;
    });
});
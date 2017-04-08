var expect = require('chai').expect;
var R = require('../dist/R');

describe('__', function () {
    it('works as expected', function () {
        let __ = R.__;
        expect(__['@@functional/placeholder']).to.be.true;
    });
});
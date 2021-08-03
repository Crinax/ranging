const { Range } = require('../Range');
var assert = require('assert');

console.clear();
describe('Range.string()', function() {
    it('[...strRange("Hello world", 3, 7, 2)] should returns ["l", " ", "o"]', function() {
        assert.deepStrictEqual([...Range.string('Hello world', 3, 7, 2)], ['l', ' ', 'o']);
    });
});
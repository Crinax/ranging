const { Range } = require('../Range');
var assert = require('assert');

console.clear();
describe('Range.char()', function() {
    it('[...Range.char("A", "D", 2)] should returns ["A", "C"]', function() {
        assert.deepStrictEqual([...Range.char('A', 'D', 2)], ['A', 'C']);
    });
    it('[...Range.char("A", "F", 3)] should returns ["A", "D"]', function() {
        assert.deepStrictEqual([...Range.char('A', 'F', 3)], ['A', 'D']);
    });
});
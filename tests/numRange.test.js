const { Range } = require('../Range');
var assert = require('assert');

console.clear();
describe('Range.number()', function() {
    it('[...Range.number(1, 10, 2)] should returns [1, 3, 5, 7, 9]', function() {
        assert.deepStrictEqual([...Range.number(1, 10, 2)], [1, 3, 5, 7, 9]);
    })
    it('[...Range.number(0, 10, 3)] should returns [0, 3, 6, 9]', function() {
        assert.deepStrictEqual([...Range.number(0, 10, 3)], [0, 3, 6, 9]);
    })
    describe('Can work with loops', function() {
        it('for in', function() {
            for (let i of Range.number(1, 5)) assert.strictEqual(i, [1, 2, 3, 4, 5][i-1])
        });
    });
});
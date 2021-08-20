const { NumberRange } = require('../');
var assert = require('assert');

console.clear();
describe('NumberRange', function() {
    it('[...new NumberRange().start(1).end(10)] should returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', function() {
        assert.deepStrictEqual([...new NumberRange().start(1).end(10)], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('[...new NumberRange({ start: 1, end: 10 })] should returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', function() {
        assert.deepStrictEqual([...new NumberRange({ start: 1, end: 10 })], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('[...new NumberRange(1, 10)] should returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', function() {
        assert.deepStrictEqual([...new NumberRange(1, 10)], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('[...new NumberRange().start(1).end(10).step(2)] should returns [ 1, 3, 5, 7, 9 ]', function() {
        assert.deepStrictEqual([...new NumberRange().start(1).end(10).step(2)], [ 1, 3, 5, 7, 9 ]);
    });
    it('[...new NumberRange({ start: 1, end: 10, step: 2 })] should returns [ 1, 3, 5, 7, 9 ]', function() {
        assert.deepStrictEqual([...new NumberRange({ start: 1, end: 10, step: 2 })], [ 1, 3, 5, 7, 9 ]);
    });
    it('[...new NumberRange(1, 10, 2)] should returns [ 1, 3, 5, 7, 9 ]', function() {
        assert.deepStrictEqual([...new NumberRange(1, 10, 2)], [ 1, 3, 5, 7, 9 ]);
    });
    it('[...new NumberRange({ start: 10, end: 40, filter: (x) => x % 3 === 0 && x % 5 === 0 })] should returns [15, 30]', function*() {
        assert.deepStrictEqual(
            [...new NumberRange({ start: 10, end: 40, filter: (x) => x % 3 === 0 && x % 5 === 0 })],
            [15, 30]
        );
    });
    it('new NumberRange(9).length should returns 10 (from 0 to 10)', function() {
        assert.equal(new NumberRange(9).length, 10);
    });
});

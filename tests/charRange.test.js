const { CharRange } = require('../');
var assert = require('assert');

console.clear();
describe('CharRange', function() {
    it('[...new CharRange().start("1").end("3")] should returns ["1", "2", "3"]', function() {
        assert.deepStrictEqual([...new CharRange().start("1").end("3")], ['1', '2', '3']);
    });
    it('[...new CharRange({ start: "1", end: "3" })] should returns ["1", "2", "3"]', function() {
        assert.deepStrictEqual([...new CharRange({ start: "1", end: "3" })], ['1', '2', '3']);
    });
    it('[...new CharRange("1", "3")] should returns ["1", "2", "3"]', function() {
        assert.deepStrictEqual([...new CharRange("1", "3")], ['1', '2', '3']);
    });
    it('[...new CharRange().start("1").end("3").step(2)] should returns ["1", "3"]', function() {
        assert.deepStrictEqual([...new CharRange().start("1").end("3").step(2)], ['1', '3']);
    });
    it('[...new CharRange({ start: "1", end: "3", step: 2 })] should returns ["1", "3"]', function() {
        assert.deepStrictEqual([...new CharRange({ start: "1", end: "3", step: 2 })], ['1', '3']);
    });
    it('[...new CharRange("1", "3", 2)] should returns ["1", "3"]', function() {
        assert.deepStrictEqual([...new CharRange("1", "3", 2)], ['1', '3']);
    });
    it('[...new CharRange({ start: "1", end: "9", filter: (x) => x === "5" })] should returns ["5"]', function*() {
        assert.deepStrictEqual(
            [...new CharRange({ start: "1", end: "9", filter: (x) => x === "5" })],
            ["5"]
        );
    });
    it('new CharRange("D").length should returns 4 (from "A" to "D")', function() {
        assert.equal(new CharRange("D").length, 4);
    });
});

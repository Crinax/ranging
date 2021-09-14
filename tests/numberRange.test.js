const { NumberRange } = require('../');
const assert = require('assert');
const parser = require('./parser');

const tests = [
  `#1
    [...new NumberRange({
      start: 1,
      end: 3,
    })] should returns [1, 2, 3]
  `,
  `#2
    [...new NumberRange({ end: 3 })] should returns [0, 1, 2, 3]
  `,
  `#3
    [...new NumberRange({
      start: 5,
      count: 5,
    })] should returns [5, 6, 7, 8, 9]
  `,
  `#4
    [...new NumberRange({
      step: 5,
      count: 5,
      map: (x) => x ** 2,
    })] should returns [0, 25, 100, 225, 400]
  `,
  `#5
    [...new NumberRange({
      start: 10,
      end: 20,
      filter: (x) => (x % 4 === 0)
    })] should returns [12, 16, 20]
  `,
  `#6
    [...new NumberRange({
      start: 10,
      end: 10.5,
      step: 0.1,
      float: true,
    })] should returns [10, 10.1, 10.2, 10.3, 10.4, 10.5]
  `,
  `#7
    new NumberRange({
      start: 0.1,
      end: 2,
      step: 0.1,
      float: true
    }).sum should returns 21
  `,
  `#8
    new NumberRange({
      start: 1.0,
      end: 2.0,
      step: 0.1,
      float: true
    }).sum should returns 16.5
  `
]

console.clear();
describe('NumberRange', function() {
  for (test of tests) {
    let testParsed = parser(test);
    it(test, function() {
      assert.deepEqual(eval(testParsed.code), eval(testParsed.except))
    });
  }
});

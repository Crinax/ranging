const initTest = require('./initTest');

const tests = [
  `#1
    const numbers = new NumberRange();
    const chars = new CharRange({ end: 'D' });
    new ZipRanges({ keys: chars, values: numbers }).dict

    should return

    const result = { "A": 0, "B": 1, "C": 2, "D": 3 };
    result;
    // { "A": 0, "B": 1, "C": 2, "D": 3 }
  `
]

console.clear();
initTest('ZipRanges', tests, 'deepEqual');
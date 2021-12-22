const initTest = require('./initTest');

const tests = [
  `#1
    const numbers = new NumberRange();
    const chars = new CharRange({ end: 'D' });
    new ZipRange({ keys: chars, values: numbers }).dict

    should return

    const result = { "A": 0, "B": 1, "C": 2, "D": 3 };
    result;
    // { "A": 0, "B": 1, "C": 2, "D": 3 }
  `,
  `#2
    const keys = new CharRange({ end: 'D' });
    const values = new NumberRange();
    new ZipRange({
      keys,
      values,
      filter: (_, index) => index % 2 === 0,
    }).dict

    should return

    const result = { "A": 0, "C": 2 };
    result;
    // { "A": 0, "C": 2 }
  `,
  `#3
    const keys = new CharRange({ end: 'D' });
    const values = new NumberRange();
    [...new ZipRange({
      keys,
      values,
      map: (item) => Object.values(item),
    })]

    should return

    const result = [[0], [1], [2], [3]];
    result;
    // [[0], [1], [2], [3]]
  `,
]

console.clear();
initTest('ZipRange', tests, 'deepEqual');
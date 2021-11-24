const initTest = require('./initTest');

const tests = [
  `#1
    const numbers = new NumberRange({ end: 5 });
    const chars   = new CharRange({ end: 'F' });
    [...new MergeRange({
      ranges: [numbers, chars],
    })]

    should return

    [0, 1, 2, 3, 4, 5, 'A', 'B', 'C', 'D', 'E', 'F']
  `,
  `#2
    const numbers = new NumberRange({ end: 5 });
    const chars   = new CharRange({ end: 'F' });
    [...new MergeRange({
      ranges: [numbers, chars],
      filter: (_, index) => index % 2 === 0,
    })]

    should return

    [0, 2, 4, 'A', 'C', 'E']
  `,
]

console.clear();
initTest('MergeRange', tests, 'deepEqual');

const initTest = require('./initTest');

const tests = [
  `#1
    new RandomStringRange({
      source: 'Hello, world!',
      start: 1,
      end: 3,
      count: 5,
    }).length

    should return

    5
  `,
  `#2
    [...new RandomStringRange({
      source: 'Hello, world!',
      start: 1,
      end: 3,
      count: 5,
    })].every((x) => (x === 'e') || (x === 'l'))

    should return

    true
  `,
  `#3
    [...new RandomStringRange({
      source: 'Hello, world!',
      start: 1,
      end: 3,
      count: 5,
      filter: (x) => x === 'e',
    })].every(x => x === 'e')

    should return

    true
  `,
  `#4
    [...new RandomStringRange({
      source: 'Hello, world!',
      start: 1,
      end: 3,
      count: 5,
      map: (x) => 'X',
    })].every(x => x === 'X')

    should return

    true
  `,
  `#5
    [...new RandomStringRange({
      source: 'Hello, world!',
      start: 1,
      end: 10,
      count: 5,
      filter: (x) => x.codePointAt(0) % 2 === 0,
    })].every(x => x.codePointAt(0) % 2 === 0)

    should return

    true
  `,
];

console.clear();
initTest('RandomStringRange', tests, 'deepEqual');
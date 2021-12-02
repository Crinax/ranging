const initTest = require('./initTest');

const tests = [
  `#1
    new RandomNumber({ start: 10, end: 20, count: 10 }).length

    should return

    10
  `,
  `#2
    [...new RandomNumber({
      start: 30,
      end: 60,
      count: 5,
    })].every((x) => (x >= 30) && (x <= 60))

    should return

    true
  `,
  `#3
    [...new RandomNumber({
      start: 30,
      end: 60,
      count: 5,
      filter: (x) => x % 2 === 0,
    })].every((x) => (x >= 30) && (x <= 60) && (x % 2 === 0))

    should return

    true
  `,
  `#4
    [...new RandomNumber({
      start: 30,
      end: 60,
      count: 5,
      map: (x) => 2
    })].every((x) => (x === 2))

    should return

    true
  `,
  `#5
    [...new RandomNumber({
      start: 30,
      end: 60,
      count: 5,
      float: true,
    })].every((x) => (x >= 30) && (x <= 60))

    should return

    true
  `,
  `#6
    [...new RandomNumber({
      start: Number.MIN_SAFE_INTEGER,
      end: Number.MAX_SAFE_INTEGER,
      count: 5,
    })].every((x) => (x >= Number.MIN_SAFE_INTEGER) && (x <= Number.MAX_SAFE_INTEGER))

    should return

    true
  `,
]

console.clear();
initTest('RandomNumber', tests, 'deepEqual');

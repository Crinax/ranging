const initTest = require('./initTest');

const tests = [
  `#1
    new RandomCharRange({ start: 'A', end: 'Z', count: 10 }).length

    should return

    10
  `,
  `#2
    [...new RandomCharRange({
      start: 'A',
      end: 'Z',
      count: 5,
    })].every((x) => (x.codePointAt(0) >= 'A'.codePointAt(0)) &&
                    (x.codePointAt(0) <= 'Z'.codePointAt(0))
    )

    should return

    true
  `,
  `#3
    [...new RandomCharRange({
      start: 'A',
      end: 'Z',
      count: 5,
      filter: (x) => x.codePointAt(0) % 2 === 0
    })].every(
      (x) => (x.codePointAt(0) >= 'A'.codePointAt(0)) &&
            (x.codePointAt(0) <= 'Z'.codePointAt(0)) &&
            (x.codePointAt(0) % 2 === 0)
    )

    should return

    true
  `,
  `#4
    [...new RandomCharRange({
      start: 'A',
      end: 'V',
      count: 5,
      map: (x) => 'X'
    })].every((x) => (x === 'X'))

    should return

    true
  `,
];

console.clear();
initTest('RandomCharRange', tests, 'deepEqual');
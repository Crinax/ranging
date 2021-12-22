const initTest = require('./initTest');

const tests = [
  `#1
    new RandomColorRange({
      start: '#000000',
      end: '#FFFFFF',
      count: 9,
    }).length

    should return

    9
  `,
  `#2
    [...new RandomColorRange({
      start: '#000000',
      end: '#ABCDEF',
      count: 9,
    })].every((x) => (parseInt(x.slice(1), 16) >= 0) && (parseInt(x.slice(1), 16) <= 11259375))

    should return

    true
  `,
  `#3
    [...new RandomColorRange({
      start: '#123451',
      end: '#123457',
      count: 5,
      filter: (x) => x === '#123456',
    })].every((x) => x === '#123456')

    should return

    true
  `,
  `#4
    [...new RandomColorRange({
      start: '#123451',
      end: '#123457',
      count: 5,
      map: () => '#123456',
    })].every((x) => x === '#123456')

    should return

    true
  `,
  `#5
    [...new RandomColorRange({
      start: '#123451',
      end: '#123457',
      count: 2,
      map: (x) => parseInt(x.slice(1), 16),
    })].every(x => typeof x === 'number')

    should return

    true
  `,
];

console.clear();
initTest('RandomColorRange', tests, 'deepEqual');
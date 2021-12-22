const initTest = require('./initTest');

const tests = [
  `#1
    new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2021-09-18T08:35:37.400'),
      count: 8,
    }).length

    should return

    8
  `,
  `#2
    [...new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2021-09-18T08:35:37.400'),
      count: 8,
    })].every((x) => (x >= new Date('2021-09-18T08:35:37.352')) || (x <= new Date('2021-09-18T08:35:37.400')))

    should return

    true
  `,
  `#3
    [...new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2021-09-18T08:35:40.352'),
      count: 8,
    })].every((x) => (x >= new Date('2021-09-18T08:35:37.352')) || (x <= new Date('2021-09-18T08:35:40.352')))

    should return

    true
  `,
  `#4
    [...new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2021-09-18T08:40:37.352'),
      count: 8,
    })].every((x) => (x >= new Date('2021-09-18T08:35:37.352')) || (x <= new Date('2021-09-18T08:40:37.352')))

    should return

    true
  `,
  `#5
    [...new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2021-09-18T10:35:37.352'),
      count: 8,
    })].every((x) => (x >= new Date('2021-09-18T08:35:37.352')) || (x <= new Date('2021-09-18T10:35:37.352')))

    should return

    true
  `,
  `#6
    [...new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2021-09-20T08:35:37.352'),
      count: 8,
    })].every((x) => (x >= new Date('2021-09-18T08:35:37.352')) || (x <= new Date('2021-09-20T08:35:37.352')))

    should return

    true
  `,
  `#7
    [...new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2021-11-18T08:35:37.352'),
      count: 8,
    })].every((x) => (x >= new Date('2021-09-18T08:35:37.352')) || (x <= new Date('2021-11-18T08:35:37.352')))

    should return

    true
  `,
  `#8
    [...new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2030-09-18T08:35:37.352'),
      count: 8,
    })].every((x) => (x >= new Date('2021-09-18T08:35:37.352')) || (x <= new Date('2030-09-18T08:35:37.352')))

    should return

    true
  `,
  `#9
    [...new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2030-09-18T08:35:37.352'),
      count: 8,
      weekdays: [1],
    })].every((x) => x.getDay() === 1)

    should return

    true
  `,
  `#10
    [...new RandomDateRange({
      start: new Date('2021-09-18T08:35:37.352'),
      end: new Date('2040-09-18T08:35:37.352'),
      count: 8,
      leapYear: true,
    })].every((x) => (x.getFullYear() % 400 === 0) || (x.getFullYear() % 100 !== 0 && x.getFullYear() % 4 === 0))

    should return

    true
  `,
];

console.clear();
initTest('RandomDateRange', tests, 'deepEqual');
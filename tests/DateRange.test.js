const initTest = require('./initTest');

const tests = {
  DateRange: [
    `#1
      [...new DateRange({
        start: new Date('2021-09-18T05:35:37.352Z'),
        count: 5,
        map: (x) => x.getMilliseconds(),
      })] should return [352, 353, 354, 355, 356]
    `,
    `#2
    [...new DateRange({
      start: new Date('2021-09-18T05:35:37.352Z'),
      end: new Date('2021-09-18T05:35:37.357Z'),
      map: (x) => x.getMilliseconds(),
    })] should return [352, 353, 354, 355, 356, 357]
    `,
    `#3
    new DateRange({
      start: new Date('2021-09-18T05:35:37.352Z'),
      end: new Date('2021-09-18T05:35:37.451Z'),
    }).length should return 100
    `,
    `#4
      [...new DateRange({
        start: new Date('2021-09-18T05:35:37.352Z'),
        end: new Date('2021-09-18T05:35:37.360Z'),
        filter: (x) => (x.getMilliseconds() % 2 === 0),
        map: (x) => x.getMilliseconds(),
      })] should return [352, 354, 356, 358, 360]
    `,
    `#5
      [...new DateRange({
        start: new Date('2021-09-18T05:35:37.352Z'),
        end: new Date('2021-09-18T05:35:40.352Z'),
        step: 1000,
        map: (x) => x.getSeconds(),
      })] should return [37, 38, 39, 40]
    `
  ],
}

console.clear();
for (let test in tests) initTest(test, tests[test], 'deepEqual');
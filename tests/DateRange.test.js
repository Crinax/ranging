const initTest = require('./initTest');

const tests = {
  DateRange: [
    `#1
      [...new DateRange({
        start: new Date('2021-09-18T05:35:37.352'),
        count: 5,
        map: (x) => x.getMilliseconds(),
      })] should return [352, 353, 354, 355, 356]
    `,
    `#2
    [...new DateRange({
      start: new Date('2021-09-18T05:35:37.352'),
      end: new Date('2021-09-18T05:35:37.357'),
      map: (x) => x.getMilliseconds(),
    })] should return [352, 353, 354, 355, 356, 357]
    `,
    `#3
    new DateRange({
      start: new Date('2021-09-18T05:35:37.352'),
      end: new Date('2021-09-18T05:35:37.451'),
    }).length should return 100
    `,
    `#4
      [...new DateRange({
        start: new Date('2021-09-18T05:35:37.352'),
        end: new Date('2021-09-18T05:35:37.360'),
        filter: (x) => (x.getMilliseconds() % 2 === 0),
        map: (x) => x.getMilliseconds(),
      })] should return [352, 354, 356, 358, 360]
    `,
    `#5
      [...new DateRange({
        start: new Date('2021-09-18T05:35:37.352'),
        end: new Date('2021-09-18T05:35:40.352'),
        step: 1000,
        map: (x) => x.getSeconds(),
      })] should return [37, 38, 39, 40]
    `
  ],
  SecondRange: [
    `#1
      [...new SecondRange({
        start: new Date('2021-09-18T05:35:37.352'),
        end: new Date('2021-09-18T05:35:40.352'),
        map: (x) => x.getSeconds(),
      })] should return [37, 38, 39, 40]
    `,
    `#2
      [...new SecondRange({
        start: new Date('2021-09-18T05:35:37.352'),
        end: new Date('2021-09-18T05:35:47.352'),
        filter: (x) => (x.getSeconds() % 2 === 0),
        map: (x) => x.getSeconds(),
      })] should return [38, 40, 42, 44, 46]
    `,
  ],
  MinuteRange: [
    `#1
      [...new MinuteRange({
        start: new Date('2021-09-18T05:35:37.352'),
        end: new Date('2021-09-18T05:40:37.352'),
        map: (x) => x.getMinutes(),
      })] should return [35, 36, 37, 38, 39, 40]
    `,
    `#2
      [...new MinuteRange({
        start: new Date('2021-09-18T05:35:37.352'),
        end: new Date('2021-09-18T05:45:37.352'),
        filter: (x) => (x.getMinutes() % 2 === 0),
        map: (x) => x.getMinutes(),
      })] should return [36, 38, 40, 42, 44]
    `,
  ],
  HourRange: [
    `#1
      [...new HourRange({
        start: new Date('2021-09-18T08:35:37.352'),
        end: new Date('2021-09-18T11:35:37.352'),
        map: (x) => x.getHours(),
      })] should return [8, 9, 10, 11]
    `,
    `#2
      [...new HourRange({
        start: new Date('2021-09-18T08:35:37.352'),
        end: new Date('2021-09-18T18:35:37.352'),
        filter: (x) => (x.getHours() % 2 === 0),
        map: (x) => x.getHours(),
      })] should return [8, 10, 12, 14, 16, 18]
    `,
  ],
  DayRange: [
    `#1
      [...new DayRange({
        start: new Date('2021-09-18T08:35:37.352'),
        end: new Date('2021-09-22T08:35:37.352'),
        map: (x) => x.getDate(),
      })] should return [18, 19, 20, 21, 22]
    `,
    `#2
      [...new DayRange({
        start: new Date('2021-09-18T08:35:37.352'),
        end: new Date('2021-09-30T08:35:37.352'),
        weekdays: [1, 5],
        map: (x) => x.getDate(),
      })] should return [20, 24, 27]
    `,
  ],
  MonthRange: [
    `#1
      [...new MonthRange({
        start: new Date('2021-09-18T08:35:37.352'),
        end: new Date('2021-12-18T08:35:37.352'),
        map: (x) => x.getMonth(),
      })] should return [8, 9, 10, 11]
    `,
    `#2
      [...new MonthRange({
        start: new Date('2021-09-18T08:35:37.352'),
        end: new Date('2021-12-18T08:35:37.352'),
        filter: (x) => (x.getMonth() % 2 === 0),
        map: (x) => x.getMonth(),
      })] should return [8, 10]
    `,
  ],
  YearRange: [
    `#1
      [...new YearRange({
        start: new Date('2021-09-18T08:35:37.352'),
        end: new Date('2025-09-18T08:35:37.352'),
        map: (x) => x.getFullYear(),
      })] should return [2021, 2022, 2023, 2024, 2025]
    `,
    `#2
      [...new YearRange({
        start: new Date('2021-09-18T08:35:37.352'),
        count: 7,
        leepYear: true,
        map: (x) => x.getFullYear(),
      })] should return [2024, 2028, 2032, 2036, 2040, 2044, 2048]
    `,
  ],
}

console.clear();
for (let test in tests) initTest(test, tests[test], 'deepEqual');

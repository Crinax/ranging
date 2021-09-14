const { NumberRange } = require('../');
const initTest = require('./initTest');

const tests = [
  `#1
    [...new NumberRange({
      start: 1,
      end: 3,
    })] should return [1, 2, 3]
  `,
  `#2
    [...new NumberRange({ end: 3 })] should return [0, 1, 2, 3]
  `,
  `#3
    [...new NumberRange({
      start: 5,
      count: 5,
    })] should return [5, 6, 7, 8, 9]
  `,
  `#4
    [...new NumberRange({
      step: 5,
      count: 5,
      map: (x) => x ** 2,
    })] should return [0, 25, 100, 225, 400]
  `,
  `#5
    [...new NumberRange({
      start: 10,
      end: 20,
      filter: (x) => (x % 4 === 0)
    })] should return [12, 16, 20]
  `,
  `#6
    [...new NumberRange({
      start: 10,
      end: 10.5,
      step: 0.1,
      float: true,
    })] should return [10, 10.1, 10.2, 10.3, 10.4, 10.5]
  `,
  `#7
    new NumberRange({
      start: 0.1,
      end: 2,
      step: 0.1,
      float: true
    }).sum should return 21
  `,
  `#8
    new NumberRange({
      start: 1.0,
      end: 2.0,
      step: 0.1,
      float: true
    }).sum should return 16.5
  `,
  `#9
    new NumberRange({
      start: 1,
      count: 10
    }).length should return 10
  `,
  `#10
    [...new NumberRange({
      count: 5,
      filter: (x) => (x % 5 === 0 && x % 3 === 0)
    })] should return [0, 15, 30, 45, 60]
  `
]

console.clear();
initTest('NumberRange', tests);

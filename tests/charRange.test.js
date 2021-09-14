const { NumberRange } = require('../');
const initTest = require('./initTest');

const tests = [
  `#1
    [...new CharRange({ end: 'D' })] should return ['A', 'B', 'C', 'D']
  `,
  `#2
    [...new CharRange({ start: 'f', end: 'i' })] should return ['f', 'g', 'h', 'i']
  `,
  `#3
    [...new CharRange({
        start: 'a',
        end: 'i',
        map: (x) => x.charCodeAt(0)
    })] should return [97, 98, 99, 100, 101, 102, 103, 104, 105]
  `,
  `#4
    [...new CharRange({
        start: 'a',
        end: 'i',
        map: (x) => x.charCodeAt(0),
        filter: (x) => (x.charCodeAt(0) % 2 === 0)
    })] should return [98, 100, 102, 104]
  `
]

console.clear();
initTest('CharRange', tests);

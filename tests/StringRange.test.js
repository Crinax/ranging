const initTest = require('./initTest');

const tests = [
  `#1
    [...new StringRange({ source: 'Hello' })] should return ['H', 'e', 'l', 'l', 'o']
  `,
  `#2
    [...new StringRange({
      source: 'Hello',
      step: 2,
    })] should return ['H', 'l', 'o']
  `,
  `#3
    [...new StringRange({
      source: 'Hello',
      count: 3,
    })] should return ['H', 'e', 'l']
  `,
  `#4
    [...new StringRange({
      source: 'Hello',
      map: (x) => 'X',
    })] should return ['X', 'X', 'X', 'X', 'X']
  `,
  `#5
    [...new StringRange({
      source: 'Hello',
      filter: (x) => (x === 'l')
    })] should return ['l', 'l']
  `,
  `#6
    new StringRange({ source: 'Hello', step: 2 }).length should return 3
  `,
  `#7
    [...new StringRange({
      source: 'Hello',
      map: (item, index) => {
        let src = 'Hello';
        return src[src.length - 1 - index]
      }
    })] should return ['o', 'l', 'l', 'e', 'H']
  `,
  `#8
    [...new StringRange({
      source: 'Hello',
      map: (x) => String.fromCharCode(x.charCodeAt(0) + 1)
    })] should return ['I', 'f', 'm', 'm', 'p']
  `,
  `#9
    new StringRange({ source: 'Hello' }).stringify should return 'Hello'
  `,
  `#10
    new StringRange({
      source: 'Hello',
      map: (x) => x === 'e' || x === 'o' ? 'x' : x
    }).stringify should return 'Hxllx'
  `,
];

console.clear();
initTest('StringRange', tests, 'deepEqual')
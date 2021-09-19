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
        map: (x) => x.charCodeAt(0),
    })] should return [97, 98, 99, 100, 101, 102, 103, 104, 105]
  `,
  `#4
    [...new CharRange({
        start: 'a',
        end: 'i',
        map: (x) => x.charCodeAt(0),
        filter: (x) => (x.charCodeAt(0) % 2 === 0),
    })] should return [98, 100, 102, 104]
  `,
  `#5
    [...new CharRange({
      end: 'J',
      step: 2,
    })] should return ['A', 'C', 'E', 'G', 'I']
  `,
  `#6
    new CharRange().length should return 26
  `,
  `#7
    [...new CharRange({
      start: '!',
      end: '&',
    })] should return ['!', '"', '#', '$', '%', '&']
  `,
  `#8
    [...new CharRange({
        start: 'a',
        end: 'f',
        step: 2
      })
    ] should return ['a', 'c', 'e']
  `,
  `#9
    [...new CharRange({
      end: 'C',
      map: (x) => 'x',
    })] should return ['x', 'x', 'x']
  `,
  `#10
    [...new CharRange({
      end: 'D',
      filter: (x) => (x === 'O'),
    })] should return []
  `
]

console.clear();
initTest('CharRange', tests, 'deepEqual');

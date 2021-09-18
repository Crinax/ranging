const initTest = require('./initTest');

const tests = [
  `#1
    [...new ColorRange({ end: '#00000F' })] should return [
      '#000000',
      '#000001',
      '#000002',
      '#000003',
      '#000004',
      '#000005',
      '#000006',
      '#000007',
      '#000008',
      '#000009',
      '#00000a',
      '#00000b',
      '#00000c',
      '#00000d',
      '#00000e',
      '#00000f',
    ]
  `,
  `#2
    [...new ColorRange({
      end: '#00000F',
      step: 5,
    })] should return ['#000000', '#000005', '#00000a', '#00000f']
  `,
  `#3
    [...new ColorRange({
      end: '#000005',
      map: (x) => {
        x = x.split('');
        const z = x[1];
        x[1] = x[x.length - 1];
        x[x.length - 1] = z;
        return x.join('');
      },
    })] should return ['#000000', '#100000', '#200000', '#300000', '#400000', '#500000']
  `,
  `#4
    [...new ColorRange({
      end: '#00000F',
      filter: (item) => (parseInt(item.slice(1), 16) % 2 === 0)
    })] should return [
      '#000000',
      '#000002',
      '#000004',
      '#000006',
      '#000008',
      '#00000a',
      '#00000c',
      '#00000e'
    ]
  `,
  `#5
    [...new ColorRange({
      count: 5,
      step: 16 ** 3
    })] should return ['#000000', '#001000', '#002000', '#003000', '#004000']
  `
]

console.clear();
initTest('ColorRange', tests, 'deepEqual');

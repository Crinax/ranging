const { RandomCharRange } = require('./range');

const charRange = new RandomCharRange({
  start: '0',
  end: '1',
  count: 9,
});

console.log(parseInt(charRange.stringify, 2));

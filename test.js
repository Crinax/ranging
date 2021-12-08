const { RandomColorRange } = require('./range');

const colorRange = new RandomColorRange({
  start: '#000000',
  end: '#000F00',
  count: 5,
});

console.log([...colorRange]);

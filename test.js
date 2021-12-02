const { RandomNumber } = require('./range');

console.log(...new RandomNumber({
  start: Number.MIN_SAFE_INTEGER,
  end: Number.MAX_SAFE_INTEGER,
  count: 10,
  float: true,
}));

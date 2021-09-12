const { NumberRange, CharRange, CombineRange } = require('./range');

const numbers = new NumberRange({ start: 1 });
const chars = new CharRange();

const combine = new CombineRange({ keys: chars, values: numbers });

console.log(combine.merged);

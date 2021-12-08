const { NumberRange, ShuffleRange } = require('.');

const numbers = new NumberRange({ start: 10, end: 20 });
const shuffled = new ShuffleRange({ range: numbers });

console.log('original');

console.log(...numbers);

console.log('shuffled');

console.log(...shuffled);

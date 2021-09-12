const { NumberRange, CharRange, MergeRanges } = require('./range');

const numbers = new NumberRange({ end: 20 });
const characters = new CharRange();

const merging = new MergeRanges({
  ranges: [numbers, characters],
  count: 13,
  step: 3,
});

console.log(merging);

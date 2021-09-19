const { YearRange, ZipRanges, NumberRange } = require('./build/unmin/index');

const year = new YearRange({
  step: 1,
  leepYear: true,
  count: 10,
});

const numbers = new NumberRange({ start: 1 });

const zip = new ZipRanges({ keys: numbers, values: year, step: 2 });

console.log(zip.dict);

console.log(...zip);

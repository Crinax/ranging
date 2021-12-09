import { NumberRange, CharRange, MergeRange, ShuffleRange } from './lib';

const numbers = new NumberRange({ start: 10, end: 15 });
const chars = new CharRange({ start: 'A', end: 'Z' });
const merged = new MergeRange({ ranges: [numbers, chars] });

console.log([...new ShuffleRange({
	range: merged,
	count: 5,
	picking: 3,
	filter: (_, index) => (index % 2 === 0),
	map: (x) => String(x),
})]);
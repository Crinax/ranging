export = SecondRange;
declare class SecondRange extends AbstractDateRange {
  end(value: Date): SecondRange;
  start(value: Date): SecondRange;
  step(value: number): SecondRange;
  weekdays(value: number[]): SecondRange;
  leepYear(value: boolean): SecondRange;
  map(f: (item: Date, index: number) => any): SecondRange;
  filter(f: (item: Date, index: number) => boolean): SecondRange;
  [Symbol.iterator](): Iterator<IteratorResult<Date>>;
}
import AbstractDateRange = require("../AbstractDateRange");

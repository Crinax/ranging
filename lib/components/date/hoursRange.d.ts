export = HourRange;
declare class HourRange extends AbstractDateRange {
  end(value: Date): HourRange;
  start(value: Date): HourRange;
  step(value: number): HourRange;
  weekdays(value: number[]): HourRange;
  leepYear(value: boolean): HourRange;
  map(f: (item: Date, index: number) => any): HourRange;
  filter(f: (item: Date, index: number) => boolean): HourRange;
  [Symbol.iterator](): Iterator<IteratorResult<Date>>;
}
import AbstractDateRange = require("../AbstractDateRange");

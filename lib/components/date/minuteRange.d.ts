export = MinuteRange;
declare class MinuteRange extends AbstractDateRange {
  end(value: Date): MinuteRange;
  start(value: Date): MinuteRange;
  step(value: number): MinuteRange;
  weekdays(value: number[]): MinuteRange;
  leepYear(value: boolean): MinuteRange;
  map(f: (item: Date, index: number) => any): MinuteRange;
  filter(f: (item: Date, index: number) => boolean): MinuteRange;
  [Symbol.iterator](): Iterator<IteratorResult<Date>>;
}
import AbstractDateRange = require("../AbstractDateRange");

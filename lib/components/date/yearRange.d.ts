export = YearRange;
declare class YearRange extends AbstractDateRange {
  end(value: Date): YearRange;
  start(value: Date): YearRange;
  step(value: number): YearRange;
  weekdays(value: number[]): YearRange;
  leepYear(value: boolean): YearRange;
  map(f: (item: Date, index: number) => any): YearRange;
  filter(f: (item: Date, index: number) => boolean): YearRange;
  [Symbol.iterator](): Iterator<IteratorResult<Date>>;
}
import AbstractDateRange = require("../AbstractDateRange");

export = MonthRange;
declare class MonthRange extends AbstractDateRange {
  end(value: Date): MonthRange;
  start(value: Date): MonthRange;
  step(value: number): MonthRange;
  weekdays(value: number[]): MonthRange;
  leepYear(value: boolean): MonthRange;
  map(f: (item: Date, index: number) => any): MonthRange;
  filter(f: (item: Date, index: number) => boolean): MonthRange;
  [Symbol.iterator](): Iterator<IteratorResult<Date>>;
}
import AbstractDateRange = require("../AbstractDateRange");

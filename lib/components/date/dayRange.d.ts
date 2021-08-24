export = DayRange;
declare class DayRange extends AbstractDateRange {
  end(value: Date): DayRange;
  start(value: Date): DayRange;
  step(value: number): DayRange;
  weekdays(value: number[]): DayRange;
  leepYear(value: boolean): DayRange;
  map(f: (item: Date, index: number) => any): DayRange;
  filter(f: (item: Date, index: number) => boolean): DayRange;
  [Symbol.iterator](): Iterator<IteratorResult<Date>>;
}
import AbstractDateRange = require("../AbstractDateRange");

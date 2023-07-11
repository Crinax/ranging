import { Range, RangeGeneratorType } from "../abstract";

export class MonthRange extends Range<Date> {
  constructor(
    private _start = new Date(),
    private _end: Date | number = Infinity,
    private _step = 1,
  ) {
    super();
  }

  *[Symbol.iterator](): RangeGeneratorType<Date> {
    while (this._start < this._end) {
      yield new Date(this._start);

      this._start.setMonth(this._start.getMonth() + this._step);
    }
  }
}

export const monthRange = (
  start = new Date(),
  end: Date | number = Infinity,
  step = 1,
) => new MonthRange(start, end, step);

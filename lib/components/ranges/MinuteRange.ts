import { Range, RangeGeneratorType } from "../abstract";

export class MinuteRange extends Range<Date> {
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

      this._start.setMinutes(this._start.getMinutes() + this._step);
    }
  }
}

export const minuteRange = (
  start = new Date(),
  end: Date | number = Infinity,
  step = 1,
) => new MinuteRange(start, end, step);

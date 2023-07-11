import { Range, RangeGeneratorType } from "../abstract";

export class MillisecondRange extends Range<Date> {
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

      this._start.setTime(this._start.getTime() + this._step);
    }
  }
}

export const millisecondRange = (
  start = new Date(),
  end: Date | number = Infinity,
  step = 1,
) => new MillisecondRange(start, end, step);

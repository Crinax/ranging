import { Range, RangeGeneratorType } from "../abstract";

export class SecondRange extends Range<Date> {
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

      this._start.setSeconds(this._start.getSeconds() + this._step);
    }
  }
}

export const secondRange = (
  start = new Date(),
  end: Date | number = Infinity,
  step = 1,
) => new SecondRange(start, end, step);

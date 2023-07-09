import { Range, RangeGeneratorType } from "../abstract";

export class HourRange extends Range<Date> {
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

      this._start.setHours(this._start.getHours() + this._step);
    }
  }
}
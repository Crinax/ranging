import { getRandomNumber } from "../utils/random";
import { Range, RangeGeneratorType } from "../abstract";

export class RandomDateRange extends Range<Date> {
  constructor(
    private _start: Date,
    private _end: Date,
  ) {
    super();
  }

  *[Symbol.iterator](): RangeGeneratorType<Date> {
    while (true) {
      yield new Date(
        getRandomNumber(this._start.getTime(), this._end.getTime(), false)
      );
    }
  }
}

export const randomDateRange = (
  start: Date,
  end: Date,
) => new RandomDateRange(start, end);

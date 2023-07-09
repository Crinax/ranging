import { getRandomNumber } from "../utils/random";
import { Range, RangeGeneratorType } from "../abstract";

export class RandomNumberRange extends Range<number> {
  constructor(
    private _start: number,
    private _end: number,
    private _isFloat: boolean = false,
  ) {
    super();
  }

  *[Symbol.iterator](): RangeGeneratorType<number> {
    while (true) {
      yield getRandomNumber(this._start, this._end, this._isFloat);
    }
  }
}
import { Range, RangeGeneratorType } from "../abstract";
import { add } from "../utils/fixNumberOperations";

export class NumberRange extends Range<number> {
  constructor(
    private _start = 0,
    private _end = Infinity,
    private _step = 1,
    private _isFloat = false,
  ) {
    super();
  }

  *[Symbol.iterator](): RangeGeneratorType<number> {
    const _add: (a: number, b: number) => number = this._isFloat
      ? (a, b) => add(a, b)
      : (a, b) => a + b;

    for (
      let i = this._start;
      i <= this._end;
      i = _add(i, this._step)
    ) {
      yield i;
    }
  }
}

import { IRange, Range, RangeGeneratorType } from "../abstract";

type ExtractRange<T> = T extends IRange<infer Result> ? Result : never;
export type RuleFunction<T> = (item: T, index: number, access: AccessFunction<T>) => void;

export interface AccessFunction<T> {
  rangeNumber: () => number,
  nextValue: () => T,
  switchTo: (value: number) => void,
  stop: () => boolean,
}

export const mergeRange = <T extends IRange<_F>, A extends ExtractRange<T>, _F = A>(
  rule: RuleFunction<_F>,
  ranges: Iterable<T>,
) => new MergeRange(rule, ranges);

export class MergeRange<T extends IRange<_F>, A extends ExtractRange<T>, _F = A> extends Range<_F> {
  constructor(private _rule: RuleFunction<_F>, ranges: Iterable<T>) {
    super();

    const rangeIt = ranges[Symbol.iterator]();
    let range = rangeIt.next();

    while (!range.done) {
      this._its.push(range.value[Symbol.iterator]());

      range = rangeIt.next();
    }
  }
  
  private _its: Array<RangeGeneratorType<_F>> = [];

  *[Symbol.iterator](): RangeGeneratorType<_F> {
    let valueIndex = 0;
    let index = 0;
    let nextValueUsed = false;
    let stopUsed = false;
    let nextValueCached: _F;
    let nextUseCached = false;
    let indexesInsideRanges = Array.from({ length: this._its.length }, () => 0);

    let rangeNumber = () => index;
    let _nextValue = (item: IteratorResult<_F, void>): [_F, false] | [void, true] => {
      if (!item.done) {
        return [item.value, false];
      }

      let startIndex = index;
      let allIsOver = false;
      let result = this._its[index].next();

      while (result.done) {
        index++;
        if (index >= this._its.length) {
          index = 0;
        }
        if (index === startIndex) {
          allIsOver = true;
          break;
        }

        result = this._its[index].next();
      }

      indexesInsideRanges[index]++;

      allFinished = allIsOver;

      if (allIsOver) {
        return [void 0, true];
      }

      return [result.value!, false];
    };
    let nextValue = (value: IteratorResult<_F, void>) => () => {
      if (nextValueUsed) {
        throw new ReferenceError('Cannot be used more than once in iteration')
      }
      let [item, allIsOver] = _nextValue(value);
      
      if (allIsOver) {
        throw new ReferenceError('All ranges are over');
      }
      
      nextUseCached = true;
      nextValueCached = item as _F;
      return nextValueCached;
    }
    let switchTo = (value: number) => {
      if (value < 0 || value >= this._its.length) {
        throw new TypeError('You cannot set the range number, more than the number of ranges, or less than zero');
      }

      index = value;
    };
    let stop = () => (stopUsed = true);
    let itValue = this._its[index].next();
    let [item, allFinished] = _nextValue(itValue);

    while (!(allFinished || stopUsed)) {
      this._rule(item as _F, valueIndex, {
        rangeNumber,
        nextValue: nextValue(itValue),
        switchTo,
        stop,
      });

      if (nextUseCached) {
        nextUseCached = false;
        yield nextValueCached!;
      } else {
        yield item as _F;
      }

      itValue = this._its[index].next();
      [item, allFinished] = _nextValue(itValue);
      valueIndex++;
    }
  }
}

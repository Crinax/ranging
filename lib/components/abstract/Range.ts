import { getRandomNumber } from "../utils/random";
import { RangeGenerator, RangeGeneratorType } from "./RangeGenerator";

export interface IRange<T> {
  filter(condition: FilterCondition<T>): IRange<T>,
  map<R>(mapper: Mapper<T, R>): IRange<R>,
  take(count: number): IRange<T>,
  from(condition: FromCondition<T>): IRange<T>,
  to(condition: ToCondition<T>): IRange<T>,
  find(condition: FindCondition<T>): IRange<T>,
  reduce<A>(reducer: Reducer<A, T>, start?: A): IRange<A>,
  count(): IRange<number>,
  combine<T2>(range: Range<T2>): IRange<[T, T2]>,
  shuffle(picking: number): IRange<T>,
  groupBy<C extends number>(count: C): IRange<Repeat<[T], C>>,
  collect(): T[],
  [Symbol.iterator](): RangeGeneratorType<T>,
}

export type BaseRangeCallback<T, R = boolean> = (value: T, index: number) => R;

export abstract class Range<T> extends RangeGenerator<T> implements IRange<T> {
  constructor() {
    super();
  }

  filter(condition: FilterCondition<T>): IRange<T> {
    return new FilterRange(this, condition);
  }

  map<R>(mapper: Mapper<T, R>): IRange<R> {
    return new MapRange(this, mapper);
  }

  take(count: number): IRange<T> {
    return new TakeRange(this, count);
  }

  from(condition: FromCondition<T>): IRange<T> {
    return new FromRange(this, condition);
  }

  to(condition: ToCondition<T>): IRange<T> {
    return new ToRange(this, condition);
  }

  find(condition: FindCondition<T>): IRange<T> {
    return new FindRange(this, condition);
  }

  reduce<A>(reducer: Reducer<A, T>, start: A = 0 as unknown as A): IRange<A> {
    return new ReduceRange(this, reducer, start ?? 0);
  }

  count(): IRange<number> {
    return new CountRange(this);
  }

  combine<T2>(range: Range<T2>): IRange<[T, T2]> {
    return new CombineRange(this, range);
  }

  shuffle(picking: number = 5): IRange<T> {
    return new ShuffleRange(this, picking);
  }

  groupBy<C extends number>(count: C): IRange<Repeat<[T], C>> {
    return new GroupRange(this, count);
  }

  collect(): T[] {
    let it = this[Symbol.iterator]();
    let item = it.next();
    let result: T[] = [];

    while (!item.done) {
      result.push(item.value);
      item = it.next();
    }

    return result;
  }
}

type Repeat<T extends Array<_F>, Times extends number, _F = any> = T extends Array<infer R>
    ? T['length'] extends Times
        ? T
        : Repeat<[R, ...T], Times>
    : never;

class GroupRange<T, Count extends number, _R = Repeat<[T], Count>> extends Range<_R> {
  constructor(range: Range<T>, private _count: Count) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<_R> {
    let group: T[] = [];
    let item = this._it.next();

    while (!item.done) {
      while (group.length < this._count) {
        if (item.done) {
          break;
        }

        group.push(item.value);
        item = this._it.next();
      }

      yield group as unknown as _R;
      group = [];
    }
  }
}

class ShuffleRange<T> extends Range<T> {
  constructor(range: Range<T>, private _picking: number = 5) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<T> {
    let item = this._it.next();
    let arrShuffle = [];

    for (let i = 0; i < this._picking; i++) {
      if (item.done) {
        break;
      }

      arrShuffle.push(item.value);
      
      item = this._it.next();
    }

    while (arrShuffle.length >= 1) {
      const index = getRandomNumber(0, arrShuffle.length - 1, false)
      yield arrShuffle.splice(index, 1)[0]

      if (!item.done) {
        arrShuffle.push(item.value)
      }

      item = this._it.next();
    }
  }
}

class CombineRange<T1, T2> extends Range<[T1, T2]> {
  constructor(range1: Range<T1>, range2: Range<T2>) {
    super();

    this._it1 = range1[Symbol.iterator]();
    this._it2 = range2[Symbol.iterator]();
  }

  private _it1: RangeGeneratorType<T1>;
  private _it2: RangeGeneratorType<T2>;

  *[Symbol.iterator](): RangeGeneratorType<[T1, T2]> {
    let item1 = this._it1.next();
    let item2 = this._it2.next();

    while (!(item1.done || item2.done)) {
      yield [item1.value, item2.value];

      item1 = this._it1.next();
      item2 = this._it2.next();
    }
  }
}

class CountRange<T> extends Range<number> {
  constructor(range: Range<T>) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<number> {
    let item = this._it.next();
    let result = 0;

    while (!item.done) {
      result++;

      item = this._it.next();
    }

    yield result
  }
}

export type Reducer<A, T> = (accamulator: A, value: T, index: number) => A;

class ReduceRange<A, T> extends Range<A> {
  constructor(
    range: Range<T>,
    private _reducer: Reducer<A, T>,
    private _start: unknown = 0,
  ) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<A> {
    let item = this._it.next();
    let index = 0;

    if (item.done) {
      return;
    }

    let result: unknown = this._start;

    while (!item.done) {
      result = this._reducer(result as A, item.value, index);

      item = this._it.next();
    }

    yield result as A;
  }
}

export type FilterCondition<T> = BaseRangeCallback<T>;

class FilterRange<T> extends Range<T> {
  constructor(
    range: Range<T>,
    private _condition: FilterCondition<T>
  ) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<T> {
    let item = this._it.next();
    let index = 0;

    while (!item.done) {
      if (this._condition(item.value, index)) {
        yield item.value;
      }

      item = this._it.next();
      index++;
    }
  }
}

export type FindCondition<T> = BaseRangeCallback<T>;

class FindRange<T> extends Range<T> {
  constructor(
    range: Range<T>,
    private _condition: FindCondition<T>,
  ) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<T> {
    let item = this._it.next();
    let index = 0;

    while (!item.done) {
      if (this._condition(item.value, index)) {
        yield item.value;
        break;
      }

      item = this._it.next();
      index++;
    }
  }
}

export type FromCondition<T> = BaseRangeCallback<T>;

class FromRange<T> extends Range<T> {
  constructor(
    range: Range<T>,
    private _condition: FromCondition<T>,
  ) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<T> {
    let item = this._it.next();
    let wasFound = false;
    let index = 0;

    while (!item.done) {
      if (!this._condition(item.value, index)) {
        continue;
      }

      if (!wasFound) {
        wasFound = true;
      }

      if (wasFound) {
        yield item.value;
      }

      item = this._it.next();
      index++;
    }
  }
}

export type Mapper<T, R> = BaseRangeCallback<T, R>;

class MapRange<T, R> extends Range<R> {
  constructor(
    range: Range<T>,
    private _mapper: Mapper<T, R>
  ) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<R> {
    let item = this._it.next();
    let index = 0;

    while (!item.done) {
      yield this._mapper(item.value, index);

      item = this._it.next();
      index++;
    }
  }
}

class TakeRange<T> extends Range<T> {
  constructor(
    range: Range<T>,
    private _count: number,
  ) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<T> {
    let item = this._it.next();

    for (let i = 0; i < this._count; i++) {
      if (item.done) {
        break;
      }

      yield item.value;

      item = this._it.next();
    }
  }
}

export type ToCondition<T> = BaseRangeCallback<T>;

class ToRange<T> extends Range<T> {
  constructor(
    range: Range<T>,
    private _condition: ToCondition<T>,
  ) {
    super();

    this._it = range[Symbol.iterator]();
  }

  private _it: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<T> {
    let item = this._it.next();
    let wasEnd = false;
    let index = 0;

    while (!item.done) {
      if (wasEnd) {
        break;
      }

      yield item.value;

      wasEnd = this._condition(item.value, index);
      item = this._it.next();
      index++;
    }
  }
}

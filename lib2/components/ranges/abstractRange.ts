import { UnknownRangeOptionsT } from '../types';

abstract class AbstractRange<EdgeT, ItemT, DateT = EdgeT> {
  protected options!: UnknownRangeOptionsT;

  end(value: EdgeT | DateT) {
    this.options.end = value;
    return this;
  }

  start(value: EdgeT) {
    this.options.start = value;
    return this;
  }

  step(value: number) {
    this.options.step = value;
    return this;
  }

  count(value: number) {
    this.options.count = value;
    return this;
  }

  map(f: (item: ItemT, index: number) => any) {
    this.options.map = f;
    return this;
  }

  filter(f: (item: ItemT, index: number) => boolean) {
    this.options.filter = f;
    return this;
  }

  reduce(f: (prevItem: ItemT, currItem: ItemT, index: number) => any, initial: any = 0) {
    let result: any = initial;
    const gen = this[Symbol.iterator]();
    let genObj = gen.next();
    let i = 0;
    while (!genObj.done) {
      result = f(result, genObj.value, i);
      i += 1;
      genObj = gen.next();
    }
    return result;
  }

  get length() {
    const gen = this[Symbol.iterator]();
    let i = 0;
    while (!gen.next().done) i += 1;
    return i;
  }

  [Symbol.iterator](): Iterator<ItemT> {
    return {
      next(): IteratorResult<ItemT, void> {
        return { value: undefined, done: true }
      }
    }
  }
}

export default AbstractRange;
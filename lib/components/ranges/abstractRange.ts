import { UnknownRangeOptionsT } from '../types';

abstract class AbstractRange<ItemT> {
  protected options!: UnknownRangeOptionsT;

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
  
  get iterator() {
    return this[Symbol.iterator]();
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
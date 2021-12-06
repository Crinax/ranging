import AbstractRangeGenerator from './AbstractRangeGenerator';
import { OptionsType } from '../types';
import { RandomRangeOptionsT } from '../types';

export default abstract class AbstractRange<OptionsT, GeneratorT> extends AbstractRangeGenerator<GeneratorT> {
  constructor(protected options: OptionsType<OptionsT>) {
    super();
  }

  reduce(f: (prevItem: any, currItem: any, index: number) => any, initial: any = 0): any {
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

  get length(): number {
    const gen = this[Symbol.iterator]();
    let i = 0;

    while (!gen.next().done) i++;

    return i;
  }

  get iterator() {
    return this[Symbol.iterator]();
  }

  get stringify() {
    return this.reduce((prev, curr) => String(prev) + String(curr), '');
  }
}
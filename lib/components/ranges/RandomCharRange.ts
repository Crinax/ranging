import { AbstractRange } from '../abstract';
import { CharRangeGeneratorT, RandomCharRangeOptionsT } from '../types';
import { getRandomNumber } from './utils/random';

export default class RandomCharRange extends AbstractRange<RandomCharRangeOptionsT, CharRangeGeneratorT> {
  constructor(options: RandomCharRangeOptionsT) {
    super(options);
  }

  *[Symbol.iterator]() {
    const {
      start,
      end,
      count = Infinity,
      map,
      filter,
    } = this.options;

    let extIndex = 0;
    
    for (let index = 0; index < count; index++) {
      let rand = getRandomNumber(start.codePointAt(0)!, end.codePointAt(0)!, false);
      
      if (filter) {
        while (!filter(String.fromCodePoint(rand), extIndex)) {
          rand = getRandomNumber(start.codePointAt(0)!, end.codePointAt(0)!, false);
        }
      }

      if (map) yield map(String.fromCodePoint(rand), index)
        else yield String.fromCodePoint(rand);
      
      extIndex++;
    }
  }
}
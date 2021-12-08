import { AbstractRange } from '../abstract';
import { StringRangeGeneratorT, RandomStringRangeOptionsT } from '../types';
import { getRandomNumber } from './utils/random';

export default class RandomStringRange extends AbstractRange<RandomStringRangeOptionsT, StringRangeGeneratorT> {
  constructor(options: RandomStringRangeOptionsT) {
    super(options);
    this.options.source = Array.from(this.options.source);
  }

  *[Symbol.iterator]() {
    const {
      source,
      count = Infinity,
      start,
      end,
      filter,
      map,
    } = this.options;

    let extIndex = 0;
    
    for (let index = 0; index < count; index++) {
      let rand = getRandomNumber(start, end, false);
      
      if (filter) {
        while (!filter(source[rand], extIndex)) {
          rand = getRandomNumber(start, end, false);
          extIndex++;
        }
      }

      if (map) yield map(source[rand], index)
        else yield source[rand];
      
      extIndex++;
    }
  }
}
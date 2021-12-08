import { AbstractRange } from '../abstract';
import { NumberRangeGeneratorT, RandomNumberRangeOptionsT } from '../types';
import { getRandomNumber } from './utils/random';

export default class RandomNumberRange extends AbstractRange<RandomNumberRangeOptionsT, NumberRangeGeneratorT> {
  constructor(options: RandomNumberRangeOptionsT) {
    super(options);
  }

  *[Symbol.iterator]() {
    const {
      start,
      end,
      count = Infinity,
      float = false,
      map,
      filter,
    } = this.options;

    let extIndex = 0;
    
    for (let index = 0; index < count; index++) {
      let rand = getRandomNumber(start, end, float);
      
      if (filter) {
        while (!filter(rand, extIndex)) {
          rand = getRandomNumber(start, end, float);
        }
      }

      if (map) yield map(rand, index)
        else yield rand;
      
      extIndex++;
    }
  }
}
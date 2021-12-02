import { AbstractRange } from '../abstract';
import { NumberRangeGeneratorT, RandomNumberOptionsT } from '../types';
import { getRandomNumber } from './utils/random';

export default class RandomNumber extends AbstractRange<RandomNumberOptionsT, NumberRangeGeneratorT> {
  constructor(options: RandomNumberOptionsT) {
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
import { AbstractRange } from '../abstract';
import { ColorRangeGeneratorT, RandomColorRangeOptionsT } from '../types';
import { getRandomNumber } from './utils/random';

export default class RandomColorRange extends AbstractRange<RandomColorRangeOptionsT, ColorRangeGeneratorT> {
  constructor(options: RandomColorRangeOptionsT) {
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

    const toInt = (s: string): number => parseInt(s.slice(1), 16);
    const toHEX = (n: number): string => {
      const result = n.toString(16);
      let zerosBefore = '';
      if (result.length !== 6) {
        zerosBefore = Array.from({ length: 6 - result.length }, () => '0').join('');
      }
      return '#' + zerosBefore + result;
    }
    
    for (let index = 0; index < count; index++) {
      let rand = toHEX(getRandomNumber(toInt(start), toInt(end), false));
      
      if (filter) {
        while (!filter(rand, extIndex)) {
          rand = toHEX(getRandomNumber(toInt(start), toInt(end), false));
          extIndex++;
        }
      }

      if (map) yield map(rand, index)
        else yield rand;
      
      extIndex++;
    }
  }
}
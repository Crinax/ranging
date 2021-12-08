import { AbstractRange } from '../abstract';
import { ShuffleRangeOptionsT, ShuffleRangeGeneratorT } from '../types';
import { getRandomNumber } from './utils/random';

export default class ShuffleRange extends AbstractRange<ShuffleRangeOptionsT, ShuffleRangeGeneratorT> {
  constructor(options: ShuffleRangeOptionsT) {
    super(options);
  }

  *[Symbol.iterator]() {
    const {
      range,
      count = Infinity,
      filter,
      map,
      accuracy = 10,
    } = this.options;

    const rangeIter = range.iterator;
    const shuffleArray = [];
    
    let curr = rangeIter.next();
    let extIndex = 0;
    let index = 0;

    for (let i = 0; i < accuracy; i++) {
      if (curr.done) break;

      shuffleArray.push(curr.value);

      curr = rangeIter.next();
    }

    while (shuffleArray.length !== 0 || count < index) {
      const randIndex = getRandomNumber(0, shuffleArray.length - 1, false);

      if (filter && !filter(shuffleArray[randIndex], extIndex)) {
        if (curr.done) shuffleArray.splice(randIndex, 1)
          else {
            curr = rangeIter.next();
            if (!curr.done) shuffleArray[randIndex] = curr.value;
          }

        extIndex++;
        continue;
      }

      if (map) yield map(shuffleArray[randIndex], index)
        else yield shuffleArray[randIndex];
      
      // console.log({ length: shuffleArray.length, randIndex, shuffleArray, curr: curr });
      
      if (curr.done) shuffleArray.splice(randIndex, 1)
        else {
          curr = rangeIter.next();
          if (!curr.done) shuffleArray[randIndex] = curr.value;
        }

      extIndex++;
      index++;
    }
  }
}

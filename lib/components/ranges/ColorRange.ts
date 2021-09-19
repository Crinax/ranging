import AbstractRange from './AbstractRange';
import { ColorRangeOptionsT } from '../types';

class ColorRange extends AbstractRange<string> {
  constructor(options?: ColorRangeOptionsT) {
    super();
    this.options = {
      start: '#000000',
      end: '#FFFFFF',
      step: 1,
      ...options,
    }
  }

  [Symbol.iterator](): Iterator<string> {
    let { start, end } = this.options;
    start = start.toLowerCase();
    end = end.toLowerCase();
    const {
      step,
      count,
      map,
      filter,
    } = this.options;
    let index = 0;
    return {
      next(): IteratorResult<string, void> {
        if ((count && index < count) || (!count && start! <= end!)) {
          const addChar = () => {
            const intStart = parseInt(start!.slice(1), 16);
            const hexStart = (intStart + step!).toString(16);
            let zerosBefore = '';
            if (hexStart.length !== 6) {
              zerosBefore = Array.from({ length: 6 - hexStart.length }, () => '0').join('');
            }
            start = `#${zerosBefore}${hexStart}`;
          };
          if (index !== 0) {
            addChar();
          }
          while (filter && !filter(start!, index)) {
            if (!count && start! > end!) {
              return {
                value: undefined,
                done: true,
              };
            }
            addChar();
          }
          if ((!count && start! > end!)) {
            return {
              value: undefined,
              done: true,
            };
          }
          let mappedValue;
          if (map) mappedValue = map(start!, index);
          index += 1;
          return {
            value: mappedValue || start,
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}

export default ColorRange;

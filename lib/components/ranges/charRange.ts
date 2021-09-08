import AbstractRange from './abstractRange';
import { CharRangeOptionsT } from '../types';

class CharRange extends AbstractRange<string> {
  protected options: CharRangeOptionsT;

  constructor(options?: CharRangeOptionsT) {
    super();
    this.options = {
      start: 'A',
      end: 'Z',
      step: 1,
      ...options,
    };
  }

  [Symbol.iterator](): Iterator<string> {
    let { start } = this.options;
    const {
      end,
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
            start = String.fromCodePoint(start!.codePointAt(0)! + step!);
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

export default CharRange;
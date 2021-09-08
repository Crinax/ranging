import AbstractRange from './abstractRange';
import { StringRangeOptionsT } from '../types';

class StringRange extends AbstractRange<string> {
  protected options: StringRangeOptionsT;

  constructor(options: StringRangeOptionsT) {
    super();
    this.options = {
      start: 0,
      end: options.source.length - 1,
      step: 1,
      ...options,
      source: Array.from(options.source),
    };
  }

  [Symbol.iterator](): Iterator<string> {
    let { start } = this.options;
    const {
      source,
      end,
      step,
      count,
      map,
      filter,
    } = this.options;
    let index = 0;
    return {
      next(): IteratorResult<string, void> {
        if (source[start!] !== undefined) {
          if ((count && index < count) || (!count && start! <= end!)) {
            if (index !== 0) {
              start! += step!;
            }
            while (filter && !filter(source[start!], index)) {
              if (!count && start! > end!) {
                return {
                  value: undefined,
                  done: true,
                };
              }
              start! += step!;
            }
            if (source[start!] === undefined) {
              return {
                value: undefined,
                done: true,
              };
            }
            let mappedValue;
            if (map) mappedValue = map(source[start!], index);
            index += 1;
            return {
              value: mappedValue || source[start!],
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
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

export default StringRange;
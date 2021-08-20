const AbstractRange = require('./AbstractRange');

class CharRange extends AbstractRange {
  constructor(...options) {
    super();
    this.options = {
      start: 'A',
      end: 'Z',
      step: 1,
      ...AbstractRange.parseParameters(...options),
    };
  }

  [Symbol.iterator]() {
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
      next() {
        if ((count && index < count) || (!count && start <= end)) {
          const addChar = () => {
            start = String.fromCodePoint(start.codePointAt(0) + step);
          };
          if (index !== 0) {
            addChar();
          }
          while (filter && !filter(start, index)) {
            if (!count && start > end) {
              return {
                done: true,
              };
            }
            addChar();
          }
          if ((!count && start > end)) {
            return {
              done: true,
            };
          }
          let mappedValue;
          if (map) mappedValue = map(start, index);
          index += 1;
          return {
            value: mappedValue || start,
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

module.exports = CharRange;

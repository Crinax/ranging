const AbstractRange = require('./AbstractRange');

class StringRange extends AbstractRange {
  constructor(...options) {
    super();
    this.options = {
      start: 0,
      step: 1,
      ...{
        source: options[0],
        ...AbstractRange.parseParameters(...options.slice(1)),
      },
    };
    this.source(this.options.source);
  }

  source(source) {
    if (source) {
      this.options.source = Array.from(source);
    } else {
      this.options.source = source;
    }
    return this;
  }

  [Symbol.iterator]() {
    let { start } = this.options;
    const {
      source,
      end = this.options.source.length - 1,
      step,
      count,
      map,
      filter,
    } = this.options;
    let index = 0;
    return {
      next() {
        if (source[start] !== undefined) {
          if ((count && index < count) || (!count && start <= end)) {
            if (index !== 0) {
              start += step;
            }
            while (filter && !filter(source[start], index)) {
              if (!count && start > end) {
                return {
                  done: true,
                };
              }
              start += step;
            }
            if (source[start] === undefined) {
              return {
                done: true,
              };
            }
            let mappedValue;
            if (map) mappedValue = map(source[start], index);
            index += 1;
            return {
              value: mappedValue || source[start],
              done: false,
            };
          }
          return {
            done: true,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

module.exports = StringRange;

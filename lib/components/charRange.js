class CharRange {
  constructor(options) {
    this.options = {
      start: 'A',
      end: 'Z',
      step: 1,
      ...options,
    };
    this.arr = [];
  }

  end(value) {
    this.options.end = value;
    return this;
  }

  start(value) {
    this.options.start = value;
    return this;
  }

  step(value) {
    this.options.step = value;
    return this;
  }

  count(value) {
    this.options.count = value;
    return this;
  }

  map(f) {
    this.options.map = f;
    return this;
  }

  filter(f) {
    this.options.filter = f;
    return this;
  }

  get length() {
    const gen = this[Symbol.iterator]();
    let i = 0;
    while (!gen.next().done) i += 1;
    return i;
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
        if ((count && index < count) || (!count && start < end)) {
          const addChar = () => {
            start = String.fromCodePoint(start.codePointAt(0) + step);
          };
          if (index !== 0) {
            addChar();
          }
          while (filter && !filter(start, index)) {
            if (!count && start >= end) {
              return {
                done: true,
              };
            }
            addChar();
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

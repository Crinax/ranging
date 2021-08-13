class StringRange {
  constructor(options) {
    this.options = {
      start: 0,
      step: 1,
      ...options,
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

  start(value) {
    this.options.start = value;
    return this;
  }

  end(value) {
    this.options.end = value;
    return this;
  }

  step(value) {
    this.options.step = value;
    return this;
  }

  map(value) {
    this.options.map = value;
    return this;
  }

  filter(value) {
    this.options.filter = value;
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
          if ((count && index < count) || (!count && start < end)) {
            if (index !== 0) {
              start += step;
            }
            while (filter && !filter(source[start], index)) {
              if (!count && start >= end) {
                return {
                  done: true,
                };
              }
              start += step;
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

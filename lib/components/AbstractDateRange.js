class AbstractDateRange {
  constructor(options) {
    this.options = {
      start: new Date(),
      end: Infinity,
      step: 1,
      ...options,
    };
  }

  setLiterals() {
    this.literals = { get: 'getTime', set: 'setTime' };
  }

  getTime(start) {
    if (!this.literals) this.setLiterals();
    return start[this.literals.get]();
  }

  setTime(start, value) {
    if (!this.literals) this.setLiterals();
    return start[this.literals.set](value);
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

  count(value) {
    this.options.count = value;
    return this;
  }

  weekdays(value) {
    this.options.weekdays = value;
    return this;
  }

  leepYear(value) {
    this.options.leepYear = value;
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

  reduce(f, initial = 0) {
    let result = initial;
    const gen = this[Symbol.iterator]();
    let genObj = gen.next();
    let i = 0;
    while (!genObj.done) {
      result = f(result, genObj.value, i);
      i += 1;
      genObj = gen.next();
    }
    return result;
  }

  [Symbol.iterator]() {
    let { start } = this.options;
    const {
      end,
      step,
      count,
      weekdays,
      leepYear,
      map,
      filter,
    } = this.options;
    let index = 0;
    start = new Date(start);
    const self = this;
    return {
      next() {
        if ((count && index < count) || (!count && start < end)) {
          if (index !== 0) {
            self.setTime(start, self.getTime(start) + step);
          }

          while (filter && !filter(new Date(start), index)) {
            if (!count && start >= end) {
              return {
                done: true,
              };
            }
            self.setTime(start, self.getTime(start) + step);
          }

          if (leepYear) {
            let year = start.getFullYear();
            const isLeepYear = () => (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
            while (!isLeepYear()) {
              if (!count && start >= end) {
                return {
                  done: true,
                };
              }
              self.setTime(start, self.getTime(start) + step);
              year = start.getFullYear();
            }
          }

          if (weekdays) {
            let weekday = start.getDay();
            while (weekdays.indexOf(weekday) === -1) {
              if (!count && start >= end) {
                return {
                  done: true,
                };
              }
              self.setTime(start, self.getTime(start) + step);
              weekday = start.getDay();
            }
          }

          let mappedValue;
          if (map) mappedValue = map(new Date(start), index);
          index += 1;
          if (mappedValue instanceof Date) mappedValue = new Date(mappedValue);

          return {
            value: mappedValue || new Date(start),
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

module.exports = AbstractDateRange;

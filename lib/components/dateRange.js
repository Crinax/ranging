

class DateRange {
  constructor(options) {
    this.options = {
      start: new Date(),
      end: Infinity,
      step: 1,
      ...options,
    };
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
    return {
      next() {
        if ((count && index < count) || (!count && start < end)) {
          if (index !== 0) {
            start.setTime(start.getTime() + step);
          }

          while (filter && !filter(new Date(start), index)) {
            if (!count && start >= end) {
              return {
                done: true,
              };
            }
            start.setTime(start.getTime() + step);
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
              start.setTime(start.getTime() + step);
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
              start.setTime(start.getTime() + step);
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

module.exports = {
  DateRange,
};



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
  }

  step(value) {
    this.options.step = value;
  }

  count(value) {
    this.options.count = value;
  }

  weekdays(value) {
    this.options.weekdays = value;
  }

  leepYear(value) {
    this.options.leepYear = value;
  }

  map(f) {
    this.options.map = f;
  }

  filter(f) {
    this.options.filter = f;
  }

  [Symbol.iterator]() {
    
  }
}

module.exports = {
  DateRange,
};

const isFunc = (func) => func && {}.toString.call(func) === '[object Function]';

class AbstractRange {
  static parseParameters(...options) {
    const map = {
      0: () => ({}),
      1: () => {
        if (isFunc(options[0])) return { map: options[0] };
        if (options[0] instanceof Object && !(options[0] instanceof Date)) return options[0];
        return { end: options[0] };
      },
      2: () => {
        if (isFunc(options[0], options[1])) {
          return { map: options[0], filter: options[1] };
        }
        if (!isFunc(options[0]) && isFunc(options[1])) {
          return { end: options[0], map: options[1] };
        }
        return { start: options[0], end: options[1] };
      },
      3: () => {
        if (isFunc(options[1])) {
          if (isFunc(options[2])) {
            return {
              end: options[0],
              map: options[1],
              filter: options[2],
            };
          }
          return { end: options[0], map: options[1] };
        }
        if (isFunc(options[2])) return { start: options[0], end: options[1], map: options[2] };
        return { start: options[0], end: options[1], step: options[2] };
      },
      4: () => {
        if (isFunc(options[2])) {
          if (isFunc(options[3])) {
            return {
              start: options[0],
              end: options[1],
              map: options[2],
              filter: options[3],
            };
          }
          return { start: options[0], end: options[1], map: options[2] };
        }
        return {
          start: options[0],
          end: options[1],
          step: options[2],
          map: options[3],
        };
      },
      5: () => {
        if (isFunc(options[4])) {
          return {
            start: options[0],
            end: options[1],
            step: options[2],
            map: options[3],
            filter: options[4],
          };
        }
        return {
          start: options[0],
          end: options[1],
          step: options[2],
          map: options[3],
        };
      },
    };
    return map[options.length]();
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

  get length() {
    const gen = this[Symbol.iterator]();
    let i = 0;
    while (!gen.next().done) i += 1;
    return i;
  }
}

module.exports = AbstractRange;

/**
 * Reworked floating point numbers addition operator.
 * @author [Eugen Gritz]{@link https://github.com/maycircle}
 * @function add
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} Number
 * @protected
 */
function add(a, b) {
  let res = `${a + b}`;
  // Reliable absence of approximation error
  if (res.length < 16) return a + b;

  const sA = `${a}`;
  const sB = `${b}`;

  const fractionPos = res.indexOf('.');
  let exponentPos = res.lastIndexOf('e');

  const aFractionPos = sA.indexOf('.');
  let aExponentPos = sA.lastIndexOf('e');
  const bFractionPos = sB.indexOf('.');
  let bExponentPos = sB.lastIndexOf('e');

  // Obtain exponent power from result
  let exponent;
  if (exponentPos !== -1) {
    exponent = res.slice(exponentPos, res.length);
  } else {
    exponent = '';
  }

  if (exponentPos === -1) exponentPos = res.length;
  if (aExponentPos === -1) aExponentPos = sA.length;
  if (bExponentPos === -1) bExponentPos = sB.length;

  // The more numbers in decimal places the less fractional places
  if (exponentPos - fractionPos - 1 >= 17 - fractionPos
    && (aExponentPos - aFractionPos - 1 >= 16 - aFractionPos
    || bExponentPos - bFractionPos - 1 >= 16 - bFractionPos)) {
    return a + b;
  }
  if (exponentPos - fractionPos - 1 < 16 - fractionPos) return a + b;

  // Cut exponent power from result, calculate it's length
  res = res.slice(0, (sA.length > sB.length ? sA.length : sB.length) + 1);
  const fractionLength = res.length - res.indexOf('.') - 2;

  if (res[res.length - 1] === '9') {
    // Round up the last number (9) from result
    return +(+(`${Math.ceil(`${res}e${fractionLength}`)}e${(-fractionLength)}`) + exponent);
  }
  return +(res + exponent);
}

class NumberRange {
  constructor(options) {
    this.options = {
      start: 0,
      end: Infinity,
      step: 1,
      isFloat: false,
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

  isFloat(value) {
    this.options.isFloat = value;
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

  get sum() {
    return this.reduce(add);
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
      isFloat,
      map,
      filter,
    } = this.options;
    let index = 0;
    return {
      next() {
        if ((count && index < count) || (!count && start < end)) {
          const startInc = () => {
            if (isFloat) {
              start = add(start, step);
            } else {
              start += step;
            }
          };
          if (index !== 0) {
            startInc();
          }
          while (filter && !filter(start, index)) {
            if (!count && start >= end) {
              return {
                done: true,
              };
            }
            startInc();
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

module.exports = NumberRange;

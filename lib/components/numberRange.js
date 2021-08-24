const AbstractRange = require('./AbstractRange');
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

class NumberRange extends AbstractRange {
  constructor(...options) {
    super();
    this.options = {
      start: 0,
      end: Infinity,
      step: 1,
      isFloat: false,
      ...AbstractRange.parseParameters(...options),
    };
  }

  isFloat(value) {
    this.options.isFloat = value;
    return this;
  }

  get sum() {
    return this.reduce(add);
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
        if ((count && index < count) || (!count && start <= end)) {
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
            if (!count && start > end) {
              return {
                done: true,
              };
            }
            startInc();
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

module.exports = NumberRange;

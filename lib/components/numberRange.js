/**
 * Reworked floating point numbers addition operator.
 * @author https://github.com/maycircle
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} Number
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
  if (res.length - fractionPos - 1 < 16) return a + b;

  // Cut exponent power from result, calculate it's length
  res = res.slice(0, (sA.length > sB.length ? sA.length : sB.length) + 1);
  const fractionLength = res.length - res.indexOf('.') - 2;

  if (res[res.length - 1] === '9') {
    // Round up the last number (9) from result
    return +(+(`${Math.ceil(`${res}e${fractionLength}`)}e${(-fractionLength)}`) + exponent);
  }
  return +(res + exponent);
}

/**
 * @module NumberRange
 * @classdesc A class that allows you to work with number sequences
 * @class NumberRange
 */
class NumberRange {
  /**
   * @method
   * Allows to get number range generator from start to end with step.
   *
   * Without parameters returns infinity generator from 0 to Infinity with step = 1.
   * @generator
   * @param {0} [start] start of the range (default start = 0)
   * (must be finite integer Number)
   * @param {Infinity} [end] end of the range (default end = Infinity)
   * @param {1} [step] step (default step = 1)
   * (must be finite integer Number)
   * @returns {Generator<Number, void, Number>} returns number sequence
   */
  static* integer(start = 0, end = Infinity, step = 1) {
    for (let i = start; i <= end; i += step) yield i;
  }

  /**
   * @method
   * Allows to get number range generator from start to end with step.
   *
   * Without parameters returns infinity generator from 0 to Infinity with step = 1.
   * @generator
   * @param {0} [start] start of the range (default start = 0)
   * (must be finite integer Number)
   * @param {Infinity} [end] end of the range (default end = Infinity)
   * @param {1} [step] step (default step = 1)
   * (must be finite integer Number)
   * @returns {Generator<Number, void, Number>} returns number sequence
   */
  static* float(start = 0, end = Infinity, step = 1) {
    let i = start;
    while (i <= end) {
      yield i;
      i = add(i, step);
    }
  }

  /**
   * @method
   * Allows to get custom number range generator from start to end with step.
   *
   * Without parameters returns infinity generator from 0 to Infinity with step = 1.
   * @generator
   * @param {{
    * start: 0,
    * end: Infinity,
    * step: 1,
    * isFloat?: boolean
    * map?: function(),
    * filter?,
    * reduce?,
   * }}
   * options of the range
   * @returns {Generator<Number, void, Number>} returns number sequence
   */
  static* custom({ start = 0, end = Infinity, step = 1 }) {
    
  }
}

module.exports = NumberRange;

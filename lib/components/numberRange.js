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
   * @param {Number} [start = 0] start of the range (default start = 0)
   * (must be finite integer Number)
   * @param {Number} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1)
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
   * @param {Number} [start = 0] start of the range (default start = 0)
   * (must be finite integer Number)
   * @param {Number} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1)
   * (must be finite integer Number)
   * @returns {Generator<Number, void, Number>} returns number sequence
   */
  static* float(start = 0, end = Infinity, step = 1, precision = 2) {
    let prevValue = start;
    for (let i = start; i <= end; i += step) {
      if (Math.abs(prevValue - i) >= Math.EPSILON) {
        yield i;
      } else {
        i = 
      }
    }
  }
}

module.exports = NumberRange;

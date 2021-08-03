const Checker = require('./Checker');
/**
 * @module Range
 * @classdesc A class that allows you to work with sequences
 * @class Range
 */
class Range {
  /**
   * @method number
   * Allows to get number range generator from start to end with step.
   *
   * Without parameters returns infinity generator from 0 to Infinity with step = 1.
   * @generator
   * @param {Number} [start = 0] start of the range (default start = 0)
   * @param {Number} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1)
   * @yields {Number} The next number of sequence
   * @returns {Generator<Number, void, Number>} returns number sequence
   * @throws if start, end or step isn't Number, throws TypeError
   * @example Destructuring
   * const { Range } = require('Range');
   * const r = [...Range.number(0, 10)];
   * // r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   * @example Loops
   * const { Range } = require('Range');
   * const r = [];
   * for (let i of Range.number(0, 5)) r.push(i);
   * // r = [0, 1, 2, 3, 4, 5]
   * @example Possible Imports
   * const { Range } = require('Range');
   * const r = [...Range.number(0, 10)];
   * // It's the same as
   * const { numRange } = require('Range');
   * const r = [...numRange(0, 10)];
   * @example With using step
   * const { numRange } = require('Range');
   * const r = [...numRange(0, 10, 2)];
   * // r = [0, 2, 4, 6, 8, 10]
   */
  static* number(start = 0, end = Infinity, step = 1) {
    if (!Checker.isNumber(end)) throw new TypeError('Parameter `end` must be number');

    if (!Checker.isNumber(start) && Number.isFinite(start)) {
      throw new TypeError('Parameter `start` must be finite number');
    }
    if (!Checker.isNumber(step) && Number.isFinite(step)) {
      throw new TypeError('Parameter `end` must be finite number');
    }

    for (let i = start; i <= end; i += step) yield i;
  }

  /**
   * @method
   * Allows to get character range generator from start to end with step.
   *
   * Without parameters return generator from 'A' to 'Z' with step = 1.
   * @param {String} [start = 'A'] start of the range (default start = 'A')
   * @param {String} [end = 'Z'] end of the range (default end = 'Z')
   * @param {Number} [step = 1] step (default step = 1)
   * @yields {String}
   * @returns {Generator<string, void, string>} returns charecter sequence
   * @throws if start, end or step isn't character, throws TypeError
   * @example Destructuring
   * const { Range } = require('Range');
   * const r = [...Range.char('A', 'D')];
   * // r = ['A', 'B', 'C', 'D']
   * @example Loops
   * const { Range } = require('Range');
   * const r = [];
   * for (let i of Range.char('A', 'D')) r.push(i);
   * // r = ['A', 'B', 'C', 'D']
   * @example Possible Imports
   * const { Range } = require('Range');
   * const r = [...Range.char('A', 'F')];
   * // It's the same as
   * const { chrRange } = require('Range');
   * const r = [...chrRange('A', 'F')];
   * @example With using step
   * const { chrRange } = require('Range');
   * const r = [...chrRange('A', 'F', 2)];
   * // r = ['A', 'C', 'E']
   */
  static* char(start = 'A', end = 'Z', step = 1) {
    if (!Checker.isCharacter(start)) throw new TypeError('Parameter `start` must be character');
    if (!Checker.isCharacter(end)) throw new TypeError('Parameter `end` must be character');
    if (!Checker.isNumber(step) && Number.isFinite(step)) {
      throw new TypeError('Parameter `end` must be finite number');
    }
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
      yield String.fromCharCode(i);
    }
  }

  /**
   * @method
   * Allows to get string range generator from start to end with step.
   *
   * Without parameters return generator from start of the string to the end with step = 1.
   * @param {String} [source] the string
   * @param {Number} [start = 0] start of the range (default start = 0)
   * @param {Number} [end = source.length - 1]
   * end of the range (default end = last character of the source)
   * @param {Number} [step = 1] step (default step = 1)
   * @yields {String}
   * @returns {Generator<string, void, string>} returns charecter sequence
   * @throws if start, end or step isn't number, or source isn't string throws TypeError
   * @example Destructuring
   * const { Range } = require('Range');
   * const r = [...Range.string('Hello world', 3, 5)];
   * // r = ['l', 'o', ' ']
   * @example Loops
   * const { Range } = require('Range');
   * const r = [];
   * for (let i of Range.string('Hello world', 3, 5)) r.push(i);
   * // r = ['l', 'o', ' ']
   * @example Possible Imports
   * const { Range } = require('Range');
   * const r = [...Range.string('Hello world', 3, 5)];
   * // It's the same as
   * const { strRange } = require('Range');
   * const r = [...strRange('Hello world', 3, 5)];
   * @example With using step
   * const { strRange } = require('Range');
   * const r = [...strRange('Hello world', 3, 7, 2)];
   * // r = ['l', ' ', 'o']
   */
  static* string(source, start = null, end = null, step = 1) {
    if (!Checker.isString(source)) throw new TypeError('Parameter `source` must be String');

    if (!Checker.isNumber(start) && Number.isFinite(start)) {
      throw new TypeError('Parameter `start` must be finite number');
    }
    if (!Checker.isNumber(end) && Number.isFinite(end)) {
      throw new TypeError('Parameter `end` must be finite number');
    }
    if (!Checker.isNumber(step) && Number.isFinite(step)) {
      throw new TypeError('Parameter `step` must be finite number');
    }

    for (let i = start; i <= end; i += step) yield source[i];
  }

  /**
   * @method
   * Allows to get date range generator from start to end with step.
   *
   * Without parameters return generator from start date to end date by seconds with step = 1.
   * @param {Date} [start = new Date()] start of date range (default start = today)
   * @param {Date} [end] start of the range (default start = 0)
   * @param {Number} [step = 1] step (default step = 1)
   * @yields {Date}
   * @returns {Generator<Date, void, Date>} returns charecter sequence
   * @throws if start, end or step isn't number, or source isn't string throws TypeError
   * @example Destructuring
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setSeconds(end.getSeconds() + 5);
   * // you can pass undefined to use default value
   * const r = [...Range.second(undefined, end)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-02T16:48:21.765Z,
   * //   2021-08-02T16:48:22.765Z,
   * //   2021-08-02T16:48:23.765Z,
   * //   2021-08-02T16:48:24.765Z
   * // ]
   * @example Loops
   * const { Range } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setSeconds(end.getSeconds() + 5);
   * for (let i of Range.second(undefined, end)) r.push(i);
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-02T16:48:21.765Z,
   * //   2021-08-02T16:48:22.765Z,
   * //   2021-08-02T16:48:23.765Z,
   * //   2021-08-02T16:48:24.765Z
   * // ]
   * @example Possible Imports
   * const { Range } = require('Range');
   * const r = [...Range.second('Hello world', 3, 5)];
   * // It's the same as
   * const { secRange } = require('Range');
   * const r = [...secRange('Hello world', 3, 5)];
   * @example With using step
   * const { secRange } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setSeconds(end.getSeconds() + 5);
   * const r = [...secRange(undefined, end, 2)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-02T16:48:22.765Z,
   * //   2021-08-02T16:48:24.765Z
   * // ]
   */
  static* second(start = new Date(), end, step = 1) {
    if (!Checker.isDate(start)) throw new TypeError('Parameter `start` must be Date');
    if (!Checker.isDate(end)) throw new TypeError('Parameter `end` must be Date');
    if (!Checker.isNumber(step) && Number.isFinite(step)) {
      throw new TypeError('Parameter `step` must be finite number');
    }
    while (start < end) {
      start.setSeconds(start.getSeconds() + step);
      yield new Date(start);
    }
  }
}

module.exports = {
  Range,
  numRange: Range.number,
  chrRange: Range.char,
  strRange: Range.string,
  secRange: Range.second,
};

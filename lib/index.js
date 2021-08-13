const NumberRange = require('./components/numberRange');
/**
 * @hideconstructor
 * @classdesc A class that allows you to work with sequences
 * @class Range
 */
class Range {

  /**
   * Allows to get integer number range generator from start to end with step.
   *
   * Without parameters returns infinity generator from 0 to Infinity with step = 1.
   * @static
   * @method Range.intNum
   * @param {Number} [start = 0] start of the range (default start = 0)
   * (must be finite integer Number)
   * @param {Infinity} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1)
   * (must be finite integer Number)
   * @returns {Generator<Number, void, Number>} returns integer number sequence
   */
  static intNum(start = 0, end = Infinity, step = 1) {
    return NumberRange.integer(start, end, step);
  }

  /**
   * Allows to get number range generator from start to end with step.
   *
   * Without parameters returns infinity generator from 0 to Infinity with step = 1.
   * @static
   * @method Range.floatNum
   * @param {0} [start = 0] start of the range (default start = 0)
   * (must be finite integer Number)
   * @param {Infinity} [end = Infinity] end of the range (default end = Infinity)
   * @param {1} [step = 1] step (default step = 1)
   * (must be finite integer Number)
   * @returns {Generator<Number, void, Number>} returns number sequence
   */
  static floatNum(start = 0, end = Infinity, step = 1) {
    return NumberRange.float(start, end, step);
  }

  /**
   * Allows to get character range generator from start to end with step.
   *
   * Without parameters return generator from 'A' to 'Z' with step = 1.
   * @static
   * @method Range.char
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
    if (!Checker.isNumber(step) || !Number.isFinite(step)) {
      throw new TypeError('Parameter `end` must be finite number');
    }
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
      yield String.fromCharCode(i);
    }
  }

  /**
   * Allows to get string range generator from start to end with step.
   *
   * Without parameters return generator from start of the string to the end with step = 1.
   * @static
   * @method Range.string
   * @param {String} [source] the string
   * @param {Number} [start = 0] start of the range (default start = 0)
   * @param {Number} [end = source.length - 1]
   * end of the range (default end = last character of the source)
   * @param {Number} [step = 1] step (default step = 1)
   * @yields {String}
   * @returns {Generator<string, void, string>} returns charecter sequence
   * @throws if start, end or step isn't integer number, or source isn't string throws TypeError
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
  static* string(source, start = 0, end = undefined, step = 1) {
    if (!end) end = source.length - 1;

    if (!Checker.isString(source)) throw new TypeError('Parameter `source` must be String');
    if (!Number.isInteger(step) || step === 0) throw new TypeError('Parameter `step` must be integer number doesn\'t equals 0');
    if (!Number.isInteger(start) || start < 0) throw new TypeError('Parameter `start` must be positive integer number');
    if (!Number.isInteger(end) || end < 0) throw new TypeError('Parameter `end` must be positive integer number');

    for (let i = start; i <= end; i += step) yield source[i];
  }

  /**
   * Allows to get date range generator from start to end with step.
   *
   * Without parameters return generator from start date to end date by seconds with step = 1s.
   * @static
   * @method Range.second
   * @param {Date} [start = new Date()] start of date range (default start = today)
   * @param {Date} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1s)
   * @yields {Date}
   * @returns {Generator<Date, void, Date>} returns date sequence
   * @throws if start or end isn't Date object and step isn't integer Number throws TypeError
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
   * const end = new Date();
   * end.setSeconds(end.getSeconds() + 5);
   * const r = [...Range.second(undefined, end)];
   * // It's the same as
   * const { secRange } = require('Range');
   * const end = new Date();
   * end.setSeconds(end.getSeconds() + 5);
   * const r = [...secRange(undefined, end)];
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
  static* second(start = new Date(), end = Infinity, step = 1) {
    if (!Checker.isDate(start)) throw new TypeError('Parameter `start` must be Date');
    if (!Checker.isDate(end)) throw new TypeError('Parameter `end` must be Date');
    if (!Number.isInteger(step) || step === 0) throw new TypeError('Parameter `step` must be integer number doesn\'t equals 0');

    while (start < end) {
      start.setSeconds(start.getSeconds() + step);
      yield new Date(start);
    }
  }

  /**
   * Allows to get date range generator from start to end with step.
   *
   * Without parameters return generator from start date to end date by minutes with step = 1m.
   * @static
   * @method Range.minute
   * @param {Date} [start = new Date()] start of date range (default start = today)
   * @param {Date} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1m)
   * @yields {Date}
   * @returns {Generator<Date, void, Date>} returns date sequence
   * @throws if start or end isn't Date object and step isn't integer Number throws TypeError
   * @example Destructuring
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setMinutes(end.getMinutes() + 5);
   * // you can pass undefined to use default value
   * const r = [...Range.minute(undefined, end)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-02T16:49:20.765Z,
   * //   2021-08-02T16:50:20.765Z,
   * //   2021-08-02T16:51:20.765Z,
   * //   2021-08-02T16:52:20.765Z
   * // ]
   * @example Loops
   * const { Range } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setMinutes(end.getMinutes() + 5);
   * for (let i of Range.minute(undefined, end)) r.push(i);
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-02T16:49:20.765Z,
   * //   2021-08-02T16:50:20.765Z,
   * //   2021-08-02T16:51:20.765Z,
   * //   2021-08-02T16:52:20.765Z
   * // ]
   * @example Possible Imports
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setMinutes(end.getMinutes() + 5);
   * const r = [...Range.minute(undefined, end)];
   * // It's the same as
   * const { minRange } = require('Range');
   * const end = new Date();
   * end.setMinutes(end.getMinutes() + 5);
   * const r = [...minRange(undefined, end)];
   * @example With using step
   * const { minRange } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setMinutes(end.getMinutes() + 5);
   * const r = [...minRange(undefined, end, 2)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-02T16:50:20.765Z,
   * //   2021-08-02T16:52:20.765Z
   * // ]
   */
  static* minute(start = new Date(), end = Infinity, step = 1) {
    if (!Checker.isDate(start)) throw new TypeError('Parameter `start` must be Date');
    if (!Checker.isDate(end)) throw new TypeError('Parameter `end` must be Date');
    if (!Number.isInteger(step) || step === 0) throw new TypeError('Parameter `step` must be integer number doesn\'t equals 0');

    while (start < end) {
      start.setMinutes(start.getMinutes() + step);
      yield new Date(start);
    }
  }

  /**
   * Allows to get date range generator from start to end with step.
   *
   * Without parameters return generator from start date to end date by hours with step = 1h.
   * @static
   * @method Range.hour
   * @param {Date} [start = new Date()] start of date range (default start = today)
   * @param {Date} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1h)
   * @yields {Date}
   * @returns {Generator<Date, void, Date>} returns date sequence
   * @throws if start or end isn't Date object and step isn't integer Number throws TypeError
   * @example Destructuring
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setHours(end.getHours() + 5);
   * // you can pass undefined to use default value
   * const r = [...Range.hour(undefined, end)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-02T17:48:20.765Z,
   * //   2021-08-02T18:48:20.765Z,
   * //   2021-08-02T19:48:20.765Z,
   * //   2021-08-02T20:48:20.765Z
   * // ]
   * @example Loops
   * const { Range } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setHours(end.getHours() + 5);
   * for (let i of Range.hour(undefined, end)) r.push(i);
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-02T17:48:20.765Z,
   * //   2021-08-02T18:48:20.765Z,
   * //   2021-08-02T19:48:20.765Z,
   * //   2021-08-02T20:48:20.765Z
   * // ]
   * @example Possible Imports
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setHours(end.getHours() + 5);
   * const r = [...Range.hour(undefined, end)];
   * // It's the same as
   * const { houRange } = require('Range');
   * const end = new Date();
   * end.setHours(end.getHours() + 5);
   * const r = [...houRange(undefined, end)];
   * @example With using step
   * const { houRange } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setHours(end.getHours() + 5);
   * const r = [...houRange(undefined, end, 2)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-02T16:50:20.765Z,
   * //   2021-08-02T16:52:20.765Z
   * // ]
   */
  static* hour(start = new Date(), end = Infinity, step = 1) {
    if (!Checker.isDate(start)) throw new TypeError('Parameter `start` must be Date');
    if (!Checker.isDate(end)) throw new TypeError('Parameter `end` must be Date');
    if (!Number.isInteger(step) || step === 0) throw new TypeError('Parameter `step` must be integer number doesn\'t equals 0');

    while (start < end) {
      start.setHours(start.getHours() + step);
      yield new Date(start);
    }
  }

  /**
   * Allows to get date range generator from start to end with step.
   *
   * Without parameters return generator from start date to end date by day with step = 1d.
   * @static
   * @method Range.day
   * @param {Date} [start = new Date()] start of date range (default start = today)
   * @param {Date} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1d)
   * @yields {Date}
   * @returns {Generator<Date, void, Date>} returns date sequence
   * @throws if start or end isn't Date object and step isn't integer Number throws TypeError
   * @example Destructuring
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setDate(end.getDate() + 5);
   * // you can pass undefined to use default value
   * const r = [...Range.day(undefined, end)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-03T16:48:20.765Z,
   * //   2021-08-04T16:48:20.765Z,
   * //   2021-08-05T16:48:20.765Z,
   * //   2021-08-06T16:48:20.765Z
   * // ]
   * @example Loops
   * const { Range } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setDate(end.getDate() + 5);
   * for (let i of Range.day(undefined, end)) r.push(i);
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-03T16:48:20.765Z,
   * //   2021-08-04T16:48:20.765Z,
   * //   2021-08-05T16:48:20.765Z,
   * //   2021-08-06T16:48:20.765Z
   * // ]
   * @example Possible Imports
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setDate(end.getDate() + 5);
   * const r = [...Range.day(undefined, end)];
   * // It's the same as
   * const { dayRange } = require('Range');
   * const end = new Date();
   * end.setDate(end.getDate() + 5);
   * const r = [...dayRange(undefined, end)];
   * @example With using step
   * const { dayRange } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setDate(end.getDate() + 5);
   * const r = [...dayRange(undefined, end, 2)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-08-04T16:48:20.765Z,
   * //   2021-08-06T16:48:20.765Z
   * // ]
   */
  static* day(start = new Date(), end = Infinity, step = 1) {
    if (!Checker.isDate(start)) throw new TypeError('Parameter `start` must be Date');
    if (!Checker.isDate(end)) throw new TypeError('Parameter `end` must be Date');
    if (!Number.isInteger(step) || step === 0) throw new TypeError('Parameter `step` must be integer number doesn\'t equals 0');

    while (start < end) {
      start.setDate(start.getDate() + step);
      yield new Date(start);
    }
  }

  /**
   * Allows to get date range generator from start to end with step.
   *
   * Without parameters return generator from start date to end date by month with step = 1 month.
   * @static
   * @method Range.month
   * @param {Date} [start = new Date()] start of date range (default start = today)
   * @param {Date} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1 month)
   * @yields {Date}
   * @returns {Generator<Date, void, Date>} returns date sequence
   * @throws if start or end isn't Date object and step isn't integer Number throws TypeError
   * @example Destructuring
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setMonth(end.getMonth() + 5);
   * // you can pass undefined to use default value
   * const r = [...Range.month(undefined, end)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-09-02T16:48:20.765Z,
   * //   2021-10-02T16:48:20.765Z,
   * //   2021-11-02T16:48:20.765Z,
   * //   2021-12-02T16:48:20.765Z
   * // ]
   * @example Loops
   * const { Range } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setMonth(end.getMonth() + 5);
   * for (let i of Range.month(undefined, end)) r.push(i);
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-09-02T16:48:20.765Z,
   * //   2021-10-02T16:48:20.765Z,
   * //   2021-11-02T16:48:20.765Z,
   * //   2021-12-02T16:48:20.765Z
   * // ]
   * @example Possible Imports
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setMonth(end.getMonth() + 5);
   * const r = [...Range.month(undefined, end)];
   * // It's the same as
   * const { monRange } = require('Range');
   * const end = new Date();
   * end.setMonth(end.getMonth() + 5);
   * const r = [...monRange(undefined, end)];
   * @example With using step
   * const { monRange } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setMonth(end.getMonth() + 5);
   * const r = [...monRange(undefined, end, 2)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-10-02T16:48:20.765Z,
   * //   2021-12-02T16:48:20.765Z
   * // ]
   */
  static* month(start = new Date(), end = Infinity, step = 1) {
    if (!Checker.isDate(start)) throw new TypeError('Parameter `start` must be Date');
    if (!Checker.isDate(end)) throw new TypeError('Parameter `end` must be Date');
    if (!Number.isInteger(step) || step === 0) throw new TypeError('Parameter `step` must be integer number doesn\'t equals 0');

    while (start < end) {
      start.setMonth(start.getMonth() + step);
      yield new Date(start);
    }
  }

  /**
   * Allows to get date range generator from start to end with step.
   *
   * Without parameters return generator from start date to end date by month with step = 1 year.
   * @static
   * @method Range.year
   * @param {Date} [start = new Date()] start of date range (default start = today)
   * @param {Date} [end = Infinity] end of the range (default end = Infinity)
   * @param {Number} [step = 1] step (default step = 1 year)
   * @yields {Date}
   * @returns {Generator<Date, void, Date>} returns date sequence
   * @throws if start or end isn't Date object and step isn't integer Number throws TypeError
   * @example Destructuring
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setFullYear(end.getFullYear() + 5);
   * // you can pass undefined to use default value
   * const r = [...Range.year(undefined, end)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-09-02T16:48:20.765Z,
   * //   2021-10-02T16:48:20.765Z,
   * //   2021-11-02T16:48:20.765Z,
   * //   2021-12-02T16:48:20.765Z
   * // ]
   * @example Loops
   * const { Range } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setFullYear(end.getFullYear() + 5);
   * for (let i of Range.year(undefined, end)) r.push(i);
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-09-02T16:48:20.765Z,
   * //   2021-10-02T16:48:20.765Z,
   * //   2021-11-02T16:48:20.765Z,
   * //   2021-12-02T16:48:20.765Z
   * // ]
   * @example Possible Imports
   * const { Range } = require('Range');
   * const end = new Date();
   * end.setFullYear(end.getFullYear() + 5);
   * const r = [...Range.year(undefined, end)];
   * // It's the same as
   * const { yeaRange } = require('Range');
   * const end = new Date();
   * end.setFullYear(end.getFullYear() + 5);
   * const r = [...yeaRange(undefined, end)];
   * @example With using step
   * const { yeaRange } = require('Range');
   * // new Date() == 2021-08-02T16:48:20.765Z
   * const r = [];
   * const end = new Date();
   * end.setFullYear(end.getFullYear() + 5);
   * const r = [...yeaRange(undefined, end, 2)];
   * // r = [
   * //   2021-08-02T16:48:20.765Z,
   * //   2021-10-02T16:48:20.765Z,
   * //   2021-12-02T16:48:20.765Z
   * // ]
   */
  static* year(start = new Date(), end = Infinity, step = 1) {
    if (!Checker.isDate(start)) throw new TypeError('Parameter `start` must be Date');
    if (!Checker.isDate(end)) throw new TypeError('Parameter `end` must be Date');
    if (!Number.isInteger(step) || step === 0) throw new TypeError('Parameter `step` must be integer number doesn\'t equals 0');

    while (start < end) {
      start.setFullYear(start.getFullYear() + step);
      yield new Date(start);
    }
  }

  static* date(options = { start: new Date(), end: Infinity, step: 1 }) {
    
  }
}


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.returnExportsGlobal = factory(b));
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.returnExportsGlobal = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return {
    /**
      * The module contains the ranges for the numbers
      * @module Range
      * @author [Kirill]{@link https://github.com/Crinax}
      * @see Range
      * @license
      * Copyright (c) 2021 [Kirill]{@link https://github.com/Crinax}<br/>
      * <br/>
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:<br/>
      * <br/>
      * The above copyright notice and this permission notice shall be included in all
      * copies or substantial portions of the Software.<br/>
      * <br/>
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      * SOFTWARE.
    */
    Range,
    /**
      * The module contains the ranges for the numbers
      * @module NumberRange
      * @author [Kirill]{@link https://github.com/Crinax}
      * @see NumberRange
      * @license
      * Copyright (c) 2021 [Kirill]{@link https://github.com/Crinax}<br/>
      * <br/>
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:<br/>
      * <br/>
      * The above copyright notice and this permission notice shall be included in all
      * copies or substantial portions of the Software.<br/>
      * <br/>
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      * SOFTWARE.
    */
    NumberRange,
    intNumRange: Range.intNum,
    floatNumRange: Range.floatNum,
    chrRange: Range.char,
    strRange: Range.string,
    secRange: Range.second,
    minRange: Range.minute,
    houRange: Range.hour,
    dayRange: Range.day,
    monRange: Range.month,
    yeaRange: Range.year,
  };
}));

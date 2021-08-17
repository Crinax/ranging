/* eslint-disable class-methods-use-this */
const AbstractDateRange = require('../AbstractDateRange');
const SecondsRange = require('./secondsRange');
const MinutesRange = require('./minutesRange');
const HoursRange = require('./hoursRange');
const DaysRange = require('./daysRange');
const MonthsRange = require('./monthsRange');
const YearsRange = require('./yearsRange');

class DateRange extends AbstractDateRange {
  static seconds() {
    return new SecondsRange();
  }

  static minutes() {
    return new MinutesRange();
  }

  static hours() {
    return new HoursRange();
  }

  static days() {
    return new DaysRange();
  }

  static months() {
    return new MonthsRange();
  }

  static years() {
    return new YearsRange();
  }

  seconds() {
    return new SecondsRange();
  }

  minutes() {
    return new MinutesRange();
  }

  hours() {
    return new HoursRange();
  }

  days() {
    return new DaysRange();
  }

  months() {
    return new MonthsRange();
  }

  years() {
    return new YearsRange();
  }
}

module.exports = {
  DateRange,
  SecondsRange,
  MinutesRange,
  HoursRange,
  DaysRange,
  MonthsRange,
  YearsRange,
};

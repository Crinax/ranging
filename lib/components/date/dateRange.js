/* eslint-disable class-methods-use-this */
const AbstractDateRange = require('../AbstractDateRange');
const SecondRange = require('./secondRange');
const MinuteRange = require('./minuteRange');
const HourRange = require('./hoursRange');
const DayRange = require('./dayRange');
const MonthRange = require('./monthRange');
const YearRange = require('./yearRange');

class DateRange extends AbstractDateRange {
  static second() {
    return new SecondRange();
  }

  static minute() {
    return new MinuteRange();
  }

  static hour() {
    return new HourRange();
  }

  static day() {
    return new DayRange();
  }

  static month() {
    return new MonthRange();
  }

  static year() {
    return new YearRange();
  }

  second() {
    return new SecondRange();
  }

  minute() {
    return new MinuteRange();
  }

  hour() {
    return new HourRange();
  }

  day() {
    return new DayRange();
  }

  month() {
    return new MonthRange();
  }

  year() {
    return new YearRange();
  }
}

module.exports = {
  DateRange,
  SecondRange,
  MinuteRange,
  HourRange,
  DayRange,
  MonthRange,
  YearRange,
};

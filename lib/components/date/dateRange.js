/* eslint-disable class-methods-use-this */
const AbstractDateRange = require('../AbstractDateRange');
const SecondRange = require('./secondRange');
const MinuteRange = require('./minuteRange');
const HourRange = require('./hoursRange');
const DayRange = require('./dayRange');
const MonthRange = require('./monthRange');
const YearRange = require('./yearRange');

class DateRange extends AbstractDateRange {
  static second(...options) {
    return new SecondRange(...options);
  }

  static minute(...options) {
    return new MinuteRange(...options);
  }

  static hour(...options) {
    return new HourRange(...options);
  }

  static day(...options) {
    return new DayRange(...options);
  }

  static month(...options) {
    return new MonthRange(...options);
  }

  static year(...options) {
    return new YearRange(...options);
  }

  second(...options) {
    return new SecondRange(...options);
  }

  minute(...options) {
    return new MinuteRange(...options);
  }

  hour(...options) {
    return new HourRange(...options);
  }

  day(...options) {
    return new DayRange(...options);
  }

  month(...options) {
    return new MonthRange(...options);
  }

  year(...options) {
    return new YearRange(...options);
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

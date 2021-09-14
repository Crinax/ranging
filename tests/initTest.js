const parser = require('./parser');
const assert = require('assert');
const {
  Range,
  NumberRange,
  CharRange,
  StringRange,
  ColorRange,
  DateRange,
  DayRange,
  MonthRange,
  YearRange,
  SecondRange,
  MinuteRange,
  HourRange,
  MergeRanges,
  ZipRanges
} = require('../');

const initTest = (header, tests) => {
  describe(header, function() {
    for (test of tests) {
      let testParsed = parser(test);
      it(test, function() {
        assert.deepEqual(eval(testParsed.code), eval(testParsed.except))
      });
    }
  });
}

module.exports = initTest;
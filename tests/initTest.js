const parser = require('./parser');
const assert = require('assert');
const {
  NumberRange,
  CharRange,
  StringRange,
  ColorRange,
  MillisecondRange,
  SecondRange,
  MinuteRange,
  HourRange,
  DayRange,
  MonthRange,
  YearRange,
  // ZipRanges,
  MergeRange,
} = require('../');

const initTest = (header, tests, assertMethod) => {
  describe(header, function () {
    for (let test of tests) {
      const testParsed = parser(test);
      it(test, function () {
        assert[assertMethod](eval(testParsed.code), eval(testParsed.except));
      });
    }
  });
}

module.exports = initTest;
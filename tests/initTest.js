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
  MergeRange,
  ZipRange,
  RandomNumberRange,
  RandomCharRange,
  RandomStringRange,
  RandomDateRange,
  RandomColorRange,
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
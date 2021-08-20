const NumberRange = require('./numberRange');
const CharRange = require('./charRange');
const StringRange = require('./stringRange');
const { DateRange, ...SubDateRanges } = require('./date/dateRange');

class Range {
  static numbers(...options) {
    return new NumberRange(...options);
  }

  static chars(...options) {
    return new CharRange(...options);
  }

  static strings(...options) {
    return new StringRange(...options);
  }

  static date(...options) {
    return new DateRange(...options);
  }
}

module.exports = {
  Range,
  NumberRange,
  CharRange,
  StringRange,
  DateRange,
  ...SubDateRanges,
};

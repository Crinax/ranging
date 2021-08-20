const AbstractDateRange = require('../AbstractDateRange');

class MinuteRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getMinutes', set: 'setMinutes' };
  }
}

module.exports = MinuteRange;

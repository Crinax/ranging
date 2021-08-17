const AbstractDateRange = require('../AbstractDateRange');

class MinutesRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getMinutes', set: 'setMinutes' };
  }
}

module.exports = MinutesRange;

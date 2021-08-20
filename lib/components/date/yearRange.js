const AbstractDateRange = require('../AbstractDateRange');

class YearRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getFullYear', set: 'setFullYear' };
  }
}

module.exports = YearRange;

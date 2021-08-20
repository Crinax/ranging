const AbstractDateRange = require('../AbstractDateRange');

class MonthRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getMonth', set: 'setMonth' };
  }
}

module.exports = MonthRange;

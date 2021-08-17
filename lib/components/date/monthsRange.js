const AbstractDateRange = require('../AbstractDateRange');

class MonthsRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getMonth', set: 'setMonth' };
  }
}

module.exports = MonthsRange;

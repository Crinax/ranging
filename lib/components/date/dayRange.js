const AbstractDateRange = require('../AbstractDateRange');

class DayRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getDate', set: 'setDate' };
  }
}

module.exports = DayRange;

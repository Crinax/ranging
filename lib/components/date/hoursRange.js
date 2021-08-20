const AbstractDateRange = require('../AbstractDateRange');

class HourRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getHours', set: 'setHours' };
  }
}

module.exports = HourRange;

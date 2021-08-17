const AbstractDateRange = require('../AbstractDateRange');

class HoursRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getHours', set: 'setHours' };
  }
}

module.exports = HoursRange;

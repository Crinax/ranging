const AbstractDateRange = require('../AbstractDateRange');

class YearsRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getFullYear', set: 'setFullYear' };
  }
}

module.exports = YearsRange;

const AbstractDateRange = require('../AbstractDateRange');

class DaysRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getDate', set: 'setDate' };
  }
}

module.exports = DaysRange;

const AbstractDateRange = require('../AbstractDateRange');

class SecondsRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getSeconds', set: 'setSeconds' };
  }
}

module.exports = SecondsRange;

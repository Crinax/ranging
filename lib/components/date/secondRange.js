const AbstractDateRange = require('../AbstractDateRange');

class SecondRange extends AbstractDateRange {
  setLiterals() {
    this.literals = { get: 'getSeconds', set: 'setSeconds' };
  }
}

module.exports = SecondRange;

class Checker {
  static isNumber(n) {
    return typeof n === 'number' && !Number.isNaN(n);
  }

  static isCharacter(c) {
    return typeof c === 'string' && c.length === 1 && String.fromCharCode(c.charCodeAt(0)) === c;
  }

  static isString(s) {
    return typeof s === 'string' && s.length > 1;
  }
}

module.exports = Checker;

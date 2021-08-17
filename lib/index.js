/* eslint-disable */
const RangeModules = require('./components/range');

/* (function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([RangeModules], function () {
      return (root.returnExportsGlobal = factory(b));
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.returnExportsGlobal = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return { ...RangeModules };
})); */

module.exports = RangeModules;

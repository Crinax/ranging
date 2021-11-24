(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ranging = {}));
})(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    var AbstractRangeGenerator = /** @class */ (function () {
        function AbstractRangeGenerator() {
        }
        AbstractRangeGenerator.prototype[Symbol.iterator] = function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); };
        return AbstractRangeGenerator;
    }());

    var AbstractRange = /** @class */ (function (_super) {
        __extends(AbstractRange, _super);
        function AbstractRange(options) {
            var _this = _super.call(this) || this;
            _this.options = options;
            return _this;
        }
        AbstractRange.prototype.reduce = function (f, initial) {
            if (initial === void 0) { initial = 0; }
            var result = initial;
            var gen = this[Symbol.iterator]();
            var genObj = gen.next();
            var i = 0;
            while (!genObj.done) {
                result = f(result, genObj.value, i);
                i += 1;
                genObj = gen.next();
            }
            return result;
        };
        Object.defineProperty(AbstractRange.prototype, "length", {
            get: function () {
                var gen = this[Symbol.iterator]();
                var i = 0;
                while (!gen.next().done)
                    i += 1;
                return i;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AbstractRange.prototype, "iterator", {
            get: function () {
                return this[Symbol.iterator]();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AbstractRange.prototype, "stringify", {
            get: function () {
                return this.reduce(function (prev, curr) { return String(prev) + String(curr); }, '');
            },
            enumerable: false,
            configurable: true
        });
        return AbstractRange;
    }(AbstractRangeGenerator));

    var AbstractDateRange = /** @class */ (function (_super) {
        __extends(AbstractDateRange, _super);
        function AbstractDateRange(metric, options) {
            var _this = _super.call(this, options) || this;
            _this.metric = metric;
            return _this;
        }
        AbstractDateRange.prototype.setSearchMetricMap = function (start) {
            this.dateGetters = {
                'ms': start.getTime,
                's': start.getSeconds,
                'm': start.getMinutes,
                'h': start.getHours,
                'D': start.getDate,
                'M': start.getMonth,
                'Y': start.getFullYear,
            };
            this.dateSetters = {
                'ms': start.setTime,
                's': start.setSeconds,
                'm': start.setMinutes,
                'h': start.setHours,
                'D': start.setDate,
                'M': start.setMonth,
                'Y': start.setFullYear,
            };
        };
        AbstractDateRange.prototype.getTime = function (start) {
            if (!this.dateGetters)
                this.setSearchMetricMap(start);
            return this.dateGetters[this.metric].call(start);
        };
        AbstractDateRange.prototype.setTime = function (start, value) {
            if (!this.dateSetters)
                this.setSearchMetricMap(start);
            return this.dateSetters[this.metric].call(start, value);
        };
        AbstractDateRange.prototype[Symbol.iterator] = function () {
            var _a, start, _b, _c, end, _d, step, count, map, filter, leapYear, weekdays, index, extIndex, isLeepYear, addStep;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.options.start, start = _a === void 0 ? new Date() : _a;
                        _b = this.options, _c = _b.end, end = _c === void 0 ? Infinity : _c, _d = _b.step, step = _d === void 0 ? 1 : _d, count = _b.count, map = _b.map, filter = _b.filter, leapYear = _b.leapYear, weekdays = _b.weekdays;
                        index = 0;
                        extIndex = 0;
                        start = new Date(start);
                        isLeepYear = function (year) { return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0); };
                        addStep = function () {
                            _this.setTime(start, _this.getTime(start) + step);
                        };
                        _e.label = 1;
                    case 1:
                        if (!((count && index < count) || (!count && start <= end))) return [3 /*break*/, 6];
                        if (filter && !filter(new Date(start), extIndex)) {
                            extIndex++;
                            addStep();
                            return [3 /*break*/, 1];
                        }
                        if (leapYear && !isLeepYear(start.getFullYear())) {
                            addStep();
                            return [3 /*break*/, 1];
                        }
                        if (weekdays && weekdays.indexOf(start.getDay()) === -1) {
                            addStep();
                            return [3 /*break*/, 1];
                        }
                        if (!map) return [3 /*break*/, 3];
                        return [4 /*yield*/, map(new Date(start), index)];
                    case 2:
                        _e.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, new Date(start)];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        index++;
                        extIndex++;
                        addStep();
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        };
        return AbstractDateRange;
    }(AbstractRange));

    /**
     * Reworked floating point numbers addition operator.
     * @author [Eugen Gritz]
     * @link https://github.com/maycircle
     * @function add
     * @param {Number} a
     * @param {Number} b
     * @returns {Number} Number
     * @protected
     */
    function fixOperation(a, b, oper) {
        var res = "" + (oper === '+' ? a + b : a * b);
        // Reliable absence of approximation error
        if (res.length < 16)
            return oper === '+' ? a + b : a * b;
        var sA = "" + a;
        var sB = "" + b;
        var fractionPos = res.indexOf('.');
        var exponentPos = res.lastIndexOf('e');
        var aFractionPos = sA.indexOf('.');
        var aExponentPos = sA.lastIndexOf('e');
        var bFractionPos = sB.indexOf('.');
        var bExponentPos = sB.lastIndexOf('e');
        // Obtain exponent power from result
        var exponent;
        if (exponentPos !== -1) {
            exponent = res.slice(exponentPos, res.length);
        }
        else {
            exponent = '';
        }
        if (exponentPos === -1)
            exponentPos = res.length;
        if (aExponentPos === -1)
            aExponentPos = sA.length;
        if (bExponentPos === -1)
            bExponentPos = sB.length;
        // The more numbers in decimal places the less fractional places
        if (exponentPos - fractionPos - 1 >= 17 - fractionPos
            && (aExponentPos - aFractionPos - 1 >= 16 - aFractionPos
                || bExponentPos - bFractionPos - 1 >= 16 - bFractionPos)) {
            return a + b;
        }
        if (exponentPos - fractionPos - 1 < 16 - fractionPos)
            return oper === '+' ? a + b : a * b;
        var fractionLength = res.length - res.indexOf('.') - 2;
        if (res[res.length - 2] === '9') {
            // Round up the last number (9) from result
            var exponetialForm = res + "e" + fractionLength;
            var ceiledNumber = Math.ceil(Number(exponetialForm));
            exponetialForm = ceiledNumber + "e" + -fractionLength;
            return +(+(exponetialForm) + exponent);
        }
        // Cut exponent power from result, calculate it's length
        res = res.slice(0, (sA.length > sB.length ? sA.length : sB.length) + 1);
        return +(res + exponent);
    }
    var add = function (a, b) { return fixOperation(a, b, '+'); };
    var product = function (a, b) { return fixOperation(a, b, '*'); };

    var NumberRange = /** @class */ (function (_super) {
        __extends(NumberRange, _super);
        function NumberRange(options) {
            return _super.call(this, options ||
                { start: 0, end: Infinity, step: 1, float: false }) || this;
        }
        Object.defineProperty(NumberRange.prototype, "sum", {
            get: function () {
                return this.reduce(add);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NumberRange.prototype, "product", {
            get: function () {
                return this.reduce(product, 1);
            },
            enumerable: false,
            configurable: true
        });
        NumberRange.prototype[Symbol.iterator] = function () {
            var _a, start, _b, _c, end, _d, step, count, float, map, filter, index, extIndex, addStep;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.options.start, start = _a === void 0 ? 0 : _a;
                        _b = this.options, _c = _b.end, end = _c === void 0 ? Infinity : _c, _d = _b.step, step = _d === void 0 ? 1 : _d, count = _b.count, float = _b.float, map = _b.map, filter = _b.filter;
                        index = 0;
                        extIndex = 0;
                        addStep = function () {
                            if (float)
                                return (start = add(start, step), start);
                            else
                                (start = start + step);
                        };
                        _e.label = 1;
                    case 1:
                        if (!((count && index < count) || (!count && start <= end))) return [3 /*break*/, 6];
                        if (filter && !filter(start, extIndex)) {
                            extIndex++;
                            addStep();
                            return [3 /*break*/, 1];
                        }
                        if (!map) return [3 /*break*/, 3];
                        return [4 /*yield*/, map(start, index)];
                    case 2:
                        _e.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, start];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        index++;
                        extIndex++;
                        addStep();
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        };
        return NumberRange;
    }(AbstractRange));

    var CharRange = /** @class */ (function (_super) {
        __extends(CharRange, _super);
        function CharRange(options) {
            return _super.call(this, options ||
                { start: 'A', end: 'Z', step: 1 }) || this;
        }
        CharRange.prototype[Symbol.iterator] = function () {
            var _a, start, _b, _c, end, _d, step, count, map, filter, index, extIndex, addStep;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.options.start, start = _a === void 0 ? 'A' : _a;
                        _b = this.options, _c = _b.end, end = _c === void 0 ? 'Z' : _c, _d = _b.step, step = _d === void 0 ? 1 : _d, count = _b.count, map = _b.map, filter = _b.filter;
                        index = 0;
                        extIndex = 0;
                        addStep = function () { return start = String.fromCodePoint(start.codePointAt(0) + step); };
                        _e.label = 1;
                    case 1:
                        if (!((count && index < count) || (!count && start <= end))) return [3 /*break*/, 6];
                        if (filter && !filter(start, extIndex)) {
                            extIndex++;
                            addStep();
                            return [3 /*break*/, 1];
                        }
                        if (!map) return [3 /*break*/, 3];
                        return [4 /*yield*/, map(start, index)];
                    case 2:
                        _e.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, start];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        index++;
                        extIndex++;
                        addStep();
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        };
        return CharRange;
    }(AbstractRange));

    var StringRange = /** @class */ (function (_super) {
        __extends(StringRange, _super);
        function StringRange(options) {
            var _this = _super.call(this, options) || this;
            _this.options.source = Array.from(_this.options.source);
            return _this;
        }
        StringRange.prototype[Symbol.iterator] = function () {
            var _a, start, _b, source, _c, end, _d, step, count, map, filter, index, extIndex, addStep;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.options.start, start = _a === void 0 ? 0 : _a;
                        _b = this.options, source = _b.source, _c = _b.end, end = _c === void 0 ? this.options.source.length : _c, _d = _b.step, step = _d === void 0 ? 1 : _d, count = _b.count, map = _b.map, filter = _b.filter;
                        index = 0;
                        extIndex = 0;
                        addStep = function () { return start += step; };
                        _e.label = 1;
                    case 1:
                        if (!((source[start] !== undefined) && ((count && index < count) || (!count && start <= end)))) return [3 /*break*/, 6];
                        if (filter && !filter(source[start], extIndex)) {
                            extIndex++;
                            addStep();
                            return [3 /*break*/, 1];
                        }
                        if (!map) return [3 /*break*/, 3];
                        return [4 /*yield*/, map(source[start], index)];
                    case 2:
                        _e.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, source[start]];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        index++;
                        extIndex++;
                        addStep();
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        };
        return StringRange;
    }(AbstractRange));

    var ColorRange = /** @class */ (function (_super) {
        __extends(ColorRange, _super);
        function ColorRange(options) {
            return _super.call(this, options ||
                { start: '#000000', end: '#FFFFFF', step: 1 }) || this;
        }
        ColorRange.prototype[Symbol.iterator] = function () {
            var _a, _b, start, _c, end, _d, _e, step, count, map, filter, index, extIndex, addStep;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = this.options, _b = _a.start, start = _b === void 0 ? '#000000' : _b, _c = _a.end, end = _c === void 0 ? '#FFFFFF' : _c;
                        _d = this.options, _e = _d.step, step = _e === void 0 ? 1 : _e, count = _d.count, map = _d.map, filter = _d.filter;
                        index = 0;
                        extIndex = 0;
                        start = start.toLowerCase();
                        end = end.toLowerCase();
                        addStep = function () {
                            var intStart = parseInt(start.slice(1), 16);
                            var hexStart = (intStart + step).toString(16);
                            var zerosBefore = '';
                            if (hexStart.length !== 6) {
                                zerosBefore = Array.from({ length: 6 - hexStart.length }, function () { return '0'; }).join('');
                            }
                            start = "#" + zerosBefore + hexStart;
                        };
                        _f.label = 1;
                    case 1:
                        if (!((count && index < count) || (!count && start <= end))) return [3 /*break*/, 6];
                        if (filter && !filter(start, extIndex)) {
                            extIndex++;
                            addStep();
                            return [3 /*break*/, 1];
                        }
                        if (!map) return [3 /*break*/, 3];
                        return [4 /*yield*/, map(start, index)];
                    case 2:
                        _f.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, start];
                    case 4:
                        _f.sent();
                        _f.label = 5;
                    case 5:
                        index++;
                        extIndex++;
                        addStep();
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        };
        return ColorRange;
    }(AbstractRange));

    var MillisecondRange = /** @class */ (function (_super) {
        __extends(MillisecondRange, _super);
        function MillisecondRange(options) {
            return _super.call(this, 'ms', options || { start: new Date(), end: Infinity, step: 1 }) || this;
        }
        return MillisecondRange;
    }(AbstractDateRange));

    var SecondRange = /** @class */ (function (_super) {
        __extends(SecondRange, _super);
        function SecondRange(options) {
            return _super.call(this, 's', options || { start: new Date(), end: Infinity, step: 1 }) || this;
        }
        return SecondRange;
    }(AbstractDateRange));

    var MinuteRange = /** @class */ (function (_super) {
        __extends(MinuteRange, _super);
        function MinuteRange(options) {
            return _super.call(this, 'm', options || { start: new Date(), end: Infinity, step: 1 }) || this;
        }
        return MinuteRange;
    }(AbstractDateRange));

    var HourRange$1 = /** @class */ (function (_super) {
        __extends(HourRange, _super);
        function HourRange(options) {
            return _super.call(this, 'h', options || { start: new Date(), end: Infinity, step: 1 }) || this;
        }
        return HourRange;
    }(AbstractDateRange));

    var HourRange = /** @class */ (function (_super) {
        __extends(HourRange, _super);
        function HourRange(options) {
            return _super.call(this, 'D', options || { start: new Date(), end: Infinity, step: 1 }) || this;
        }
        return HourRange;
    }(AbstractDateRange));

    var MonthRange = /** @class */ (function (_super) {
        __extends(MonthRange, _super);
        function MonthRange(options) {
            return _super.call(this, 'M', options || { start: new Date(), end: Infinity, step: 1 }) || this;
        }
        return MonthRange;
    }(AbstractDateRange));

    var YearRange = /** @class */ (function (_super) {
        __extends(YearRange, _super);
        function YearRange(options) {
            return _super.call(this, 'Y', options || { start: new Date(), end: Infinity, step: 1 }) || this;
        }
        return YearRange;
    }(AbstractDateRange));

    var MergeRange = /** @class */ (function (_super) {
        __extends(MergeRange, _super);
        function MergeRange(options) {
            return _super.call(this, options) || this;
        }
        MergeRange.prototype[Symbol.iterator] = function () {
            var _a, ranges, _b, step, count, map, filter, index, elementIndex, extIndex, rangeIndex, _c, _d, element, e_1_1;
            var e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = this.options, ranges = _a.ranges, _b = _a.step, step = _b === void 0 ? 1 : _b, count = _a.count, map = _a.map, filter = _a.filter;
                        index = 0;
                        elementIndex = 0;
                        extIndex = 1;
                        rangeIndex = 0;
                        _f.label = 1;
                    case 1:
                        if (!(rangeIndex < ranges.length)) return [3 /*break*/, 13];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 10, 11, 12]);
                        _c = (e_1 = void 0, __values(ranges[rangeIndex])), _d = _c.next();
                        _f.label = 3;
                    case 3:
                        if (!!_d.done) return [3 /*break*/, 9];
                        element = _d.value;
                        if (extIndex % step !== 0) {
                            extIndex++;
                            return [3 /*break*/, 8];
                        }
                        if (count && index == count)
                            return [2 /*return*/];
                        if (filter && !filter(element, elementIndex)) {
                            elementIndex++;
                            return [3 /*break*/, 8];
                        }
                        if (!map) return [3 /*break*/, 5];
                        return [4 /*yield*/, map(element, elementIndex)];
                    case 4:
                        _f.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, element];
                    case 6:
                        _f.sent();
                        _f.label = 7;
                    case 7:
                        extIndex++;
                        elementIndex++;
                        index++;
                        _f.label = 8;
                    case 8:
                        _d = _c.next();
                        return [3 /*break*/, 3];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        rangeIndex++;
                        return [3 /*break*/, 1];
                    case 13: return [2 /*return*/];
                }
            });
        };
        return MergeRange;
    }(AbstractRange));

    exports.AbstractDateRange = AbstractDateRange;
    exports.AbstractRange = AbstractRange;
    exports.AbstractRangeGenerator = AbstractRangeGenerator;
    exports.CharRange = CharRange;
    exports.ColorRange = ColorRange;
    exports.DayRange = HourRange;
    exports.HourRange = HourRange$1;
    exports.MergeRange = MergeRange;
    exports.MillisecondRange = MillisecondRange;
    exports.MinuteRange = MinuteRange;
    exports.MonthRange = MonthRange;
    exports.NumberRange = NumberRange;
    exports.SecondRange = SecondRange;
    exports.StringRange = StringRange;
    exports.YearRange = YearRange;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

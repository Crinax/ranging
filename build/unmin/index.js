(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ranging = {}));
}(this, (function (exports) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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

    var AbstractRange = /** @class */ (function () {
        function AbstractRange() {
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
        AbstractRange.prototype[Symbol.iterator] = function () {
            return {
                next: function () {
                    return { value: undefined, done: true };
                }
            };
        };
        return AbstractRange;
    }());

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
    function add(a, b) {
        var res = "" + (a + b);
        // Reliable absence of approximation error
        if (res.length < 16)
            return a + b;
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
            return a + b;
        // Cut exponent power from result, calculate it's length
        res = res.slice(0, (sA.length > sB.length ? sA.length : sB.length) + 1);
        var fractionLength = res.length - res.indexOf('.') - 2;
        if (res[res.length - 1] === '9') {
            // Round up the last number (9) from result
            var exponetialForm = res + "e" + fractionLength;
            var ceiledNumber = Math.ceil(Number(exponetialForm));
            exponetialForm = ceiledNumber + "e" + -fractionLength;
            return +(+(exponetialForm) + exponent);
        }
        return +(res + exponent);
    }
    var NumberRange = /** @class */ (function (_super) {
        __extends(NumberRange, _super);
        function NumberRange(options) {
            var _this = _super.call(this) || this;
            _this.options = __assign({ start: 0, end: Infinity, step: 1, float: false }, options);
            return _this;
        }
        Object.defineProperty(NumberRange.prototype, "sum", {
            get: function () {
                return this.reduce(add);
            },
            enumerable: false,
            configurable: true
        });
        NumberRange.prototype[Symbol.iterator] = function () {
            var start = this.options.start;
            var _a = this.options, end = _a.end, step = _a.step, count = _a.count, float = _a.float, map = _a.map, filter = _a.filter;
            var index = 0;
            return {
                next: function () {
                    if ((count && index < count) || (!count && start <= end)) {
                        var startInc = function () {
                            if (float) {
                                start = add(start, step);
                            }
                            else {
                                start += step;
                            }
                        };
                        if (index !== 0) {
                            startInc();
                        }
                        while (filter && !filter(start, index)) {
                            if (!count && start > end) {
                                return {
                                    value: undefined,
                                    done: true,
                                };
                            }
                            startInc();
                        }
                        if ((!count && start > end)) {
                            return {
                                value: undefined,
                                done: true,
                            };
                        }
                        var mappedValue = void 0;
                        if (map)
                            mappedValue = map(start, index);
                        index += 1;
                        return {
                            value: mappedValue || start,
                            done: false,
                        };
                    }
                    return {
                        value: undefined,
                        done: true,
                    };
                },
            };
        };
        return NumberRange;
    }(AbstractRange));

    var CharRange = /** @class */ (function (_super) {
        __extends(CharRange, _super);
        function CharRange(options) {
            var _this = _super.call(this) || this;
            _this.options = __assign({ start: 'A', end: 'Z', step: 1 }, options);
            return _this;
        }
        CharRange.prototype[Symbol.iterator] = function () {
            var start = this.options.start;
            var _a = this.options, end = _a.end, step = _a.step, count = _a.count, map = _a.map, filter = _a.filter;
            var index = 0;
            return {
                next: function () {
                    if ((count && index < count) || (!count && start <= end)) {
                        var addChar = function () {
                            start = String.fromCodePoint(start.codePointAt(0) + step);
                        };
                        if (index !== 0) {
                            addChar();
                        }
                        while (filter && !filter(start, index)) {
                            if (!count && start > end) {
                                return {
                                    value: undefined,
                                    done: true,
                                };
                            }
                            addChar();
                        }
                        if ((!count && start > end)) {
                            return {
                                value: undefined,
                                done: true,
                            };
                        }
                        var mappedValue = void 0;
                        if (map)
                            mappedValue = map(start, index);
                        index += 1;
                        return {
                            value: mappedValue || start,
                            done: false,
                        };
                    }
                    return {
                        value: undefined,
                        done: true,
                    };
                },
            };
        };
        return CharRange;
    }(AbstractRange));

    var StringRange = /** @class */ (function (_super) {
        __extends(StringRange, _super);
        function StringRange(options) {
            var _this = _super.call(this) || this;
            _this.options = __assign(__assign({ start: 0, end: options.source.length - 1, step: 1 }, options), { source: Array.from(options.source) });
            return _this;
        }
        StringRange.prototype[Symbol.iterator] = function () {
            var start = this.options.start;
            var _a = this.options, source = _a.source, end = _a.end, step = _a.step, count = _a.count, map = _a.map, filter = _a.filter;
            var index = 0;
            return {
                next: function () {
                    if (source[start] !== undefined) {
                        if ((count && index < count) || (!count && start <= end)) {
                            if (index !== 0) {
                                start += step;
                            }
                            while (filter && !filter(source[start], index)) {
                                if (!count && start > end) {
                                    return {
                                        value: undefined,
                                        done: true,
                                    };
                                }
                                start += step;
                            }
                            if (source[start] === undefined) {
                                return {
                                    value: undefined,
                                    done: true,
                                };
                            }
                            var mappedValue = void 0;
                            if (map)
                                mappedValue = map(source[start], index);
                            index += 1;
                            return {
                                value: mappedValue || source[start],
                                done: false,
                            };
                        }
                        return {
                            value: undefined,
                            done: true,
                        };
                    }
                    return {
                        value: undefined,
                        done: true,
                    };
                },
            };
        };
        return StringRange;
    }(AbstractRange));

    var ColorRange = /** @class */ (function (_super) {
        __extends(ColorRange, _super);
        function ColorRange(options) {
            var _this = _super.call(this) || this;
            _this.options = __assign({ start: '#000000', end: '#FFFFFF', step: 1 }, options);
            return _this;
        }
        ColorRange.prototype[Symbol.iterator] = function () {
            var _a = this.options, start = _a.start, end = _a.end;
            start = start.toLowerCase();
            end = end.toLowerCase();
            var _b = this.options, step = _b.step, count = _b.count, map = _b.map, filter = _b.filter;
            var index = 0;
            return {
                next: function () {
                    if ((count && index < count) || (!count && start <= end)) {
                        var addChar = function () {
                            var intStart = parseInt(start.slice(1), 16);
                            var hexStart = (intStart + step).toString(16);
                            var zerosBefore = '';
                            if (hexStart.length !== 6) {
                                zerosBefore = Array.from({ length: 6 - hexStart.length }, function () { return '0'; }).join('');
                            }
                            start = "#" + zerosBefore + hexStart;
                        };
                        if (index !== 0) {
                            addChar();
                        }
                        while (filter && !filter(start, index)) {
                            if (!count && start > end) {
                                return {
                                    value: undefined,
                                    done: true,
                                };
                            }
                            addChar();
                        }
                        if ((!count && start > end)) {
                            return {
                                value: undefined,
                                done: true,
                            };
                        }
                        var mappedValue = void 0;
                        if (map)
                            mappedValue = map(start, index);
                        index += 1;
                        return {
                            value: mappedValue || start,
                            done: false,
                        };
                    }
                    return {
                        value: undefined,
                        done: true,
                    };
                },
            };
        };
        return ColorRange;
    }(AbstractRange));

    var AbstractDateRange = /** @class */ (function (_super) {
        __extends(AbstractDateRange, _super);
        function AbstractDateRange(metric, options) {
            var _this = _super.call(this) || this;
            _this.metric = metric;
            _this.options = __assign({ start: new Date(), end: Infinity, step: 1 }, options);
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
            return this.dateGetters[this.metric]();
        };
        AbstractDateRange.prototype.setTime = function (start, value) {
            if (!this.dateSetters)
                this.setSearchMetricMap(start);
            return this.dateSetters[this.metric](value);
        };
        AbstractDateRange.prototype[Symbol.iterator] = function () {
            var start = this.options.start;
            var _a = this.options, end = _a.end, step = _a.step, count = _a.count, weekdays = _a.weekdays, leepYear = _a.leepYear, map = _a.map, filter = _a.filter;
            var index = 0;
            start = new Date(start);
            var self = this;
            return {
                next: function () {
                    if ((count && index < count) || (!count && start <= end)) {
                        if (index !== 0) {
                            self.setTime(start, self.getTime(start) + step);
                        }
                        while (filter && !filter(new Date(start), index)) {
                            if (!count && start >= end) {
                                return {
                                    value: undefined,
                                    done: true,
                                };
                            }
                            self.setTime(start, self.getTime(start) + step);
                        }
                        if (leepYear) {
                            var year_1 = start.getFullYear();
                            var isLeepYear = function () { return (year_1 % 400 === 0) || (year_1 % 100 !== 0 && year_1 % 4 === 0); };
                            while (!isLeepYear()) {
                                if (!count && start > end) {
                                    return {
                                        value: undefined,
                                        done: true,
                                    };
                                }
                                self.setTime(start, self.getTime(start) + step);
                                year_1 = start.getFullYear();
                            }
                        }
                        if (weekdays) {
                            var weekday = start.getDay();
                            while (weekdays.indexOf(weekday) === -1) {
                                if (!count && start > end) {
                                    return {
                                        value: undefined,
                                        done: true,
                                    };
                                }
                                self.setTime(start, self.getTime(start) + step);
                                weekday = start.getDay();
                            }
                        }
                        if ((!count && start > end)) {
                            return {
                                value: undefined,
                                done: true,
                            };
                        }
                        var mappedValue = void 0;
                        if (map)
                            mappedValue = map(new Date(start), index);
                        index += 1;
                        if (mappedValue)
                            mappedValue = new Date(mappedValue);
                        return {
                            value: mappedValue || new Date(start),
                            done: false,
                        };
                    }
                    return {
                        value: undefined,
                        done: true,
                    };
                },
            };
        };
        return AbstractDateRange;
    }(AbstractRange));

    var DayRange = /** @class */ (function (_super) {
        __extends(DayRange, _super);
        function DayRange(options) {
            return _super.call(this, 'D', options) || this;
        }
        return DayRange;
    }(AbstractDateRange));

    var HourRange = /** @class */ (function (_super) {
        __extends(HourRange, _super);
        function HourRange(options) {
            return _super.call(this, 'h', options) || this;
        }
        return HourRange;
    }(AbstractDateRange));

    var MinuteRange = /** @class */ (function (_super) {
        __extends(MinuteRange, _super);
        function MinuteRange(options) {
            return _super.call(this, 'm', options) || this;
        }
        return MinuteRange;
    }(AbstractDateRange));

    var MonthRange = /** @class */ (function (_super) {
        __extends(MonthRange, _super);
        function MonthRange(options) {
            return _super.call(this, 'M', options) || this;
        }
        return MonthRange;
    }(AbstractDateRange));

    var SecondRange = /** @class */ (function (_super) {
        __extends(SecondRange, _super);
        function SecondRange(options) {
            return _super.call(this, 's', options) || this;
        }
        return SecondRange;
    }(AbstractDateRange));

    var YearRange = /** @class */ (function (_super) {
        __extends(YearRange, _super);
        function YearRange(options) {
            return _super.call(this, 'Y', options) || this;
        }
        return YearRange;
    }(AbstractDateRange));

    var DateRange = /** @class */ (function (_super) {
        __extends(DateRange, _super);
        function DateRange(options) {
            return _super.call(this, 'ms', options) || this;
        }
        DateRange.second = function (options) {
            return new SecondRange(options);
        };
        DateRange.minute = function (options) {
            return new MinuteRange(options);
        };
        DateRange.hour = function (options) {
            return new HourRange(options);
        };
        DateRange.day = function (options) {
            return new DayRange(options);
        };
        DateRange.month = function (options) {
            return new MonthRange(options);
        };
        DateRange.year = function (options) {
            return new YearRange(options);
        };
        DateRange.prototype.second = function (options) {
            return new SecondRange(options);
        };
        DateRange.prototype.minute = function (options) {
            return new MinuteRange(options);
        };
        DateRange.prototype.hour = function (options) {
            return new HourRange(options);
        };
        DateRange.prototype.day = function (options) {
            return new DayRange(options);
        };
        DateRange.prototype.month = function (options) {
            return new MonthRange(options);
        };
        DateRange.prototype.year = function (options) {
            return new YearRange(options);
        };
        return DateRange;
    }(AbstractDateRange));

    var MergeRanges = /** @class */ (function (_super) {
        __extends(MergeRanges, _super);
        function MergeRanges(options) {
            var _this = _super.call(this) || this;
            _this.options = options;
            return _this;
        }
        MergeRanges.prototype[Symbol.iterator] = function () {
            var _a, ranges, _b, step, count, map, filter, elementIndex, extIndex, rangeIndex, _c, _d, element, e_1_1;
            var e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = this.options, ranges = _a.ranges, _b = _a.step, step = _b === void 0 ? 1 : _b, count = _a.count, map = _a.map, filter = _a.filter;
                        elementIndex = 0;
                        extIndex = 1;
                        rangeIndex = 0;
                        _f.label = 1;
                    case 1:
                        if (!(rangeIndex < ranges.length)) return [3 /*break*/, 14];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 11, 12, 13]);
                        _c = (e_1 = void 0, __values(ranges[rangeIndex])), _d = _c.next();
                        _f.label = 3;
                    case 3:
                        if (!!_d.done) return [3 /*break*/, 10];
                        element = _d.value;
                        if (!(extIndex % step !== 0)) return [3 /*break*/, 4];
                        extIndex++;
                        return [3 /*break*/, 9];
                    case 4:
                        if (filter) {
                            if (!filter(element, elementIndex - 1))
                                return [3 /*break*/, 9];
                        }
                        if (!map) return [3 /*break*/, 6];
                        return [4 /*yield*/, map(element, elementIndex)];
                    case 5:
                        _f.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, element];
                    case 7:
                        _f.sent();
                        _f.label = 8;
                    case 8:
                        elementIndex++;
                        extIndex++;
                        if (count && elementIndex == count) {
                            return [2 /*return*/, {
                                    value: undefined,
                                    done: true
                                }];
                        }
                        _f.label = 9;
                    case 9:
                        _d = _c.next();
                        return [3 /*break*/, 3];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 13:
                        rangeIndex += 1;
                        return [3 /*break*/, 1];
                    case 14: return [2 /*return*/];
                }
            });
        };
        return MergeRanges;
    }(AbstractRange));

    var Range = /** @class */ (function () {
        function Range() {
        }
        Range.number = function (options) {
            return new NumberRange(options);
        };
        Range.char = function (options) {
            return new CharRange(options);
        };
        Range.string = function (options) {
            return new StringRange(options);
        };
        Range.date = function (options) {
            return new DateRange(options);
        };
        Range.color = function (options) {
            return new ColorRange(options);
        };
        Range.merge = function (options) {
            return new MergeRanges(options);
        };
        Range.prototype.number = function (options) {
            return new NumberRange(options);
        };
        Range.prototype.char = function (options) {
            return new CharRange(options);
        };
        Range.prototype.string = function (options) {
            return new StringRange(options);
        };
        Range.prototype.date = function (options) {
            return new DateRange(options);
        };
        Range.prototype.color = function (options) {
            return new ColorRange(options);
        };
        Range.prototype.merge = function (options) {
            return new MergeRanges(options);
        };
        return Range;
    }());

    exports.CharRange = CharRange;
    exports.ColorRange = ColorRange;
    exports.DateRange = DateRange;
    exports.DayRange = DayRange;
    exports.HourRange = HourRange;
    exports.MergeRanges = MergeRanges;
    exports.MinuteRange = MinuteRange;
    exports.MonthRange = MonthRange;
    exports.NumberRange = NumberRange;
    exports.Range = Range;
    exports.SecondRange = SecondRange;
    exports.StringRange = StringRange;
    exports.YearRange = YearRange;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

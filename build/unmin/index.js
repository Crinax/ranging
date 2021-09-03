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

    var AbstractRange = /** @class */ (function () {
        function AbstractRange() {
        }
        AbstractRange.prototype.end = function (value) {
            this.options.end = value;
            return this;
        };
        AbstractRange.prototype.start = function (value) {
            this.options.start = value;
            return this;
        };
        AbstractRange.prototype.step = function (value) {
            this.options.step = value;
            return this;
        };
        AbstractRange.prototype.count = function (value) {
            this.options.count = value;
            return this;
        };
        AbstractRange.prototype.map = function (f) {
            this.options.map = f;
            return this;
        };
        AbstractRange.prototype.filter = function (f) {
            this.options.filter = f;
            return this;
        };
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
        NumberRange.prototype.float = function (value) {
            this.options.float = value;
            return this;
        };
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
        StringRange.prototype.source = function (source) {
            this.options.source = Array.from(source);
            return this;
        };
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
        AbstractDateRange.prototype.weekdays = function (value) {
            this.options.weekdays = value;
            return this;
        };
        AbstractDateRange.prototype.leepYear = function (value) {
            this.options.leepYear = value;
            return this;
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
        /* static color(options: types.CharRangeOptionsT) {
          
        } */
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
        return Range;
    }());

    exports.CharRange = CharRange;
    exports.DateRange = DateRange;
    exports.DayRange = DayRange;
    exports.HourRange = HourRange;
    exports.MinuteRange = MinuteRange;
    exports.MonthRange = MonthRange;
    exports.NumberRange = NumberRange;
    exports.Range = Range;
    exports.SecondRange = SecondRange;
    exports.StringRange = StringRange;
    exports.YearRange = YearRange;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
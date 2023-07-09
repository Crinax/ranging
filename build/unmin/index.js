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

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    var clamp = function (inp, min, max) { return inp > max ? max : inp < min ? min : inp; };
    function getRandomNumber(min, max, isFloat) {
        if (isFloat) {
            var rand = min + Math.random() * (max + 1 - min);
            return clamp(rand, min, max + Number.MIN_VALUE);
        }
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    var RangeGenerator = /** @class */ (function () {
        function RangeGenerator() {
        }
        return RangeGenerator;
    }());

    var Range = /** @class */ (function (_super) {
        __extends(Range, _super);
        function Range() {
            return _super.call(this) || this;
        }
        Range.prototype.filter = function (condition) {
            return new FilterRange(this, condition);
        };
        Range.prototype.map = function (mapper) {
            return new MapRange(this, mapper);
        };
        Range.prototype.take = function (count) {
            return new TakeRange(this, count);
        };
        Range.prototype.from = function (condition) {
            return new FromRange(this, condition);
        };
        Range.prototype.to = function (condition) {
            return new ToRange(this, condition);
        };
        Range.prototype.find = function (condition) {
            return new FindRange(this, condition);
        };
        Range.prototype.reduce = function (reducer, start) {
            if (start === void 0) { start = 0; }
            return new ReduceRange(this, reducer, start !== null && start !== void 0 ? start : 0);
        };
        Range.prototype.count = function () {
            return new CountRange(this);
        };
        Range.prototype.combine = function (range) {
            return new CombineRange(this, range);
        };
        Range.prototype.shuffle = function (picking) {
            if (picking === void 0) { picking = 5; }
            return new ShuffleRange(this, picking);
        };
        Range.prototype.groupBy = function (count) {
            return new GroupRange(this, count);
        };
        Range.prototype.collect = function () {
            var it = this[Symbol.iterator]();
            var item = it.next();
            var result = [];
            while (!item.done) {
                result.push(item.value);
                item = it.next();
            }
            return result;
        };
        return Range;
    }(RangeGenerator));
    var GroupRange = /** @class */ (function (_super) {
        __extends(GroupRange, _super);
        function GroupRange(range, _count) {
            var _this = _super.call(this) || this;
            _this._count = _count;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        GroupRange.prototype[Symbol.iterator] = function () {
            var group, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        group = [];
                        item = this._it.next();
                        _a.label = 1;
                    case 1:
                        if (!!item.done) return [3 /*break*/, 3];
                        while (group.length < this._count) {
                            if (item.done) {
                                break;
                            }
                            group.push(item.value);
                            item = this._it.next();
                        }
                        return [4 /*yield*/, group];
                    case 2:
                        _a.sent();
                        group = [];
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return GroupRange;
    }(Range));
    var ShuffleRange = /** @class */ (function (_super) {
        __extends(ShuffleRange, _super);
        function ShuffleRange(range, _picking) {
            if (_picking === void 0) { _picking = 5; }
            var _this = _super.call(this) || this;
            _this._picking = _picking;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        ShuffleRange.prototype[Symbol.iterator] = function () {
            var item, arrShuffle, i, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        arrShuffle = [];
                        for (i = 0; i < this._picking; i++) {
                            if (item.done) {
                                break;
                            }
                            arrShuffle.push(item.value);
                            item = this._it.next();
                        }
                        _a.label = 1;
                    case 1:
                        if (!(arrShuffle.length >= 1)) return [3 /*break*/, 3];
                        index = getRandomNumber(0, arrShuffle.length - 1, false);
                        return [4 /*yield*/, arrShuffle.splice(index, 1)[0]];
                    case 2:
                        _a.sent();
                        if (!item.done) {
                            arrShuffle.push(item.value);
                        }
                        item = this._it.next();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return ShuffleRange;
    }(Range));
    var CombineRange = /** @class */ (function (_super) {
        __extends(CombineRange, _super);
        function CombineRange(range1, range2) {
            var _this = _super.call(this) || this;
            _this._it1 = range1[Symbol.iterator]();
            _this._it2 = range2[Symbol.iterator]();
            return _this;
        }
        CombineRange.prototype[Symbol.iterator] = function () {
            var item1, item2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item1 = this._it1.next();
                        item2 = this._it2.next();
                        _a.label = 1;
                    case 1:
                        if (!!(item1.done || item2.done)) return [3 /*break*/, 3];
                        return [4 /*yield*/, [item1.value, item2.value]];
                    case 2:
                        _a.sent();
                        item1 = this._it1.next();
                        item2 = this._it2.next();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return CombineRange;
    }(Range));
    var CountRange = /** @class */ (function (_super) {
        __extends(CountRange, _super);
        function CountRange(range) {
            var _this = _super.call(this) || this;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        CountRange.prototype[Symbol.iterator] = function () {
            var item, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        result = 0;
                        while (!item.done) {
                            result++;
                            item = this._it.next();
                        }
                        return [4 /*yield*/, result];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        };
        return CountRange;
    }(Range));
    var ReduceRange = /** @class */ (function (_super) {
        __extends(ReduceRange, _super);
        function ReduceRange(range, _reducer, _start) {
            if (_start === void 0) { _start = 0; }
            var _this = _super.call(this) || this;
            _this._reducer = _reducer;
            _this._start = _start;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        ReduceRange.prototype[Symbol.iterator] = function () {
            var item, index, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        index = 0;
                        if (item.done) {
                            return [2 /*return*/];
                        }
                        result = this._start;
                        while (!item.done) {
                            result = this._reducer(result, item.value, index);
                            item = this._it.next();
                        }
                        return [4 /*yield*/, result];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        };
        return ReduceRange;
    }(Range));
    var FilterRange = /** @class */ (function (_super) {
        __extends(FilterRange, _super);
        function FilterRange(range, _condition) {
            var _this = _super.call(this) || this;
            _this._condition = _condition;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        FilterRange.prototype[Symbol.iterator] = function () {
            var item, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!!item.done) return [3 /*break*/, 4];
                        if (!this._condition(item.value, index)) return [3 /*break*/, 3];
                        return [4 /*yield*/, item.value];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        item = this._it.next();
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        };
        return FilterRange;
    }(Range));
    var FindRange = /** @class */ (function (_super) {
        __extends(FindRange, _super);
        function FindRange(range, _condition) {
            var _this = _super.call(this) || this;
            _this._condition = _condition;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        FindRange.prototype[Symbol.iterator] = function () {
            var item, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!!item.done) return [3 /*break*/, 4];
                        if (!this._condition(item.value, index)) return [3 /*break*/, 3];
                        return [4 /*yield*/, item.value];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        item = this._it.next();
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        };
        return FindRange;
    }(Range));
    var FromRange = /** @class */ (function (_super) {
        __extends(FromRange, _super);
        function FromRange(range, _condition) {
            var _this = _super.call(this) || this;
            _this._condition = _condition;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        FromRange.prototype[Symbol.iterator] = function () {
            var item, wasFound, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        wasFound = false;
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!!item.done) return [3 /*break*/, 4];
                        if (!this._condition(item.value, index)) {
                            return [3 /*break*/, 1];
                        }
                        if (!wasFound) {
                            wasFound = true;
                        }
                        if (!wasFound) return [3 /*break*/, 3];
                        return [4 /*yield*/, item.value];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        item = this._it.next();
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        };
        return FromRange;
    }(Range));
    var MapRange = /** @class */ (function (_super) {
        __extends(MapRange, _super);
        function MapRange(range, _mapper) {
            var _this = _super.call(this) || this;
            _this._mapper = _mapper;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        MapRange.prototype[Symbol.iterator] = function () {
            var item, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!!item.done) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._mapper(item.value, index)];
                    case 2:
                        _a.sent();
                        item = this._it.next();
                        index++;
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return MapRange;
    }(Range));
    var TakeRange = /** @class */ (function (_super) {
        __extends(TakeRange, _super);
        function TakeRange(range, _count) {
            var _this = _super.call(this) || this;
            _this._count = _count;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        TakeRange.prototype[Symbol.iterator] = function () {
            var item, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this._count)) return [3 /*break*/, 4];
                        if (item.done) {
                            return [3 /*break*/, 4];
                        }
                        return [4 /*yield*/, item.value];
                    case 2:
                        _a.sent();
                        item = this._it.next();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        };
        return TakeRange;
    }(Range));
    var ToRange = /** @class */ (function (_super) {
        __extends(ToRange, _super);
        function ToRange(range, _condition) {
            var _this = _super.call(this) || this;
            _this._condition = _condition;
            _this._it = range[Symbol.iterator]();
            return _this;
        }
        ToRange.prototype[Symbol.iterator] = function () {
            var item, wasEnd, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        wasEnd = false;
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!!item.done) return [3 /*break*/, 3];
                        if (wasEnd) {
                            return [3 /*break*/, 3];
                        }
                        return [4 /*yield*/, item.value];
                    case 2:
                        _a.sent();
                        wasEnd = this._condition(item.value, index);
                        item = this._it.next();
                        index++;
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return ToRange;
    }(Range));

    var WalkerRange = /** @class */ (function (_super) {
        __extends(WalkerRange, _super);
        function WalkerRange(iterable) {
            var _this = _super.call(this) || this;
            _this._it = iterable[Symbol.iterator]();
            return _this;
        }
        WalkerRange.prototype[Symbol.iterator] = function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = this._it.next();
                        _a.label = 1;
                    case 1:
                        if (!!item.done) return [3 /*break*/, 3];
                        return [4 /*yield*/, item.value];
                    case 2:
                        _a.sent();
                        item = this._it.next();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return WalkerRange;
    }(Range));

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

    var NumberRange = /** @class */ (function (_super) {
        __extends(NumberRange, _super);
        function NumberRange(_start, _end, _step, _isFloat) {
            if (_start === void 0) { _start = 0; }
            if (_end === void 0) { _end = Infinity; }
            if (_step === void 0) { _step = 1; }
            if (_isFloat === void 0) { _isFloat = false; }
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            _this._step = _step;
            _this._isFloat = _isFloat;
            return _this;
        }
        NumberRange.prototype[Symbol.iterator] = function () {
            var _add, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _add = this._isFloat
                            ? function (a, b) { return add(a, b); }
                            : function (a, b) { return a + b; };
                        i = this._start;
                        _a.label = 1;
                    case 1:
                        if (!(i <= this._end)) return [3 /*break*/, 4];
                        return [4 /*yield*/, i];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i = _add(i, this._step);
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        };
        return NumberRange;
    }(Range));

    var MillisecondRange = /** @class */ (function (_super) {
        __extends(MillisecondRange, _super);
        function MillisecondRange(_start, _end, _step) {
            if (_start === void 0) { _start = new Date(); }
            if (_end === void 0) { _end = Infinity; }
            if (_step === void 0) { _step = 1; }
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            _this._step = _step;
            return _this;
        }
        MillisecondRange.prototype[Symbol.iterator] = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._start < this._end)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Date(this._start)];
                    case 1:
                        _a.sent();
                        this._start.setTime(this._start.getTime() + this._step);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        };
        return MillisecondRange;
    }(Range));

    var SecondRange = /** @class */ (function (_super) {
        __extends(SecondRange, _super);
        function SecondRange(_start, _end, _step) {
            if (_start === void 0) { _start = new Date(); }
            if (_end === void 0) { _end = Infinity; }
            if (_step === void 0) { _step = 1; }
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            _this._step = _step;
            return _this;
        }
        SecondRange.prototype[Symbol.iterator] = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._start < this._end)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Date(this._start)];
                    case 1:
                        _a.sent();
                        this._start.setSeconds(this._start.getSeconds() + this._step);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        };
        return SecondRange;
    }(Range));

    var MinuteRange = /** @class */ (function (_super) {
        __extends(MinuteRange, _super);
        function MinuteRange(_start, _end, _step) {
            if (_start === void 0) { _start = new Date(); }
            if (_end === void 0) { _end = Infinity; }
            if (_step === void 0) { _step = 1; }
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            _this._step = _step;
            return _this;
        }
        MinuteRange.prototype[Symbol.iterator] = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._start < this._end)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Date(this._start)];
                    case 1:
                        _a.sent();
                        this._start.setMinutes(this._start.getMinutes() + this._step);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        };
        return MinuteRange;
    }(Range));

    var HourRange = /** @class */ (function (_super) {
        __extends(HourRange, _super);
        function HourRange(_start, _end, _step) {
            if (_start === void 0) { _start = new Date(); }
            if (_end === void 0) { _end = Infinity; }
            if (_step === void 0) { _step = 1; }
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            _this._step = _step;
            return _this;
        }
        HourRange.prototype[Symbol.iterator] = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._start < this._end)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Date(this._start)];
                    case 1:
                        _a.sent();
                        this._start.setHours(this._start.getHours() + this._step);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        };
        return HourRange;
    }(Range));

    var DayRange = /** @class */ (function (_super) {
        __extends(DayRange, _super);
        function DayRange(_start, _end, _step) {
            if (_start === void 0) { _start = new Date(); }
            if (_end === void 0) { _end = Infinity; }
            if (_step === void 0) { _step = 1; }
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            _this._step = _step;
            return _this;
        }
        DayRange.prototype[Symbol.iterator] = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._start < this._end)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Date(this._start)];
                    case 1:
                        _a.sent();
                        this._start.setDate(this._start.getDate() + this._step);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        };
        return DayRange;
    }(Range));

    var MonthRange = /** @class */ (function (_super) {
        __extends(MonthRange, _super);
        function MonthRange(_start, _end, _step) {
            if (_start === void 0) { _start = new Date(); }
            if (_end === void 0) { _end = Infinity; }
            if (_step === void 0) { _step = 1; }
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            _this._step = _step;
            return _this;
        }
        MonthRange.prototype[Symbol.iterator] = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._start < this._end)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Date(this._start)];
                    case 1:
                        _a.sent();
                        this._start.setMonth(this._start.getMonth() + this._step);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        };
        return MonthRange;
    }(Range));

    var YearRange = /** @class */ (function (_super) {
        __extends(YearRange, _super);
        function YearRange(_start, _end, _step) {
            if (_start === void 0) { _start = new Date(); }
            if (_end === void 0) { _end = Infinity; }
            if (_step === void 0) { _step = 1; }
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            _this._step = _step;
            return _this;
        }
        YearRange.prototype[Symbol.iterator] = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._start < this._end)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Date(this._start)];
                    case 1:
                        _a.sent();
                        this._start.setFullYear(this._start.getFullYear() + this._step);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        };
        return YearRange;
    }(Range));

    var RandomNumberRange = /** @class */ (function (_super) {
        __extends(RandomNumberRange, _super);
        function RandomNumberRange(_start, _end, _isFloat) {
            if (_isFloat === void 0) { _isFloat = false; }
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            _this._isFloat = _isFloat;
            return _this;
        }
        RandomNumberRange.prototype[Symbol.iterator] = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, getRandomNumber(this._start, this._end, this._isFloat)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        };
        return RandomNumberRange;
    }(Range));

    var RandomDateRange = /** @class */ (function (_super) {
        __extends(RandomDateRange, _super);
        function RandomDateRange(_start, _end) {
            var _this = _super.call(this) || this;
            _this._start = _start;
            _this._end = _end;
            return _this;
        }
        RandomDateRange.prototype[Symbol.iterator] = function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, new Date(getRandomNumber(this._start.getTime(), this._end.getTime(), false))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        };
        return RandomDateRange;
    }(Range));

    var ZipRange = /** @class */ (function (_super) {
        __extends(ZipRange, _super);
        function ZipRange(keyRange, valueRange) {
            var _this = _super.call(this) || this;
            _this._itKey = keyRange[Symbol.iterator]();
            _this._itValue = valueRange[Symbol.iterator]();
            return _this;
        }
        ZipRange.prototype[Symbol.iterator] = function () {
            var key, value;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        key = this._itKey.next();
                        value = this._itValue.next();
                        _b.label = 1;
                    case 1:
                        if (!!(key.done || value.done)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (_a = {}, _a[key.value] = value.value, _a)];
                    case 2:
                        _b.sent();
                        key = this._itKey.next();
                        value = this._itValue.next();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return ZipRange;
    }(Range));

    var MergeRange = /** @class */ (function (_super) {
        __extends(MergeRange, _super);
        function MergeRange(_rule, ranges) {
            var _this = _super.call(this) || this;
            _this._rule = _rule;
            _this._its = [];
            var rangeIt = ranges[Symbol.iterator]();
            var range = rangeIt.next();
            while (!range.done) {
                _this._its.push(range.value[Symbol.iterator]());
                range = rangeIt.next();
            }
            return _this;
        }
        MergeRange.prototype[Symbol.iterator] = function () {
            var valueIndex, index, nextValueUsed, stopUsed, nextValueCached, nextUseCached, indexesInsideRanges, rangeNumber, _nextValue, nextValue, switchTo, stop, itValue, _a, item, allFinished;
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        valueIndex = 0;
                        index = 0;
                        nextValueUsed = false;
                        stopUsed = false;
                        nextUseCached = false;
                        indexesInsideRanges = Array.from({ length: this._its.length }, function () { return 0; });
                        rangeNumber = function () { return index; };
                        _nextValue = function (item) {
                            if (!item.done) {
                                return [item.value, false];
                            }
                            var startIndex = index;
                            var allIsOver = false;
                            var result = _this._its[index].next();
                            while (result.done) {
                                index++;
                                if (index >= _this._its.length) {
                                    index = 0;
                                }
                                if (index === startIndex) {
                                    allIsOver = true;
                                    break;
                                }
                                result = _this._its[index].next();
                            }
                            indexesInsideRanges[index]++;
                            allFinished = allIsOver;
                            if (allIsOver) {
                                return [void 0, true];
                            }
                            return [result.value, false];
                        };
                        nextValue = function (value) { return function () {
                            if (nextValueUsed) {
                                throw new ReferenceError('Cannot be used more than once in iteration');
                            }
                            var _a = __read(_nextValue(value), 2), item = _a[0], allIsOver = _a[1];
                            if (allIsOver) {
                                throw new ReferenceError('All ranges are over');
                            }
                            nextUseCached = true;
                            nextValueCached = item;
                            return nextValueCached;
                        }; };
                        switchTo = function (value) {
                            if (value < 0 || value >= _this._its.length) {
                                throw new TypeError('You cannot set the range number, more than the number of ranges, or less than zero');
                            }
                            index = value;
                        };
                        stop = function () { return (stopUsed = true); };
                        itValue = this._its[index].next();
                        _a = __read(_nextValue(itValue), 2), item = _a[0], allFinished = _a[1];
                        _c.label = 1;
                    case 1:
                        if (!!(allFinished || stopUsed)) return [3 /*break*/, 6];
                        this._rule(item, valueIndex, {
                            rangeNumber: rangeNumber,
                            nextValue: nextValue(itValue),
                            switchTo: switchTo,
                            stop: stop,
                        });
                        if (!nextUseCached) return [3 /*break*/, 3];
                        nextUseCached = false;
                        return [4 /*yield*/, nextValueCached];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, item];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        itValue = this._its[index].next();
                        _b = __read(_nextValue(itValue), 2), item = _b[0], allFinished = _b[1];
                        valueIndex++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        };
        return MergeRange;
    }(Range));

    var isLeapYear = function (val) {
        var year = val.getFullYear();
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
    };
    var hasWeekday = function () {
        var weekdays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            weekdays[_i] = arguments[_i];
        }
        return function (val) { return weekdays.includes(val.getDay()); };
    };
    var keepUnique = function () {
        var _store = [];
        return function (value) { return !_store.includes(value) && (_store.push(value), true); };
    };

    var sum = function (acc, value) { return add(acc, value); };

    exports.DayRange = DayRange;
    exports.HourRange = HourRange;
    exports.MergeRange = MergeRange;
    exports.MillisecondRange = MillisecondRange;
    exports.MinuteRange = MinuteRange;
    exports.MonthRange = MonthRange;
    exports.NumberRange = NumberRange;
    exports.RandomDateRange = RandomDateRange;
    exports.RandomNumberRange = RandomNumberRange;
    exports.Range = Range;
    exports.RangeGenerator = RangeGenerator;
    exports.SecondRange = SecondRange;
    exports.WalkerRange = WalkerRange;
    exports.YearRange = YearRange;
    exports.ZipRange = ZipRange;
    exports.hasWeekday = hasWeekday;
    exports.isLeapYear = isLeapYear;
    exports.keepUnique = keepUnique;
    exports.sum = sum;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

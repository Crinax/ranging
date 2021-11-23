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
        var _a, start, _b, _c, end, _d, step, count, float, map, filter, index, addStep;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = this.options.start, start = _a === void 0 ? 0 : _a;
                    _b = this.options, _c = _b.end, end = _c === void 0 ? Infinity : _c, _d = _b.step, step = _d === void 0 ? 1 : _d, count = _b.count, float = _b.float, map = _b.map, filter = _b.filter;
                    index = 0;
                    addStep = function () {
                        if (float)
                            return (start = add(start, step), start);
                        else
                            (start = start + step);
                    };
                    _e.label = 1;
                case 1:
                    if (!((count && index < count) || (!count && start <= end))) return [3 /*break*/, 6];
                    if (filter && !filter(start, index)) {
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
                    index += 1;
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
        var _a, start, _b, _c, end, _d, step, count, map, filter, index, addStep;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = this.options.start, start = _a === void 0 ? 'A' : _a;
                    _b = this.options, _c = _b.end, end = _c === void 0 ? 'Z' : _c, _d = _b.step, step = _d === void 0 ? 1 : _d, count = _b.count, map = _b.map, filter = _b.filter;
                    index = 0;
                    addStep = function () { return start = String.fromCodePoint(start.codePointAt(0) + step); };
                    _e.label = 1;
                case 1:
                    if (!((count && index < count) || (!count && start <= end))) return [3 /*break*/, 6];
                    if (filter && !filter(start, index)) {
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
                    index += 1;
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
        var _a, start, _b, source, _c, end, _d, step, count, map, filter, index, addStep;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = this.options.start, start = _a === void 0 ? 0 : _a;
                    _b = this.options, source = _b.source, _c = _b.end, end = _c === void 0 ? this.options.source.length : _c, _d = _b.step, step = _d === void 0 ? 1 : _d, count = _b.count, map = _b.map, filter = _b.filter;
                    index = 0;
                    addStep = function () { return start += step; };
                    _e.label = 1;
                case 1:
                    if (!((source[start] !== undefined) && ((count && index < count) || (!count && start <= end)))) return [3 /*break*/, 6];
                    if (filter && !filter(source[start], index)) {
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
                    index += 1;
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
        var _a, _b, start, _c, end, _d, _e, step, count, map, filter, index, addStep;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _a = this.options, _b = _a.start, start = _b === void 0 ? '#000000' : _b, _c = _a.end, end = _c === void 0 ? '#FFFFFF' : _c;
                    _d = this.options, _e = _d.step, step = _e === void 0 ? 1 : _e, count = _d.count, map = _d.map, filter = _d.filter;
                    index = 0;
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
                    if (filter && !filter(start, index)) {
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
                    index += 1;
                    addStep();
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    };
    return ColorRange;
}(AbstractRange));

export { AbstractRange, AbstractRangeGenerator, CharRange, ColorRange, NumberRange, StringRange };

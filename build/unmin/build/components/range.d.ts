import * as types from './types';
import { NumberRange, CharRange, StringRange, ColorRange, DateRange, DayRange, MonthRange, YearRange, SecondRange, MinuteRange, HourRange } from './ranges';
declare class Range {
    static number(options: types.NumberRangeOptionsT): NumberRange;
    static char(options: types.CharRangeOptionsT): CharRange;
    static string(options: types.StringRangeOptionsT): StringRange;
    static date(options: types.DateRangeOptionsT): DateRange;
    static color(options: types.ColorRangeOptionsT): ColorRange;
    number(options: types.NumberRangeOptionsT): NumberRange;
    char(options: types.CharRangeOptionsT): CharRange;
    string(options: types.StringRangeOptionsT): StringRange;
    date(options: types.DateRangeOptionsT): DateRange;
    color(options: types.ColorRangeOptionsT): ColorRange;
}
export { Range, NumberRange, CharRange, StringRange, ColorRange, DateRange, DayRange, MonthRange, YearRange, SecondRange, MinuteRange, HourRange, };

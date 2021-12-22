import * as types from './types';
import { NumberRange, newNumberRange, CharRange, StringRange, ColorRange, DateRange, DayRange, MonthRange, YearRange, SecondRange, MinuteRange, HourRange, MergeRanges, ZipRanges } from './ranges';
declare class Range {
    static number(options?: types.NumberRangeOptionsT): NumberRange;
    static char(options?: types.CharRangeOptionsT): CharRange;
    static string(options: types.StringRangeOptionsT): StringRange;
    static date(options?: types.DateRangeOptionsT): DateRange;
    static color(options?: types.ColorRangeOptionsT): ColorRange;
    static merge(options: types.MergeRangesOptionsT): MergeRanges;
    static zip(options: types.ZipRangesOptionsT): ZipRanges;
    number(options?: types.NumberRangeOptionsT): NumberRange;
    char(options?: types.CharRangeOptionsT): CharRange;
    string(options: types.StringRangeOptionsT): StringRange;
    date(options?: types.DateRangeOptionsT): DateRange;
    color(options?: types.ColorRangeOptionsT): ColorRange;
    merge(options: types.MergeRangesOptionsT): MergeRanges;
    zip(options: types.ZipRangesOptionsT): ZipRanges;
}
export { Range, NumberRange, newNumberRange, CharRange, StringRange, ColorRange, DateRange, DayRange, MonthRange, YearRange, SecondRange, MinuteRange, HourRange, MergeRanges, ZipRanges };

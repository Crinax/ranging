import * as types from './types';
import {
  NumberRange,
  newNumberRange,
  CharRange,
  StringRange,
  ColorRange,
  DateRange,
  DayRange,
  MonthRange,
  YearRange,
  SecondRange,
  MinuteRange,
  HourRange,
  MergeRanges,
  ZipRanges,
} from './ranges';

class Range {
  static number(options?: types.NumberRangeOptionsT) {
    return new NumberRange(options);
  }

  static char(options?: types.CharRangeOptionsT) {
    return new CharRange(options);
  }

  static string(options: types.StringRangeOptionsT) {
    return new StringRange(options);
  }

  static date(options?: types.DateRangeOptionsT) {
    return new DateRange(options);
  }

  static color(options?: types.ColorRangeOptionsT) {
    return new ColorRange(options);
  }

  static merge(options: types.MergeRangesOptionsT) {
    return new MergeRanges(options);
  }

  static zip(options: types.ZipRangesOptionsT) {
    return new ZipRanges(options);
  }

  number(options?: types.NumberRangeOptionsT) {
    return new NumberRange(options);
  }

  char(options?: types.CharRangeOptionsT) {
    return new CharRange(options);
  }

  string(options: types.StringRangeOptionsT) {
    return new StringRange(options);
  }

  date(options?: types.DateRangeOptionsT) {
    return new DateRange(options);
  }

  color(options?: types.ColorRangeOptionsT) {
    return new ColorRange(options)
  }

  merge(options: types.MergeRangesOptionsT) {
    return new MergeRanges(options);
  }

  zip(options: types.ZipRangesOptionsT) {
    return new ZipRanges(options);
  }
}

export {
  Range,
  NumberRange,
  newNumberRange,
  CharRange,
  StringRange,
  ColorRange,
  DateRange,
  DayRange,
  MonthRange,
  YearRange,
  SecondRange,
  MinuteRange,
  HourRange,
  MergeRanges,
  ZipRanges
}

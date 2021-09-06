import * as types from './types';
import {
  NumberRange,
  CharRange,
  StringRange,
  DateRange,
  DayRange,
  MonthRange,
  YearRange,
  SecondRange,
  MinuteRange,
  HourRange,
} from './ranges';

class Range {
  static number(options: types.NumberRangeOptionsT) {
    return new NumberRange(options);
  }

  static char(options: types.CharRangeOptionsT) {
    return new CharRange(options);
  }

  static string(options: types.StringRangeOptionsT) {
    return new StringRange(options);
  }

  static date(options: types.DateRangeOptionsT) {
    return new DateRange(options);
  }

  /* static color(options: types.CharRangeOptionsT) {
    
  } */

  number(options: types.NumberRangeOptionsT) {
    return new NumberRange(options);
  }

  char(options: types.CharRangeOptionsT) {
    return new CharRange(options);
  }

  string(options: types.StringRangeOptionsT) {
    return new StringRange(options);
  }

  date(options: types.DateRangeOptionsT) {
    return new DateRange(options);
  }

  /* color(options: types.CharRangeOptionsT) {
    
  } */
}

export {
  Range,
  NumberRange,
  CharRange,
  StringRange,
  DateRange,
  DayRange,
  MonthRange,
  YearRange,
  SecondRange,
  MinuteRange,
  HourRange,
}

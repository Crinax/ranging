import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from '../AbstractDateRange';
import DayRange from "./day";
import HourRange from "./hour";
import MinuteRange from "./minute";
import MonthRange from "./month";
import SecondRange from "./second";
import YearRange from "./year";

class DateRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super('ms', options);
  }

  static second(options?: DateRangeOptionsT): SecondRange {
    return new SecondRange(options);
  }

  static minute(options?: DateRangeOptionsT): MinuteRange {
    return new MinuteRange(options);
  }

  static hour(options?: DateRangeOptionsT): HourRange {
    return new HourRange(options);
  }

  static day(options?: DateRangeOptionsT): DayRange {
    return new DayRange(options);
  }

  static month(options?: DateRangeOptionsT): MonthRange {
    return new MonthRange(options);
  }

  static year(options?: DateRangeOptionsT): YearRange {
    return new YearRange(options);
  }

  second(options?: DateRangeOptionsT): SecondRange {
    return new SecondRange(options);
  }

  minute(options?: DateRangeOptionsT): MinuteRange {
    return new MinuteRange(options);
  }

  hour(options?: DateRangeOptionsT): HourRange {
    return new HourRange(options);
  }

  day(options?: DateRangeOptionsT): DayRange {
    return new DayRange(options);
  }

  month(options?: DateRangeOptionsT): MonthRange {
    return new MonthRange(options);
  }

  year(options?: DateRangeOptionsT): YearRange {
    return new YearRange(options);
  }
}

export {
  DateRange,
  DayRange,
  MonthRange,
  YearRange,
  SecondRange,
  MinuteRange,
  HourRange,
}
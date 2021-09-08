import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from '../abstractDateRange';
import DayRange from "./day";
import HourRange from "./hour";
import MinuteRange from "./minute";
import MonthRange from "./month";
import SecondRange from "./second";
import YearRange from "./year";
declare class DateRange extends AbstractDateRange {
    constructor(options: DateRangeOptionsT);
    static second(options: DateRangeOptionsT): SecondRange;
    static minute(options: DateRangeOptionsT): MinuteRange;
    static hour(options: DateRangeOptionsT): HourRange;
    static day(options: DateRangeOptionsT): DayRange;
    static month(options: DateRangeOptionsT): MonthRange;
    static year(options: DateRangeOptionsT): YearRange;
    second(options: DateRangeOptionsT): SecondRange;
    minute(options: DateRangeOptionsT): MinuteRange;
    hour(options: DateRangeOptionsT): HourRange;
    day(options: DateRangeOptionsT): DayRange;
    month(options: DateRangeOptionsT): MonthRange;
    year(options: DateRangeOptionsT): YearRange;
}
export { DateRange, DayRange, MonthRange, YearRange, SecondRange, MinuteRange, HourRange, };

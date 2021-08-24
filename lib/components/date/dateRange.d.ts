export class DateRange extends AbstractDateRange {
    // 0
    static second(): SecondRange;

    // 1
    static second(end: Date): SecondRange;
    static second(map: (item: Date, index: number) => any): SecondRange;
    static second(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): SecondRange;

    // 2
    static second(start: Date, end: Date): SecondRange;
    static second(end: Date, map: (item: Date, index: number) => any): SecondRange;
    static second(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): SecondRange;

    // 3
    static second(start:Date, end: Date, step: number): SecondRange;
    static second(start:Date, end: Date, map: (item: Date, index: number) => any): SecondRange;
    static second(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): SecondRange;

    // 4
    static second(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): SecondRange;
    static second(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): SecondRange;

    // 5
    static second(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): SecondRange;


    // 0
    static minute(): MinuteRange;

    // 1
    static minute(end: Date): MinuteRange;
    static minute(map: (item: Date, index: number) => any): MinuteRange;
    static minute(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): MinuteRange;

    // 2
    static minute(start: Date, end: Date): MinuteRange;
    static minute(end: Date, map: (item: Date, index: number) => any): MinuteRange;
    static minute(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MinuteRange;

    // 3
    static minute(start:Date, end: Date, step: number): MinuteRange;
    static minute(start:Date, end: Date, map: (item: Date, index: number) => any): MinuteRange;
    static minute(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MinuteRange;

    // 4
    static minute(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): MinuteRange;
    static minute(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MinuteRange;

    // 5
    static minute(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MinuteRange;


    // 0
    static hour(): HourRange;

    // 1
    static hour(end: Date): HourRange;
    static hour(map: (item: Date, index: number) => any): HourRange;
    static hour(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): HourRange;

    // 2
    static hour(start: Date, end: Date): HourRange;
    static hour(end: Date, map: (item: Date, index: number) => any): HourRange;
    static hour(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): HourRange;

    // 3
    static hour(start:Date, end: Date, step: number): HourRange;
    static hour(start:Date, end: Date, map: (item: Date, index: number) => any): HourRange;
    static hour(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): HourRange;

    // 4
    static hour(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): HourRange;
    static hour(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): HourRange;

    // 5
    static hour(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): HourRange;


    // 0
    static day(): DayRange;

    // 1
    static day(end: Date): DayRange;
    static day(map: (item: Date, index: number) => any): DayRange;
    static day(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): DayRange;

    // 2
    static day(start: Date, end: Date): DayRange;
    static day(end: Date, map: (item: Date, index: number) => any): DayRange;
    static day(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DayRange;

    // 3
    static day(start:Date, end: Date, step: number): DayRange;
    static day(start:Date, end: Date, map: (item: Date, index: number) => any): DayRange;
    static day(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DayRange;

    // 4
    static day(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): DayRange;
    static day(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DayRange;

    // 5
    static day(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DayRange;


    // 0
    static month(): MonthRange;

    // 1
    static month(end: Date): MonthRange;
    static month(map: (item: Date, index: number) => any): MonthRange;
    static month(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): MonthRange;

    // 2
    static month(start: Date, end: Date): MonthRange;
    static month(end: Date, map: (item: Date, index: number) => any): MonthRange;
    static month(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MonthRange;

    // 3
    static month(start:Date, end: Date, step: number): MonthRange;
    static month(start:Date, end: Date, map: (item: Date, index: number) => any): MonthRange;
    static month(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MonthRange;

    // 4
    static month(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): MonthRange;
    static month(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MonthRange;

    // 5
    static month(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MonthRange;


    // 0
    static year(): YearRange;

    // 1
    static year(end: Date): YearRange;
    static year(map: (item: Date, index: number) => any): YearRange;
    static year(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): YearRange;

    // 2
    static year(start: Date, end: Date): YearRange;
    static year(end: Date, map: (item: Date, index: number) => any): YearRange;
    static year(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): YearRange;

    // 3
    static year(start:Date, end: Date, step: number): YearRange;
    static year(start:Date, end: Date, map: (item: Date, index: number) => any): YearRange;
    static year(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): YearRange;

    // 4
    static year(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): YearRange;
    static year(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): YearRange;

    // 5
    static year(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): YearRange;



    // 0
    second(): SecondRange;

    // 1
    second(end: Date): SecondRange;
    second(map: (item: Date, index: number) => any): SecondRange;
    second(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): SecondRange;

    // 2
    second(start: Date, end: Date): SecondRange;
    second(end: Date, map: (item: Date, index: number) => any): SecondRange;
    second(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): SecondRange;

    // 3
    second(start:Date, end: Date, step: number): SecondRange;
    second(start:Date, end: Date, map: (item: Date, index: number) => any): SecondRange;
    second(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): SecondRange;

    // 4
    second(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): SecondRange;
    second(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): SecondRange;

    // 5
    second(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): SecondRange;


    // 0
    minute(): MinuteRange;

    // 1
    minute(end: Date): MinuteRange;
    minute(map: (item: Date, index: number) => any): MinuteRange;
    minute(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): MinuteRange;

    // 2
    minute(start: Date, end: Date): MinuteRange;
    minute(end: Date, map: (item: Date, index: number) => any): MinuteRange;
    minute(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MinuteRange;

    // 3
    minute(start:Date, end: Date, step: number): MinuteRange;
    minute(start:Date, end: Date, map: (item: Date, index: number) => any): MinuteRange;
    minute(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MinuteRange;

    // 4
    minute(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): MinuteRange;
    minute(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MinuteRange;

    // 5
    minute(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MinuteRange;


    // 0
    hour(): HourRange;

    // 1
    hour(end: Date): HourRange;
    hour(map: (item: Date, index: number) => any): HourRange;
    hour(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): HourRange;

    // 2
    hour(start: Date, end: Date): HourRange;
    hour(end: Date, map: (item: Date, index: number) => any): HourRange;
    hour(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): HourRange;

    // 3
    hour(start:Date, end: Date, step: number): HourRange;
    hour(start:Date, end: Date, map: (item: Date, index: number) => any): HourRange;
    hour(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): HourRange;

    // 4
    hour(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): HourRange;
    hour(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): HourRange;

    // 5
    hour(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): HourRange;


    // 0
    day(): DayRange;

    // 1
    day(end: Date): DayRange;
    day(map: (item: Date, index: number) => any): DayRange;
    day(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): DayRange;

    // 2
    day(start: Date, end: Date): DayRange;
    day(end: Date, map: (item: Date, index: number) => any): DayRange;
    day(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DayRange;

    // 3
    day(start:Date, end: Date, step: number): DayRange;
    day(start:Date, end: Date, map: (item: Date, index: number) => any): DayRange;
    day(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DayRange;

    // 4
    day(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): DayRange;
    day(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DayRange;

    // 5
    day(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DayRange;


    // 0
    month(): MonthRange;

    // 1
    month(end: Date): MonthRange;
    month(map: (item: Date, index: number) => any): MonthRange;
    month(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): MonthRange;

    // 2
    month(start: Date, end: Date): MonthRange;
    month(end: Date, map: (item: Date, index: number) => any): MonthRange;
    month(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MonthRange;

    // 3
    month(start:Date, end: Date, step: number): MonthRange;
    month(start:Date, end: Date, map: (item: Date, index: number) => any): MonthRange;
    month(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MonthRange;

    // 4
    month(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): MonthRange;
    month(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MonthRange;

    // 5
    month(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): MonthRange;


    // 0
    year(): YearRange;

    // 1
    year(end: Date): YearRange;
    year(map: (item: Date, index: number) => any): YearRange;
    year(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): YearRange;

    // 2
    year(start: Date, end: Date): YearRange;
    year(end: Date, map: (item: Date, index: number) => any): YearRange;
    year(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): YearRange;

    // 3
    year(start:Date, end: Date, step: number): YearRange;
    year(start:Date, end: Date, map: (item: Date, index: number) => any): YearRange;
    year(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): YearRange;

    // 4
    year(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): YearRange;
    year(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): YearRange;

    // 5
    year(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): YearRange;



    end(value: Date): DateRange;
    start(value: Date): DateRange;
    step(value: number): DateRange;
    weekdays(value: number[]): DateRange;
    leepYear(value: boolean): DateRange;
    map(f: (item: Date, index: number) => any): DateRange;
    filter(f: (item: Date, index: number) => boolean): DateRange;
    [Symbol.iterator](): Iterator<IteratorResult<Date>>;
}
import SecondRange = require("./secondRange");
import MinuteRange = require("./minuteRange");
import HourRange = require("./hoursRange");
import DayRange = require("./dayRange");
import MonthRange = require("./monthRange");
import YearRange = require("./yearRange");
import AbstractDateRange = require("../AbstractDateRange");
export { SecondRange, MinuteRange, HourRange, DayRange, MonthRange, YearRange };

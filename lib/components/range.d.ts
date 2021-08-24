export {
  Range,
  NumberRange,
  CharRange,
  StringRange,
  DateRange, 
  SecondRange,
  MinuteRange,
  HourRange,
  DayRange,
  MonthRange,
  YearRange,
};
declare class Range {
    // NumberRange
    // 0
    static numbers(): NumberRange;

    // 1
    static numbers(end: number): NumberRange;
    static numbers(map: (item: number, index: number) => any): NumberRange;
    static numbers(options: {
        start?: number,
        end?: number,
        step?: number,
        count?: number,
        map?: (item: number, index: number) => any,
        filter?: (item: number, index: number) => boolean,
        isFloat?: boolean,
    }): NumberRange;

    // 2
    static numbers(start: number, end: number): NumberRange;
    static numbers(end: number, map: (item: number, index: number) => any): NumberRange;
    static numbers(
        map: (item: number, index: number) => number,
        filter: (item: number, index: number) => boolean,
    ): NumberRange;

    // 3
    static numbers(start:number, end: number, step: number): NumberRange;
    static numbers(start:number, end: number, map: (item: number, index: number) => any): NumberRange;
    static numbers(
        end: number,
        map: (item: number, index: number) => any,
        filter: (item: number, index: number) => boolean,
    ): NumberRange;

    // 4
    static numbers(
        start: number,
        end: number,
        step: number,
        map: (item: number, index: number) => any,
    ): NumberRange;
    static numbers(
        start: number,
        end: number,
        map: (item: number, index: number) => any,
        filter: (item: number, index: number) => boolean,
    ): NumberRange;

    // 5
    static numbers(
        start: number,
        end: number,
        step: number,
        map: (item: number, index: number) => any,
        filter: (item: number, index: number) => boolean,
    ): NumberRange;

    // CharRange
    // 0
    static chars(): CharRange;

    // 1
    static chars(end: string[1]): CharRange;
    static chars(map: (item: string, index: number) => any): CharRange;
    static chars(options: {
        start?: string,
        end?: string,
        step?: number,
        count?: number,
        map?: (item: string, index: number) => any,
        filter?: (item: string, index: number) => boolean,
    }): CharRange;

    // 2
    static chars(start: string, end: string): CharRange;
    static chars(end: string, map: (item: string, index: number) => any): CharRange;
    static chars(
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    ): CharRange;

    // 3
    static chars(start:string, end: string, step: number): CharRange;
    static chars(start:string, end: string, map: (item: string, index: number) => any): CharRange;
    static chars(
        end: string,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    ): CharRange;

    // 4
    static chars(
        start: string,
        end: string,
        step: number,
        map: (item: string, index: number) => any,
    ): CharRange;
    static chars(
        start: string,
        end: string,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    ): CharRange;

    // 5
    static chars(
        start: string,
        end: string,
        step: number,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    ): CharRange;

    // StringRange
    // 1
    static strings(source: string): StringRange;

    // 2
    static strings(source: string, end: number): StringRange;
    static strings(source: string, map: (item: string, index: number) => any): StringRange;
    static strings(options: {
        source: string,
        start?: number,
        end?: number,
        step?: number,
        count?: number,
        map?: (item: string, index: number) => any,
        filter?: (item: string, index: number) => boolean,
    }): StringRange;

    // 3
    static strings(source: string, start: number, end: number): StringRange;
    static strings(source: string, start: number, map: (item: string, index: number) => any): StringRange;
    static strings(
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    ): StringRange;

    // 4
    static strings(source: string, start: number, end: number, step: number): StringRange;
    static strings(source: string, start: number, end: number, map: (item: string, index: number) => any): StringRange;
    static strings(
        end: number,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    ): StringRange;

    // 5
    static strings(
        source: string,
        start: number,
        end: number,
        step: number,
        map: (item: string, index: number) => any,
    ): StringRange;
    static strings(
        source: string,
        start: number,
        end: number,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    ): StringRange;


    // 6
    static strings(
        source: string,
        start: number,
        end: number,
        step: number,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    ): StringRange;

    // DateRange
    // 0
    static date(): DateRange;

    // 1
    static date(end: Date): DateRange;
    static date(map: (item: Date, index: number) => any): DateRange;
    static date(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    }): DateRange;

    // 2
    static date(start: Date, end: Date): DateRange;
    static date(end: Date, map: (item: Date, index: number) => any): DateRange;
    static date(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DateRange;

    // 3
    static date(start:Date, end: Date, step: number): DateRange;
    static date(start:Date, end: Date, map: (item: Date, index: number) => any): DateRange;
    static date(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DateRange;

    // 4
    static date(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    ): DateRange;
    static date(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DateRange;

    // 5
    static date(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    ): DateRange;
}

import NumberRange = require('./numberRange');
import CharRange = require('./charRange');
import StringRange = require('./stringRange');
import {
  DateRange,
  SecondRange,
  MinuteRange,
  HourRange,
  DayRange,
  MonthRange,
  YearRange 
} from './date/dateRange';
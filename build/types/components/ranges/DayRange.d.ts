import { Range, RangeGeneratorType } from "../abstract";
export declare class DayRange extends Range<Date> {
    private _start;
    private _end;
    private _step;
    constructor(_start?: Date, _end?: Date | number, _step?: number);
    [Symbol.iterator](): RangeGeneratorType<Date>;
}
export declare const dayRange: (start?: Date, end?: Date | number, step?: number) => DayRange;

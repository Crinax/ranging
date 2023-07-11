import { Range, RangeGeneratorType } from "../abstract";
export declare class YearRange extends Range<Date> {
    private _start;
    private _end;
    private _step;
    constructor(_start?: Date, _end?: Date | number, _step?: number);
    [Symbol.iterator](): RangeGeneratorType<Date>;
}
export declare const yearRange: (start?: Date, end?: Date | number, step?: number) => YearRange;

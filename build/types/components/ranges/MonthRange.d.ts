import { Range, RangeGeneratorType } from "../abstract";
export declare class MonthRange extends Range<Date> {
    private _start;
    private _end;
    private _step;
    constructor(_start?: Date, _end?: Date | number, _step?: number);
    [Symbol.iterator](): RangeGeneratorType<Date>;
}
export declare const monthRange: (start?: Date, end?: Date | number, step?: number) => MonthRange;

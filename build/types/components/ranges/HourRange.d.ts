import { Range, RangeGeneratorType } from "../abstract";
export declare class HourRange extends Range<Date> {
    private _start;
    private _end;
    private _step;
    constructor(_start?: Date, _end?: Date | number, _step?: number);
    [Symbol.iterator](): RangeGeneratorType<Date>;
}

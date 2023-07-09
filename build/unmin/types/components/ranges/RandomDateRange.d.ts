import { Range, RangeGeneratorType } from "../abstract";
export declare class RandomDateRange extends Range<Date> {
    private _start;
    private _end;
    constructor(_start: Date, _end: Date);
    [Symbol.iterator](): RangeGeneratorType<Date>;
}

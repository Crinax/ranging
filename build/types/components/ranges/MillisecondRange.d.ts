import { Range, RangeGeneratorType } from "../abstract";
export declare class MillisecondRange extends Range<Date> {
    private _start;
    private _end;
    private _step;
    constructor(_start?: Date, _end?: Date | number, _step?: number);
    [Symbol.iterator](): RangeGeneratorType<Date>;
}
export declare const millisecondRange: (start?: Date, end?: Date | number, step?: number) => MillisecondRange;

import { Range, RangeGeneratorType } from "../abstract";
export declare class NumberRange extends Range<number> {
    private _start;
    private _end;
    private _step;
    private _isFloat;
    constructor(_start?: number, _end?: number, _step?: number, _isFloat?: boolean);
    [Symbol.iterator](): RangeGeneratorType<number>;
}

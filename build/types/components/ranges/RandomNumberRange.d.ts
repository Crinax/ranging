import { Range, RangeGeneratorType } from "../abstract";
export declare class RandomNumberRange extends Range<number> {
    private _start;
    private _end;
    private _isFloat;
    constructor(_start: number, _end: number, _isFloat?: boolean);
    [Symbol.iterator](): RangeGeneratorType<number>;
}

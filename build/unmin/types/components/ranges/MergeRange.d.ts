import { IRange, Range, RangeGeneratorType } from "../abstract";
declare type ExtractRange<T> = T extends IRange<infer Result> ? Result : never;
export declare type RuleFunction<T> = (item: T, index: number, access: AccessFunction<T>) => void;
export interface AccessFunction<T> {
    rangeNumber: () => number;
    nextValue: () => T;
    switchTo: (value: number) => void;
    stop: () => boolean;
}
export declare class MergeRange<T extends IRange<_F>, A extends ExtractRange<T>, _F = A> extends Range<_F> {
    private _rule;
    constructor(_rule: RuleFunction<_F>, ranges: Iterable<T>);
    private _its;
    [Symbol.iterator](): RangeGeneratorType<_F>;
}
export {};

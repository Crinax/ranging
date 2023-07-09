import { Range, RangeGeneratorType } from '../abstract';
export declare class WalkerRange<T> extends Range<T> {
    constructor(iterable: Iterable<T>);
    private _it;
    [Symbol.iterator](): RangeGeneratorType<T>;
}

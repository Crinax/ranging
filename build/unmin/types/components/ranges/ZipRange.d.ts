import { Range, RangeGeneratorType } from "../abstract";
export declare type ZipKey = number | string | symbol;
export declare class ZipRange<K extends ZipKey, T> extends Range<Record<K, T>> {
    constructor(keyRange: Range<ZipKey>, valueRange: Range<T>);
    private _itKey;
    private _itValue;
    [Symbol.iterator](): RangeGeneratorType<Record<ZipKey, T>>;
}

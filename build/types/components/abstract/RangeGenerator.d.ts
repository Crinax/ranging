export declare type RangeGeneratorType<T> = Generator<T, void, undefined>;
export declare abstract class RangeGenerator<T> {
    constructor();
    abstract [Symbol.iterator](): RangeGeneratorType<T>;
}

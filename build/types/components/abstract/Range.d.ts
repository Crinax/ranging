import { RangeGenerator, RangeGeneratorType } from "./RangeGenerator";
export interface IRange<T> {
    filter(condition: FilterCondition<T>): IRange<T>;
    map<R>(mapper: Mapper<T, R>): IRange<R>;
    take(count: number): IRange<T>;
    from(condition: FromCondition<T>): IRange<T>;
    to(condition: ToCondition<T>): IRange<T>;
    find(condition: FindCondition<T>): IRange<T>;
    reduce<A>(reducer: Reducer<A, T>, start?: A): IRange<A>;
    count(): IRange<number>;
    combine<T2>(range: Range<T2>): IRange<[T, T2]>;
    shuffle(picking: number): IRange<T>;
    groupBy<C extends number>(count: C): IRange<Repeat<[T], C>>;
    collect(): T[];
    [Symbol.iterator](): RangeGeneratorType<T>;
}
export declare type BaseRangeCallback<T, R = boolean> = (value: T, index: number) => R;
export declare abstract class Range<T> extends RangeGenerator<T> implements IRange<T> {
    constructor();
    filter(condition: FilterCondition<T>): IRange<T>;
    map<R>(mapper: Mapper<T, R>): IRange<R>;
    take(count: number): IRange<T>;
    from(condition: FromCondition<T>): IRange<T>;
    to(condition: ToCondition<T>): IRange<T>;
    find(condition: FindCondition<T>): IRange<T>;
    reduce<A>(reducer: Reducer<A, T>, start?: A): IRange<A>;
    count(): IRange<number>;
    combine<T2>(range: Range<T2>): IRange<[T, T2]>;
    shuffle(picking?: number): IRange<T>;
    groupBy<C extends number>(count: C): IRange<Repeat<[T], C>>;
    collect(): T[];
}
declare type Repeat<T extends Array<_F>, Times extends number, _F = any> = T extends Array<infer R> ? T['length'] extends Times ? T : Repeat<[R, ...T], Times> : never;
export declare type Reducer<A, T> = (accamulator: A, value: T, index: number) => A;
export declare type FilterCondition<T> = BaseRangeCallback<T>;
export declare type FindCondition<T> = BaseRangeCallback<T>;
export declare type FromCondition<T> = BaseRangeCallback<T>;
export declare type Mapper<T, R> = BaseRangeCallback<T, R>;
export declare type ToCondition<T> = BaseRangeCallback<T>;
export {};

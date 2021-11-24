import IRangeOptions from './IRangeOptions';
declare type getItemT<T> = T extends IRangeOptions<infer EdgeT, infer ItemT, infer DateT> ? EdgeT : never;
declare type getEdgeT<T> = T extends IRangeOptions<infer EdgeT, infer ItemT, infer DateT> ? ItemT : never;
declare type getDateT<T> = T extends IRangeOptions<infer EdgeT, infer ItemT, infer DateT> ? DateT : never;
export default interface IRandomRangeOptions<T> extends Omit<IRangeOptions<getEdgeT<T>, getItemT<T>, getDateT<T>>, 'step'> {
}
export {};

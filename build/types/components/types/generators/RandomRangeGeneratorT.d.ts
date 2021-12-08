import RangeGeneratorT from "./RangeGeneratorT";
declare type RandomRangeGeneratorT<T> = T extends RangeGeneratorT<infer RangeT> ? T : never;
export default RandomRangeGeneratorT;

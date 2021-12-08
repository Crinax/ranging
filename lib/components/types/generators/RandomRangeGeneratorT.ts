import RangeGeneratorT from "./RangeGeneratorT";

type RandomRangeGeneratorT<T> = T extends RangeGeneratorT<infer RangeT> ? T : never;

export default RandomRangeGeneratorT;
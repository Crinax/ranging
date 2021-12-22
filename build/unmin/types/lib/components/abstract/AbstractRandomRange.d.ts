import AbstractRange from "./AbstractRange";
import { RandomRangeOptionsT, RandomRangeGeneratorT } from "../types";
export default abstract class AbstractRandomRange<OptionsT, GeneratorT> extends AbstractRange<RandomRangeOptionsT<OptionsT>, RandomRangeGeneratorT<GeneratorT>> {
    constructor(options: RandomRangeOptionsT<OptionsT>);
}

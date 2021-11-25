import AbstractRange from "./AbstractRange";
import { RandomRangeOptionsT, RandomRangeGeneratorT, OptionsType } from "../types";

class AbstractRandomRange<OptionsT, GeneratorT, Successor extends AbstractRange<RandomRangeOptionsT<OptionsT>, RandomRangeGeneratorT<GeneratorT>>> extends AbstractRange<RandomRangeOptionsT<OptionsT>, RandomRangeGeneratorT<GeneratorT>> {
  constructor(options: RandomRangeOptionsT<OptionsType<OptionsT>>, cls: Successor) {
    super(options);
  }
}

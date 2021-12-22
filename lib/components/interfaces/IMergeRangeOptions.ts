import IAnyRangeOptions from "./IAnyRangeOptions";
import { AbstractRange } from "../abstract";
import { AnyRangeOptionsT, AnyRangeGeneratorT } from "../types";

export default interface IMergeRangeOptions extends Omit<Omit<IAnyRangeOptions, 'start'>, 'end'> {
  ranges: AbstractRange<AnyRangeOptionsT, AnyRangeGeneratorT>[];
}
import IRangeOptions from "./IRangeOptions";
import { AbstractRange } from "../abstract";
import { AnyRangeOptionsT, AnyRangeGeneratorT } from "../types";
export default interface IShuffleRangeOptions extends Omit<Omit<Omit<IRangeOptions<never, object>, 'start'>, 'end'>, 'step'> {
    range: AbstractRange<AnyRangeOptionsT, AnyRangeGeneratorT>;
    picking?: number;
}

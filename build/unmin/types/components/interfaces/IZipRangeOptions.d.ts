import IRangeOptions from "./IRangeOptions";
import { AbstractRange } from "../abstract";
import { AnyRangeOptionsT, AnyRangeGeneratorT } from "../types";
export default interface IZipRangeOptions extends Omit<Omit<IRangeOptions<never, object>, 'start'>, 'end'> {
    keys: AbstractRange<AnyRangeOptionsT, AnyRangeGeneratorT>;
    values: AbstractRange<AnyRangeOptionsT, AnyRangeGeneratorT>;
}

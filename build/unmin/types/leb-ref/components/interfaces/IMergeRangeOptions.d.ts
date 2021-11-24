import { AbstractRange } from "../abstract";
import { AnyRangeOptionsT, AnyRangeGeneratorT } from "../types";
export default interface IMergeRangeOptions {
    ranges: AbstractRange<AnyRangeOptionsT, AnyRangeGeneratorT>[];
    step?: number;
    count?: number;
    map?: (item: any, index: number) => any;
    filter?: (item: any, index: number) => boolean;
}

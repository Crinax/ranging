import { AbstractRange } from "../abstract";
import { AnyRangeOptionsT, AnyRangeGeneratorT } from "../types";

export default interface IZipRangeOptions {
  keys: AbstractRange<AnyRangeOptionsT, AnyRangeGeneratorT>;
  values: AbstractRange<AnyRangeOptionsT, AnyRangeGeneratorT>;
  step?: number;
  count?: number;
  map?: (item: object, index: number) => any;
  filter?: (item: object, index: any) => boolean;
}
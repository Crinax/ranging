import IRandomRangeOptions from "./IRandomRangeOptions";
import IStringRangeOptions from "./IStringRangeOptions";

export default interface IRandomStringRangeOptions extends IRandomRangeOptions<IStringRangeOptions> {
  source: string | string[],
}
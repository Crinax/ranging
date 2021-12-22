import { OptionsDateType, OptionsEdgeType, OptionsItemType } from "../types";
import IRangeOptions from "./IRangeOptions";
export default interface IRandomRangeOptions<T> extends Omit<IRangeOptions<OptionsEdgeType<T>, OptionsItemType<T>, OptionsDateType<T>>, 'step'> {
    start: OptionsEdgeType<T>;
    end: OptionsEdgeType<T> | OptionsDateType<T>;
}

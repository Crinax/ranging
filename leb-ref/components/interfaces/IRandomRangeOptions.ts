import { OptionsDateType, OptionsEdgeType, OptionsItemType } from "../types";
import IRangeOptions from "./IRangeOptions";

export default interface IRandomRangeOptions<T> extends Omit<IRangeOptions<OptionsEdgeType<T>, OptionsItemType<T>, OptionsDateType<T>>, 'step'> { }
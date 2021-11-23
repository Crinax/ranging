import * as Interfaces from '../interfaces';

type AnyRangeOptionsT = Interfaces.IAnyRangeOptions;
type CharRangeOptionsT = Interfaces.ICharRangeOptions;
type ColorRangeOptionsT = Interfaces.IColorRangeOptions;
type DateRangeOptionsT = Interfaces.IDateRangeOptions;
type NumberRangeOptionsT = Interfaces.INumberRangeOptions;
type RangeOptionsT<EdgeT, ItemT, DateT = EdgeT> = Interfaces.IRangeOptions<EdgeT, ItemT, DateT>;
type StringRangeOptionsT = Interfaces.IStringRangeOptions;

type OptionsType<T> = T extends RangeOptionsT<infer EdgeT, infer ItemT, infer DateT> ? T : never;
type OptionsEdgeType<T> = T extends RangeOptionsT<infer EdgeT, infer ItemT, infer DateT>
  ? EdgeT : never;
type OptionsItemType<T> = T extends RangeOptionsT<infer EdgeT, infer ItemT, infer DateT>
  ? ItemT : never;
type OptionsDateType<T> = T extends RangeOptionsT<infer EdgeT, infer ItemT, infer DateT>
  ? DateT : never;

export {
  AnyRangeOptionsT,
  OptionsType,
  OptionsItemType,
  OptionsEdgeType,
  OptionsDateType,
  CharRangeOptionsT,
  ColorRangeOptionsT,
  DateRangeOptionsT,
  NumberRangeOptionsT,
  RangeOptionsT,
  StringRangeOptionsT,
}
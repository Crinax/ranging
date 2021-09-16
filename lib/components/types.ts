import AbstractRange from "./ranges/AbstractRange";

interface IRangeOptions<EdgeT, ItemT, DateT = EdgeT> {
  start?: EdgeT;
  end?: EdgeT | DateT;
  step?: number;
  count?: number;
  map?: (item: ItemT, index: number) => any;
  filter?: (item: ItemT, index: number) => boolean;
}

interface INumberRangeOptions extends IRangeOptions<number, number> {
  float?: boolean;
}
interface IStringRangeOptions extends IRangeOptions<number, string> {
  source: string | string[];
}
interface IDateRangeOptions extends IRangeOptions<Date, Date, number> {
  weekdays?: number[];
  leepYear?: boolean;
}

interface IMergeRangesOptions {
  ranges: AbstractRange<any>[];
  step?: number;
  count?: number;
  map?: (item: any, index: number) => any;
  filter?: (item: any, index: number) => boolean;
}
interface IZipRangesOptions {
  keys: AbstractRange<any>;
  values: AbstractRange<any>;
  step?: number;
  count?: number;
  map?: (item: any, index: number) => any;
  filter?: (item: any, index: any) => boolean;
}

interface ICharRangeOptions extends IRangeOptions<string, string> { }
interface IColorRangeOptions extends IRangeOptions<string, string> { }
interface IUnknownRangeOptions extends IRangeOptions<any, any> { }

type UnknownRangeOptionsT = IUnknownRangeOptions;
type NumberRangeOptionsT = INumberRangeOptions;
type StringRangeOptionsT = IStringRangeOptions;
type CharRangeOptionsT = ICharRangeOptions;
type DateRangeOptionsT = IDateRangeOptions;
type ColorRangeOptionsT = IColorRangeOptions;
type MergeRangesOptionsT = IMergeRangesOptions;
type ZipRangesOptionsT = IZipRangesOptions;

export {
  UnknownRangeOptionsT,
  NumberRangeOptionsT,
  StringRangeOptionsT,
  CharRangeOptionsT,
  DateRangeOptionsT,
  ColorRangeOptionsT,
  MergeRangesOptionsT,
  ZipRangesOptionsT
}
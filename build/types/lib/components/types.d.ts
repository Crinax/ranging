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
interface ICharRangeOptions extends IRangeOptions<string, string> {
}
interface IColorRangeOptions extends IRangeOptions<string, string> {
}
interface IUnknownRangeOptions extends IRangeOptions<any, any> {
}
declare type UnknownRangeOptionsT = IUnknownRangeOptions;
declare type NumberRangeOptionsT = INumberRangeOptions;
declare type StringRangeOptionsT = IStringRangeOptions;
declare type CharRangeOptionsT = ICharRangeOptions;
declare type DateRangeOptionsT = IDateRangeOptions;
declare type ColorRangeOptionsT = IColorRangeOptions;
declare type MergeRangesOptionsT = IMergeRangesOptions;
declare type ZipRangesOptionsT = IZipRangesOptions;
export { UnknownRangeOptionsT, NumberRangeOptionsT, StringRangeOptionsT, CharRangeOptionsT, DateRangeOptionsT, ColorRangeOptionsT, MergeRangesOptionsT, ZipRangesOptionsT };

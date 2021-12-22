import IRangeOptions from "./IRangeOptions";
export default interface IStringRangeOptions extends IRangeOptions<number, string> {
    source: string | string[];
}

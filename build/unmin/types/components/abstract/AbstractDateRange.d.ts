import AbstractRange from "./AbstractRange";
import { DateRangeGeneratorT, DateRangeOptionsT } from "../types";
export default abstract class AbstractDateRange extends AbstractRange<DateRangeOptionsT, DateRangeGeneratorT> {
    private metric;
    constructor(metric: string, options: DateRangeOptionsT);
    private dateGetters;
    private dateSetters;
    private setSearchMetricMap;
    private getTime;
    private setTime;
    [Symbol.iterator](): Generator<any, void, unknown>;
}

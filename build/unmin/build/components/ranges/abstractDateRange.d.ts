import AbstractRange from './abstractRange';
import { DateRangeOptionsT } from '../types';
declare abstract class AbstractDateRange extends AbstractRange<Date, Date, number> {
    private metric;
    protected options: DateRangeOptionsT;
    private dateGetters;
    private dateSetters;
    constructor(metric: string, options: DateRangeOptionsT);
    private setSearchMetricMap;
    private getTime;
    private setTime;
    weekdays(value: number[]): this;
    leepYear(value: boolean): this;
    [Symbol.iterator](): Iterator<Date>;
}
export default AbstractDateRange;

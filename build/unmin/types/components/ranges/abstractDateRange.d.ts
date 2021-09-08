import AbstractRange from './abstractRange';
import { DateRangeOptionsT } from '../types';
declare abstract class AbstractDateRange extends AbstractRange<Date> {
    private metric;
    protected options: DateRangeOptionsT;
    private dateGetters;
    private dateSetters;
    constructor(metric: string, options?: DateRangeOptionsT);
    private setSearchMetricMap;
    private getTime;
    private setTime;
    [Symbol.iterator](): Iterator<Date>;
}
export default AbstractDateRange;

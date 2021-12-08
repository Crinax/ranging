import AbstractRange from "./AbstractRange";
import { DateRangeGeneratorT, DateRangeOptionsT } from "../types";

export default abstract class AbstractDateRange extends AbstractRange<DateRangeOptionsT, DateRangeGeneratorT> {
  constructor(private metric: string, options: DateRangeOptionsT) {
    super(options);
  }

  private dateGetters!: { [key: string]: Function };
  private dateSetters!: { [key: string]: Function };

  private setSearchMetricMap(start: Date) {
    this.dateGetters = {
      'ms': start.getTime,
      's': start.getSeconds,
      'm': start.getMinutes,
      'h': start.getHours,
      'D': start.getDate,
      'M': start.getMonth,
      'Y': start.getFullYear,
    }
    this.dateSetters = {
      'ms': start.setTime,
      's': start.setSeconds,
      'm': start.setMinutes,
      'h': start.setHours,
      'D': start.setDate,
      'M': start.setMonth,
      'Y': start.setFullYear,
    }
  }

  private getTime(start: Date) {
    if (!this.dateGetters) this.setSearchMetricMap(start);
    return this.dateGetters[this.metric].call(start);
  }

  private setTime(start: Date, value: Date | number) {
    if (!this.dateSetters) this.setSearchMetricMap(start);
    return this.dateSetters[this.metric].call(start, value);
  }

  *[Symbol.iterator]() {
    let { start = new Date() } = this.options;
    const {
      end = Infinity,
      step = 1,
      count,
      map,
      filter,
      leapYear,
      weekdays,
    } = this.options;
    let index = 0;
    let extIndex = 0;
    start = new Date(start);

    const isLeepYear = (year: number) => (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
    const addStep = () => {
      this.setTime(start, this.getTime(start) + step);
    };

    while ((count && index < count) || (!count && start <= end)) {
      if (filter && !filter(new Date(start), extIndex)) {
        extIndex++;
        addStep();
        continue;
      }
      
      if (leapYear && !isLeepYear(start.getFullYear())) {
        addStep();
        continue;
      }
      
      if (weekdays && weekdays.indexOf(start.getDay()) === -1) {
        addStep();
        continue;
      }

      if (map) yield map(new Date(start), index)
        else yield new Date(start);

      index++;
      extIndex++;
      addStep();
    }
  }
}
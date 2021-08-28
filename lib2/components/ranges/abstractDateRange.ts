import AbstractRange from './abstractRange';
import { DateRangeOptionsT } from '../types';

abstract class AbstractDateRange extends AbstractRange<Date, Date, number> {
  protected options: DateRangeOptionsT;
  private dateGetters!: { [key: string]: Function };
  private dateSetters!: { [key: string]: Function };

  constructor(private metric: string, options: DateRangeOptionsT) {
    super();
    this.options = {
      ...options,
      start: new Date(),
      end: Infinity,
      step: 1,
    }
    
  }

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
    return this.dateGetters[this.metric]();
  }

  private setTime(start: Date, value: Date | number) {
    if (!this.dateSetters) this.setSearchMetricMap(start);
    return this.dateSetters[this.metric](value);
  }

  weekdays(value: number[]) {
    this.options.weekdays = value;
    return this;
  }

  leepYear(value: boolean) {
    this.options.leepYear = value;
    return this;
  }

  [Symbol.iterator](): Iterator<Date> {
    let { start } = this.options;
    const {
      end,
      step,
      count,
      weekdays,
      leepYear,
      map,
      filter,
    } = this.options;
    let index = 0;
    start = new Date(start);
    const self = this;
    
    return {
      next(): IteratorResult<Date, void> {
        if ((count && index < count) || (!count && start <= end)) {
          if (index !== 0) {
            self.setTime(start, self.getTime(start) + step);
          }

          while (filter && !filter(new Date(start), index)) {
            if (!count && start >= end) {
              return {
                value: undefined,
                done: true,
              };
            }
            self.setTime(start, self.getTime(start) + step);
          }

          if (leepYear) {
            let year = start.getFullYear();
            const isLeepYear = () => (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
            while (!isLeepYear()) {
              if (!count && start > end) {
                return {
                  value: undefined,
                  done: true,
                };
              }
              self.setTime(start, self.getTime(start) + step);
              year = start.getFullYear();
            }
          }

          if (weekdays) {
            let weekday = start.getDay();
            while (weekdays.indexOf(weekday) === -1) {
              if (!count && start > end) {
                return {
                  value: undefined,
                  done: true,
                };
              }
              self.setTime(start, self.getTime(start) + step);
              weekday = start.getDay();
            }
          }
          if ((!count && start > end)) {
            return {
              value: undefined,
              done: true,
            };
          }
          let mappedValue;
          if (map) mappedValue = map(new Date(start), index);
          index += 1;
          if (mappedValue) mappedValue = new Date(mappedValue);

          return {
            value: mappedValue || new Date(start),
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}

export default AbstractDateRange;
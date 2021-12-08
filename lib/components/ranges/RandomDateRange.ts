import { AbstractRange } from '../abstract';
import { DateRangeGeneratorT, RandomDateRangeOptionsT } from '../types';
import { getRandomNumber } from './utils/random';

export default class RandomNumberRange extends AbstractRange<RandomDateRangeOptionsT, DateRangeGeneratorT> {
  constructor(options: RandomDateRangeOptionsT) {
    super(options);
  }

  *[Symbol.iterator]() {
    const {
      start,
      end,
      count = Infinity,
      map,
      filter,
      weekdays,
      leapYear,
    } = this.options;

    let extIndex = 0;
    let index = 0;

    const isLeepYear = (year: number) => (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);

    while (index < count) {
      let rand = getRandomNumber(start.getTime(), end.getTime(), false);

      if (filter && !filter(new Date(rand), extIndex)) {
        extIndex++;
        continue;
      }

      if (weekdays && weekdays.indexOf(new Date(rand).getDay()) === -1) continue;
      if (leapYear && !isLeepYear(new Date(rand).getFullYear())) continue;

      if (map) yield map(new Date(rand), index)
        else yield new Date(rand);

      extIndex++;
      index++;
    }
  }
}
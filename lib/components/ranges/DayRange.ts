import { AbstractDateRange } from '../abstract';
import { DateRangeOptionsT } from '../types';

export default class HourRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super(
      'D',
      options || { start: new Date(), end: Infinity, step: 1 }
    );
  }
}
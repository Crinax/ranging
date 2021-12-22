import { AbstractDateRange } from '../abstract';
import { DateRangeOptionsT } from '../types';

export default class HourRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super(
      'h',
      options || { start: new Date(), end: Infinity, step: 1 }
    );
  }
}
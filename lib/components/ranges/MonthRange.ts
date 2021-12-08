import { AbstractDateRange } from '../abstract';
import { DateRangeOptionsT } from '../types';

export default class MonthRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super(
      'M',
      options || { start: new Date(), end: Infinity, step: 1 }
    );
  }
}
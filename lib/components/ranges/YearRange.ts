import { AbstractDateRange } from '../abstract';
import { DateRangeOptionsT } from '../types';

export default class YearRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super(
      'Y',
      options || { start: new Date(), end: Infinity, step: 1 }
    );
  }
}
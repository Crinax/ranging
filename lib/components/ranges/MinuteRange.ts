import { AbstractDateRange } from '../abstract';
import { DateRangeOptionsT } from '../types';

export default class MinuteRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super(
      'm',
      options || { start: new Date(), end: Infinity, step: 1 }
    );
  }
}
import { AbstractDateRange } from '../abstract';
import { DateRangeOptionsT } from '../types';

export default class MillisecondRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super(
      'ms',
      options || { start: new Date(), end: Infinity, step: 1 }
    );
  }
}
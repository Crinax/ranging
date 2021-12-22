import { AbstractDateRange } from '../abstract';
import { DateRangeOptionsT } from '../types';

export default class SecondRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super(
      's',
      options || { start: new Date(), end: Infinity, step: 1 }
    );
  }
}
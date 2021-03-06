import { AbstractRange } from '../abstract';
import { MergeRangeGeneratorT, MergeRangeOptionsT } from '../types';

export default class MergeRange extends AbstractRange<MergeRangeOptionsT, MergeRangeGeneratorT> {
  constructor(options: MergeRangeOptionsT) {
    super(options);
  }

  *[Symbol.iterator]() {
    const {
      ranges,
      step = 1,
      count,
      map,
      filter
    } = this.options;

    let index = 0;
    let elementIndex = 0;
    let extIndex = 0;
    
    for (let rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {
      for (let element of ranges[rangeIndex]) {
        if (extIndex % step !== 0) {
          extIndex++;
          continue;
        }

        if (count && index == count) return;

        if (filter && !filter(element, elementIndex)) {
          elementIndex++;
          continue;
        }

        if (map) yield map(element, elementIndex)
          else yield element;
        
        extIndex++;
        elementIndex++;
        index++;
      }
    }
  }
}
import { AbstractRange } from "../abstract";
import { CharRangeGeneratorT, CharRangeOptionsT } from '../types';

export default class CharRange extends AbstractRange<CharRangeOptionsT, CharRangeGeneratorT> {
  constructor(options?: CharRangeOptionsT) {
    super(
      options ||
      { start: 'A', end: 'Z', step: 1 }
    );
  }

  *[Symbol.iterator]() {
    let { start = 'A' } = this.options;
    const {
      end = 'Z',
      step = 1,
      count,
      map,
      filter,
    } = this.options;
    let index = 0;
    let extIndex = 0;

    const addStep = () => start = String.fromCodePoint(start.codePointAt(0)! + step);

    while ((count && index < count) || (!count && start <= end)) {
      if (filter && !filter(start, extIndex)) {
        extIndex++;
        addStep();
        continue;
      }

      if (map) yield map(start, index)
        else yield start;

      index++;
      extIndex++;
      addStep();
    }
  }
}
import { AbstractRange } from '../abstract';
import { StringRangeOptionsT, StringRangeGeneratorT } from '../types';

export default class StringRange extends AbstractRange<StringRangeOptionsT, StringRangeGeneratorT> {
  constructor(options: StringRangeOptionsT) {
    super(options);
    this.options.source = Array.from(this.options.source);
  }

  *[Symbol.iterator]() {
    let { start = 0 } = this.options;
    const {
      source,
      end = this.options.source.length,
      step = 1,
      count,
      map,
      filter,
    } = this.options;
    let index = 0;
    let extIndex = 0;

    const addStep = () => start += step;

    while ((source[start] !== undefined) && ((count && index < count) || (!count && start <= end))) {
      if (filter && !filter(source[start], extIndex)) {
        extIndex++;
        addStep();
        continue;
      }

      if (map) yield map(source[start], index)
        else yield source[start];

      index++;
      extIndex++;
      addStep();
    }
  }
}
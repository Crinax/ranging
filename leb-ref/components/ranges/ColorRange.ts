import { AbstractRange } from "../abstract";
import { ColorRangeGeneratorT, ColorRangeOptionsT } from '../types';

export default class ColorRange extends AbstractRange<ColorRangeOptionsT, ColorRangeGeneratorT> {
  constructor(options?: ColorRangeOptionsT) {
    super(
      options ||
      { start: '#000000', end: '#FFFFFF', step: 1 }
    );
  }

  *[Symbol.iterator]() {
    let { start = '#000000', end = '#FFFFFF'} = this.options;
    const {
      step = 1,
      count,
      map,
      filter,
    } = this.options;
    let index = 0;
    start = start.toLowerCase();
    end = end.toLowerCase();

    const addStep = () => {
      const intStart = parseInt(start!.slice(1), 16);
      const hexStart = (intStart + step!).toString(16);
      let zerosBefore = '';
      if (hexStart.length !== 6) {
        zerosBefore = Array.from({ length: 6 - hexStart.length }, () => '0').join('');
      }
      start = `#${zerosBefore}${hexStart}`;
    };

    while ((count && index < count) || (!count && start <= end)) {
      if (filter && !filter(start, index)) {
        addStep();
        continue;
      }

      if (map) yield map(start, index)
        else yield start;
      index += 1;
      addStep();
    }
  }
}
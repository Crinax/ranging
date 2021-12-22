import { AbstractRange } from '../abstract';
import { NumberRangeGeneratorT, NumberRangeOptionsT } from '../types';
import { add, product } from './utils/fixNumberOperations';

export default class NumberRange extends AbstractRange<NumberRangeOptionsT, NumberRangeGeneratorT> {
  constructor(options?: NumberRangeOptionsT) {
    super(
      options ||
      { start: 0, end: Infinity, step: 1, float: false }
    );

  }

  get sum(): number {
    return this.reduce(add);
  }

  get product(): number {
    return this.reduce(product, 1);
  }

  *[Symbol.iterator]() {
    let { start = 0 } = this.options;
    const {
      end = Infinity,
      step = 1,
      count,
      float,
      map,
      filter,
    } = this.options;
    let index = 0;
    let extIndex = 0;

    // Adding `step` in dependences of float
    const addStep = () => {
      if (float) return (start = add(start, step), start)
        else (start = start + step, start);
    };

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

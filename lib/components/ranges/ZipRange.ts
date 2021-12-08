import { AbstractRange } from '../abstract';
import { ZipRangeOptionsT, ZipRangeGeneratorT } from '../types';

export default class ZipRange extends AbstractRange<ZipRangeOptionsT, ZipRangeGeneratorT> {
  constructor(options: ZipRangeOptionsT) {
    super(options);
  }

  get dict() {
    return this.reduce((prev, curr) => Object.assign(prev, curr), {});
  }

  *[Symbol.iterator]() {
    const {
      keys,
      count,
      values,
      step = 1,
      map,
      filter
    } = this.options;
    const keysIterator = keys.iterator;
    const valuesIterator = values.iterator;
    let index = 0;
    let elementIndex = 0;
    let extIndex = 1;

    let keysObj = keysIterator.next();
    let valuesObj = valuesIterator.next();

    const addStep = () => {
      keysObj = keysIterator.next();
      valuesObj = valuesIterator.next();
    }

    while (!keysObj.done && !valuesObj.done) {
      if (count && count === 0) return;

      if (extIndex % step !== 0) {
        addStep();

        extIndex++;
        continue;
      }

      let objResult = { [keysObj.value]: valuesObj.value };

      if (filter && !filter(objResult, elementIndex)) {
        addStep();

        elementIndex++;
        continue;
      }

      if (map) yield map(objResult, index)
        else yield objResult;

      addStep();

      elementIndex++;
      extIndex++;
      index++;
    }
  }
}
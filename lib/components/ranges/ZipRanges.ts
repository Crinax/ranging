import AbstractRange from './AbstractRange';
import { ZipRangesOptionsT } from '../types';

class ZipRanges extends AbstractRange<any> {
  constructor(protected options: ZipRangesOptionsT) {
    super();
  }
  /**
   * @deprecated
   */
  get merged() {
    return this.reduce((prev, curr) => Object.assign(prev, curr), {});
  }

  get dict() {
    return this.reduce((prev, curr) => Object.assign(prev, curr), {});
  }

  *[Symbol.iterator](): Iterator<any> {
    let { count } = this.options;
    const {
      keys,
      values,
      step = 1,
      map,
      filter
    } = this.options;
    let elementIndex = 0;
    let extIndex = 1;
    const keysIterator = keys.iterator;
    const valuesIterator = values.iterator;
    let keysObj = keysIterator.next();
    let valuesObj = valuesIterator.next();
    while (!keysObj.done && !valuesObj.done) {
      while (extIndex % step !== 0) {
        keysObj = keysIterator.next();
        valuesObj = valuesIterator.next();
        extIndex++;
      }
      let objResult = Object.fromEntries([[keysObj.value, valuesObj.value]]);
      if (filter) {
        if (!filter(objResult, elementIndex)) continue;
      }
      if (map) yield map(objResult, elementIndex)
      else yield objResult;
      keysObj = keysIterator.next();
      valuesObj = valuesIterator.next();
      elementIndex++;
      extIndex++;
      if (count) count--;
      if (count && count === 0) return {
        value: undefined,
        done: true,
      }
    }
  }
}

export default ZipRanges;

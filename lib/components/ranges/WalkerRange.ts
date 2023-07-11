import { Range, RangeGeneratorType } from '../abstract';

export class WalkerRange<T> extends Range<T> {
  constructor(iterable: Iterable<T>) {
    super();
    
    this._it = iterable[Symbol.iterator]();
  }

  private _it: Iterator<T, void, undefined>;

  *[Symbol.iterator](): RangeGeneratorType<T> {
    let item = this._it.next();

    while (!item.done) {
      yield item.value;

      item = this._it.next();
    }
  }
}

export const walkerRange = <T>(iterable: Iterable<T>) => new WalkerRange(iterable);

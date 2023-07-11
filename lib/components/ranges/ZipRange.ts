import { Range, RangeGeneratorType } from "../abstract";

export type ZipKey = number | string | symbol;

export class ZipRange<K extends ZipKey, T> extends Range<Record<K, T>> {
  constructor(keyRange: Range<K>, valueRange: Range<T>) {
    super();

    this._itKey = keyRange[Symbol.iterator]();
    this._itValue = valueRange[Symbol.iterator]();
  }

  private _itKey: RangeGeneratorType<ZipKey>;
  private _itValue: RangeGeneratorType<T>;

  *[Symbol.iterator](): RangeGeneratorType<Record<ZipKey, T>> {
    let key = this._itKey.next();
    let value = this._itValue.next();

    while (!(key.done || value.done)) {
      yield { [key.value]: value.value }

      key = this._itKey.next()
      value = this._itValue.next()
    }
  }
}

export const zipRange = <K extends ZipKey, T>(
  keyRange: Range<K>,
  valueRange: Range<T>
) => new ZipRange(keyRange, valueRange);

export type RangeGeneratorType<T> = Generator<T, void, undefined>;

export abstract class RangeGenerator<T> {
  constructor() {}

  abstract [Symbol.iterator](): RangeGeneratorType<T>;
}

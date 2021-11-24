import AbstractRange from './AbstractRange';
import { GeneratorTypeFromClass, OptionsTypeFromClass, RandomRangeOptionsT } from '../types';

export type GetRT<T> = RandomRangeOptionsT<OptionsTypeFromClass<T>>;
export type GetGT<T> = GeneratorTypeFromClass<T>;

export default abstract class AbstractRandomRange<T> extends AbstractRange<GetRT<T>, GetGT<T>> {
  constructor(options: GetRT<T>) {
    super(options);
  }
}
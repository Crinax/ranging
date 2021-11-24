import AbstractRange from './AbstractRange';
import { GeneratorTypeFromClass, OptionsTypeFromClass, RandomRangeOptionsT } from '../types';
export default abstract class AbstractRandomRange<T> extends AbstractRange<RandomRangeOptionsT<OptionsTypeFromClass<T>>, GeneratorTypeFromClass<T>> {
}

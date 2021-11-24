import { AbstractRandomRange } from '../abstract';
import { OptionsTypeFromClass } from '../types';
import NumberRange from './NumberRange';

class RandomNumbers extends AbstractRandomRange<NumberRange> {
  constructor(options?: OptionsTypeFromClass<NumberRange>) {
    super(
      options ||
      { start: -Infinity, end: Infinity, count: Infinity }
    )
  }
}
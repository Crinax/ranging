import { AbstractRangeGenerator, NumberRange, NumberRangeGeneratorT } from '..';
import AbstractRange from './AbstractRange';

type A<T> = T extends AbstractRange<infer OptionsT, any> ? OptionsT : never;
type B<T> = NumberRange extends AbstractRange<A<T>, infer GeneratorT> ? GeneratorT: never;

let f: A<NumberRange>;
let d: B<NumberRange>;
import { AbstractRange } from '../abstract';
import { NumberRangeGeneratorT, RandomNumberOptionsT } from '../types';
export default class RandomNumber extends AbstractRange<RandomNumberOptionsT, NumberRangeGeneratorT> {
    constructor(options: RandomNumberOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

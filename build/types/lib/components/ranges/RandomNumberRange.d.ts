import { AbstractRange } from '../abstract';
import { NumberRangeGeneratorT, RandomNumberRangeOptionsT } from '../types';
export default class RandomNumberRange extends AbstractRange<RandomNumberRangeOptionsT, NumberRangeGeneratorT> {
    constructor(options: RandomNumberRangeOptionsT);
    get sum(): number;
    get product(): number;
    [Symbol.iterator](): Generator<any, void, unknown>;
}

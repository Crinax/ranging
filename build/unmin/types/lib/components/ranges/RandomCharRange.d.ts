import { AbstractRange } from '../abstract';
import { CharRangeGeneratorT, RandomCharRangeOptionsT } from '../types';
export default class RandomCharRange extends AbstractRange<RandomCharRangeOptionsT, CharRangeGeneratorT> {
    constructor(options: RandomCharRangeOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

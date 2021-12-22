import { AbstractRange } from '../abstract';
import { ColorRangeGeneratorT, RandomColorRangeOptionsT } from '../types';
export default class RandomColorRange extends AbstractRange<RandomColorRangeOptionsT, ColorRangeGeneratorT> {
    constructor(options: RandomColorRangeOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

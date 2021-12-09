import { AbstractRange } from '../abstract';
import { DateRangeGeneratorT, RandomDateRangeOptionsT } from '../types';
export default class RandomNumberRange extends AbstractRange<RandomDateRangeOptionsT, DateRangeGeneratorT> {
    constructor(options: RandomDateRangeOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

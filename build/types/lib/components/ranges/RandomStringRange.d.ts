import { AbstractRange } from '../abstract';
import { StringRangeGeneratorT, RandomStringRangeOptionsT } from '../types';
export default class RandomStringRange extends AbstractRange<RandomStringRangeOptionsT, StringRangeGeneratorT> {
    constructor(options: RandomStringRangeOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

import { AbstractRange } from '../abstract';
import { ShuffleRangeOptionsT, ShuffleRangeGeneratorT } from '../types';
export default class ShuffleRange extends AbstractRange<ShuffleRangeOptionsT, ShuffleRangeGeneratorT> {
    constructor(options: ShuffleRangeOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

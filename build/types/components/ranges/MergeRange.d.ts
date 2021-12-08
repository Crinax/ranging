import { AbstractRange } from '../abstract';
import { MergeRangeGeneratorT, MergeRangeOptionsT } from '../types';
export default class MergeRange extends AbstractRange<MergeRangeOptionsT, MergeRangeGeneratorT> {
    constructor(options: MergeRangeOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

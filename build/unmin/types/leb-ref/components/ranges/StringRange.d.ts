import { AbstractRange } from '../abstract';
import { StringRangeOptionsT, StringRangeGeneratorT } from '../types';
export default class StringRange extends AbstractRange<StringRangeOptionsT, StringRangeGeneratorT> {
    constructor(options: StringRangeOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

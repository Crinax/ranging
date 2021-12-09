import { AbstractRange } from "../abstract";
import { CharRangeGeneratorT, CharRangeOptionsT } from '../types';
export default class CharRange extends AbstractRange<CharRangeOptionsT, CharRangeGeneratorT> {
    constructor(options?: CharRangeOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

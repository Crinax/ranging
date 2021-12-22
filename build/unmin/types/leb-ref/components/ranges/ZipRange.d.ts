import { AbstractRange } from '../abstract';
import { ZipRangeOptionsT, ZipRangeGeneratorT } from '../types';
export default class ZipRange extends AbstractRange<ZipRangeOptionsT, ZipRangeGeneratorT> {
    constructor(options: ZipRangeOptionsT);
    get dict(): any;
    [Symbol.iterator](): Generator<any, void, unknown>;
}

import { AbstractRange } from '../abstract';
import { NumberRangeGeneratorT, NumberRangeOptionsT } from '../types';
export default class NumberRange extends AbstractRange<NumberRangeOptionsT, NumberRangeGeneratorT> {
    constructor(options?: NumberRangeOptionsT);
    get sum(): number;
    get product(): number;
    [Symbol.iterator](): Generator<any, void, unknown>;
}

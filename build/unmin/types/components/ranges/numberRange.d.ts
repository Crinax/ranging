import AbstractRange from './abstractRange';
import { NumberRangeOptionsT } from '../types';
declare class NumberRange extends AbstractRange<number> {
    protected options: NumberRangeOptionsT;
    constructor(options?: NumberRangeOptionsT);
    get sum(): number;
    [Symbol.iterator](): Iterator<number>;
}
export default NumberRange;

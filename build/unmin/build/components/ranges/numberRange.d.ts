import AbstractRange from './abstractRange';
import { NumberRangeOptionsT } from '../types';
declare class NumberRange extends AbstractRange<number, number> {
    protected options: NumberRangeOptionsT;
    constructor(options: NumberRangeOptionsT);
    float(value: boolean): this;
    get sum(): number;
    [Symbol.iterator](): Iterator<number>;
}
export default NumberRange;

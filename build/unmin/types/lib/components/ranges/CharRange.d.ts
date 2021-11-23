import AbstractRange from './AbstractRange';
import { CharRangeOptionsT } from '../types';
declare class CharRange extends AbstractRange<string> {
    protected options: CharRangeOptionsT;
    constructor(options?: CharRangeOptionsT);
    [Symbol.iterator](): Iterator<string>;
}
export default CharRange;

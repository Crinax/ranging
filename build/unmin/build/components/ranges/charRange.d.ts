import AbstractRange from './abstractRange';
import { CharRangeOptionsT } from '../types';
declare class CharRange extends AbstractRange<string, string> {
    protected options: CharRangeOptionsT;
    constructor(options: CharRangeOptionsT);
    [Symbol.iterator](): Iterator<string>;
}
export default CharRange;

import AbstractRange from './abstractRange';
import { StringRangeOptionsT } from '../types';
declare class StringRange extends AbstractRange<string> {
    protected options: StringRangeOptionsT;
    constructor(options: StringRangeOptionsT);
    [Symbol.iterator](): Iterator<string>;
}
export default StringRange;

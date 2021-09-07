import AbstractRange from './abstractRange';
import { StringRangeOptionsT } from '../types';
declare class StringRange extends AbstractRange<number, string> {
    protected options: StringRangeOptionsT;
    constructor(options: StringRangeOptionsT);
    source(source: string): this;
    [Symbol.iterator](): Iterator<string>;
}
export default StringRange;

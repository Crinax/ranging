import AbstractRange from './AbstractRange';
import { ColorRangeOptionsT } from '../types';
declare class ColorRange extends AbstractRange<string> {
    constructor(options?: ColorRangeOptionsT);
    [Symbol.iterator](): Iterator<string>;
}
export default ColorRange;
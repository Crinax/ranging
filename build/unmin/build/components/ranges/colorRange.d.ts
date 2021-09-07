import AbstractRange from './abstractRange';
import { ColorRangeOptionsT } from '../types';
declare class ColorRange extends AbstractRange<string, string> {
    constructor(options: ColorRangeOptionsT);
    [Symbol.iterator](): Iterator<string>;
}
export default ColorRange;

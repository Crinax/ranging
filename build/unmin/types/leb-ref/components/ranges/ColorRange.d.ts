import { AbstractRange } from "../abstract";
import { ColorRangeGeneratorT, ColorRangeOptionsT } from '../types';
export default class ColorRange extends AbstractRange<ColorRangeOptionsT, ColorRangeGeneratorT> {
    constructor(options?: ColorRangeOptionsT);
    [Symbol.iterator](): Generator<any, void, unknown>;
}

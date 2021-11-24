import AbstractRangeGenerator from './AbstractRangeGenerator';
import { OptionsType } from '../types';
export default abstract class AbstractRange<OptionsT, GeneratorT> extends AbstractRangeGenerator<GeneratorT> {
    protected options: OptionsType<OptionsT>;
    constructor(options: OptionsType<OptionsT>);
    reduce(f: (prevItem: any, currItem: any, index: number) => any, initial?: any): any;
    get length(): number;
    get iterator(): import("../types/generators/RangeGeneratorT").default<import("../types/generators/index").GeneratorType<GeneratorT>>;
    get stringify(): any;
}

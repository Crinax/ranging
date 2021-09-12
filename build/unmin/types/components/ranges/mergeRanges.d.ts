import AbstractRange from './abstractRange';
import { MergeRangesOptionsT } from '../types';
declare class MergeRanges extends AbstractRange<any> {
    protected options: MergeRangesOptionsT;
    constructor(options: MergeRangesOptionsT);
    [Symbol.iterator](): Iterator<any>;
}
export default MergeRanges;

import AbstractRange from './abstractRange';
import { CombineRangesOptionsT } from '../types';
declare class CombineRange extends AbstractRange<any> {
    protected options: CombineRangesOptionsT;
    constructor(options: CombineRangesOptionsT);
    get merged(): any;
    [Symbol.iterator](): Iterator<any>;
}
export default CombineRange;

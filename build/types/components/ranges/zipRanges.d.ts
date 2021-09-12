import AbstractRange from './abstractRange';
import { ZipRangesOptionsT } from '../types';
declare class ZipRanges extends AbstractRange<any> {
    protected options: ZipRangesOptionsT;
    constructor(options: ZipRangesOptionsT);
    get merged(): any;
    [Symbol.iterator](): Iterator<any>;
}
export default ZipRanges;

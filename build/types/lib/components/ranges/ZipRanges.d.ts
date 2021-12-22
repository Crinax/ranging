import AbstractRange from './AbstractRange';
import { ZipRangesOptionsT } from '../types';
declare class ZipRanges extends AbstractRange<any> {
    protected options: ZipRangesOptionsT;
    constructor(options: ZipRangesOptionsT);
    /**
     * @deprecated
     */
    get merged(): any;
    get dict(): any;
    [Symbol.iterator](): Iterator<any>;
}
export default ZipRanges;

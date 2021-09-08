import { UnknownRangeOptionsT } from '../types';
declare abstract class AbstractRange<ItemT> {
    protected options: UnknownRangeOptionsT;
    reduce(f: (prevItem: ItemT, currItem: ItemT, index: number) => any, initial?: any): any;
    get length(): number;
    [Symbol.iterator](): Iterator<ItemT>;
}
export default AbstractRange;

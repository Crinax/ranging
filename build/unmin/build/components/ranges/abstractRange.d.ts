import { UnknownRangeOptionsT } from '../types';
declare abstract class AbstractRange<EdgeT, ItemT, DateT = EdgeT> {
    protected options: UnknownRangeOptionsT;
    end(value: EdgeT | DateT): this;
    start(value: EdgeT): this;
    step(value: number): this;
    count(value: number): this;
    map(f: (item: ItemT, index: number) => any): this;
    filter(f: (item: ItemT, index: number) => boolean): this;
    reduce(f: (prevItem: ItemT, currItem: ItemT, index: number) => any, initial?: any): any;
    get length(): number;
    [Symbol.iterator](): Iterator<ItemT>;
}
export default AbstractRange;

import AbstractRange from './abstractRange';
import { MergeRangesOptionsT } from '../types';

class MergeRanges extends AbstractRange<any> {

    constructor(protected options: MergeRangesOptionsT) {
        super();
    }

    *[Symbol.iterator](): Iterator<any> {
        const {
            ranges,
            step = 1,
            count,
            map,
            filter
        } = this.options;
        let elementIndex = 0;
        let extIndex = 1;
        const getMappedValue = (map: ((item: any, index: number) => any) | undefined, element: any, index: number) => {
            if (map) return map(element, index)
            else return element;
        }
        for (let rangeIndex = 0; rangeIndex < ranges.length; rangeIndex += 1) {
            for (let element of ranges[rangeIndex]) {
                if (extIndex % step !== 0) {
                    extIndex++;
                    continue;
                } else {
                    if (filter) {
                        if (!filter(element, elementIndex - 1)) continue;
                    }
                    if (map) yield map(element, elementIndex)
                    else yield element;
                }
                elementIndex++;
                extIndex++;
                if (count && elementIndex == count) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

export default MergeRanges;
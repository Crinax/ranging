import AbstractRange from './abstractRange';
import { CombineRangesOptionsT } from '../types';

class CombineRange extends AbstractRange<any> {
    constructor(protected options: CombineRangesOptionsT) {
        super();
    }
}

export default CombineRange;

import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from "../abstractDateRange";

class MonthRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super('M', options);
  }
}

export default MonthRange;
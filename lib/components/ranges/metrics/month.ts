import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from "../AbstractDateRange";

class MonthRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super('M', options);
  }
}

export default MonthRange;
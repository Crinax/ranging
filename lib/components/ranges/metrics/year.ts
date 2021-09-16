import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from "../AbstractDateRange";

class YearRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super('Y', options);
  }
}

export default YearRange;
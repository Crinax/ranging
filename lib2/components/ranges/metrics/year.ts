import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from "../abstractDateRange";

class YearRange extends AbstractDateRange {
  constructor(options: DateRangeOptionsT) {
    super('Y', options);
  }
}

export default YearRange;
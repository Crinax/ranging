import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from "../AbstractDateRange";

class DayRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super('D', options);
  }
}

export default DayRange;
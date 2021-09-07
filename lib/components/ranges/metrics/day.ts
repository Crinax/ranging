import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from "../abstractDateRange";

class DayRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super('D', options);
  }
}

export default DayRange;
import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from "../abstractDateRange";

class HourRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super('h', options);
  }
}

export default HourRange;
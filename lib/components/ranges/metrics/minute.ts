import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from "../AbstractDateRange";

class MinuteRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super('m', options);
  }
}

export default MinuteRange;
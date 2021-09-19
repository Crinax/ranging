import { DateRangeOptionsT } from "../../types";
import AbstractDateRange from "../AbstractDateRange";

class SecondRange extends AbstractDateRange {
  constructor(options?: DateRangeOptionsT) {
    super('s', options);
  }
}

export default SecondRange;
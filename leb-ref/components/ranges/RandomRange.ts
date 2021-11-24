import { AbstractRandomRange } from "../abstract";
import { GetRT } from "../abstract/AbstractRandomRange";
import NumberRange from "./NumberRange";

class RandomNumbers extends AbstractRandomRange<NumberRange> {
  constructor(options?: GetRT<NumberRange>) {
    super(
      options ||
      { start: -Infinity, end: Infinity, count: Infinity }
    )
  }
}
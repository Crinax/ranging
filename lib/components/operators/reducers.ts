import { add } from "../utils/fixNumberOperations";
import { Reducer } from "../abstract";

export const sum: Reducer<number, number> = (acc, value) => add(acc, value);

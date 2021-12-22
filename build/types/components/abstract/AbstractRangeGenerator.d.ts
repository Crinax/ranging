import { RangeGeneratorT, GeneratorType } from "../types/generators";
export default abstract class AbstractRangeGenerator<T> {
    [Symbol.iterator](): RangeGeneratorT<GeneratorType<T>>;
}

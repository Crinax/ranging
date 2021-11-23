import { RangeGeneratorT, GeneratorType } from "../types/generators";
declare abstract class AbstractRangeGenerator<T> {
    [Symbol.iterator](): RangeGeneratorT<GeneratorType<T>>;
}
export default AbstractRangeGenerator;

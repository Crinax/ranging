import RangeGeneratorT from "./RangeGeneratorT";
import NumberRangeGeneratorT from './NumberRangeGeneratorT';
import StringRangeGeneratorT from './StringRangeGeneratorT';
import CharRangeGeneratorT from './CharRangeGeneratorT';
import DateRangeGeneratorT from './DateRangeGeneratorT';
import ColorRangeGeneratorT from './ColorRangeGeneratorT';

//TODO: Add MergeRangesGeneratorT and ZipRangesGeneratorT

type GeneratorType<T> = T extends RangeGeneratorT<infer T> ? T : never;

export {
  RangeGeneratorT,
  GeneratorType,
  NumberRangeGeneratorT,
  StringRangeGeneratorT,
  CharRangeGeneratorT,
  DateRangeGeneratorT,
  ColorRangeGeneratorT,
}
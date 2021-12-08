import RangeGeneratorT from "./RangeGeneratorT";
import NumberRangeGeneratorT from './NumberRangeGeneratorT';
import StringRangeGeneratorT from './StringRangeGeneratorT';
import CharRangeGeneratorT from './CharRangeGeneratorT';
import DateRangeGeneratorT from './DateRangeGeneratorT';
import ColorRangeGeneratorT from './ColorRangeGeneratorT';
import MergeRangeGeneratorT from './MergeRangeGeneratorT';
import ZipRangeGeneratorT from './ZipRangeGeneratorT';
import AnyRangeGeneratorT from './AnyRangeGeneratorT';
import RandomRangeGeneratorT from './RandomRangeGeneratorT';
import ShuffleRangeGeneratorT from './ShuffleRangeGeneratorT';

type GeneratorType<T> = T extends RangeGeneratorT<infer T> ? T : never;

export {
  AnyRangeGeneratorT,
  RangeGeneratorT,
  GeneratorType,
  NumberRangeGeneratorT,
  StringRangeGeneratorT,
  CharRangeGeneratorT,
  DateRangeGeneratorT,
  ColorRangeGeneratorT,
  MergeRangeGeneratorT,
  ZipRangeGeneratorT,
  RandomRangeGeneratorT,
  ShuffleRangeGeneratorT,
}
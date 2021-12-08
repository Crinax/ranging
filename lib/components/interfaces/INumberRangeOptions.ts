import IRangeOptions from './IRangeOptions';

export default interface INumberRangeOptions extends IRangeOptions<number, number> {
  float?: boolean;
}
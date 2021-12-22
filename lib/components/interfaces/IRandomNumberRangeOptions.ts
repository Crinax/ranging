import INumberRangeOptions from './INumberRangeOptions';
import IRandomRangeOptions from './IRandomRangeOptions';

export default interface IRandomNumberRangeOptions extends IRandomRangeOptions<INumberRangeOptions> {
  float: boolean;
}
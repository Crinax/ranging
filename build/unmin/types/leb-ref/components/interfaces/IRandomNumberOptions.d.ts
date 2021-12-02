import INumberRangeOptions from './INumberRangeOptions';
import IRandomRangeOptions from './IRandomRangeOptions';
export default interface IRandomNumberOptions extends IRandomRangeOptions<INumberRangeOptions> {
    float: boolean;
}

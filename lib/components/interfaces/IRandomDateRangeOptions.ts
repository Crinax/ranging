import IDateRangeOptions from './IDateRangeOptions';
import IRandomRangeOptions from './IRandomRangeOptions';

export default interface IRandomDateRangeOptions extends IRandomRangeOptions<IDateRangeOptions> {
  end: Date;
  weekdays?: number[];
  leapYear?: boolean;
}
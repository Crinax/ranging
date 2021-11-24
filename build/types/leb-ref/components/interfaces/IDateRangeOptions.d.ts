import IRangeOptions from './IRangeOptions';
export default interface IDateRangeOptions extends IRangeOptions<Date, Date, number> {
    weekdays?: number[];
    leapYear?: boolean;
}

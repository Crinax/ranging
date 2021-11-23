import IRangeOptions from './IRangeOptions';
export default interface IDateRangeOptions extends IRangeOptions<Date, Date, number> {
    weakdays?: number[];
    leapYear?: boolean;
}

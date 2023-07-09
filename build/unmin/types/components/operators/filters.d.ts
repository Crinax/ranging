import { FilterCondition } from "../abstract";
export declare const isLeapYear: FilterCondition<Date>;
export declare const hasWeekday: (...weekdays: number[]) => FilterCondition<Date>;
export declare const keepUnique: <T>() => FilterCondition<T>;

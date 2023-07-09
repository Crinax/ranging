import { FilterCondition } from "../abstract";

export const isLeapYear: FilterCondition<Date> = (val) => {
  const year = val.getFullYear();

  return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
}

export const hasWeekday = (...weekdays: number[]): FilterCondition<Date> => (val) => weekdays.includes(val.getDay());

export const keepUnique = <T>(): FilterCondition<T> => {
  const _store: T[] = [];

  return (value) => !_store.includes(value) && (_store.push(value), true);
}

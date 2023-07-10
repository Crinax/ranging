# ranging (JavaScript library). NEW Syntax available!!!

> **Range helper classes based on iterators**

## Installation

Using **npm**:

```sh
npm install ranging
# or
npm i ranging
```

Using **yarn**:

```sh
yarn add ranging
```

## Important!

- **JavaScript** supports only **ES5 and older**
- **Typescript** supports only for **v1.1.0+**
- **New Syntax** supports only for **v4.0.0+ (and chain mode also)**

## Examples

### Importing

```javascript
const { NumberRange, WalkerRange } = require('ranging');
// ES
import { NumberRange, WalkerRange } from 'ranging';
```

For NodeJS module you should use:

```javascript
// I tried to realize it, but previous import does not work :(
// Use this please
import { NumberRange, WalkerRange } from 'ranging/index.mjs';
```

---

## Number ranges

### Integers

**A list of integers from 1 to 10 inclusive**
```javascript
const { NumberRange } = require('ranging');

const sameIntegers = [...new NumberRange(1 /* from */, 10 /* to */)];
```

**Integers ranged with step of 2**
```javascript
const integers = [
  ...new NumberRange(1 /* from */, 10 /* to */, 2 /* step */),
];
// integers: [ 1, 3, 5, 7, 9 ]
```

### Floating point numbers


```javascript
let floats = [
  ...new NumberRange(
    2,      // from
    5,      // to
    0.5,    // step
    true    // use exact addition?
  ),
];
console.log(floats);
// [ 2, 2.5, 3, 3.5, 4, 4.5, 5 ]

floats = [
  ...new NumberRange(2, 5, undefined, true),
];
console.log(floats);
// [ 2, 3, 4, 5 ]
```

> *Note: sum fractional floating point numbers with `NumberRange.reduce(sum)`.*<br>
> **Approximation error**
>
> ```javascript
> let sum = 0;
> for (let i = 1; i <= 20; i++) {
>   sum += i / 10;
> }
> console.log(sum);
> // 20.999999999999996
> ```
>
> **Use of NumberRange.reduce(sum) (expected answer)**
>
> ```javascript
> import { sum, NumberRange } from 'ranging';
>
> console.log(
>   ...new NumberRange(0.1, 2, 0.1).
>     .reduce(sum),
> );
> // 21
> ```

## Infinite generator

**Use of `NumberRange` without specifying end**

```javascript
let counter = 0;
const result = [];

for (let i of new NumberRange(1005)) {
  const hex = i.toString(16);
  if (hex == hex.split('').reverse().join('')) {
    counter++;
    result.unshift(i);
  }
  if (counter === 10) break;
}
console.log(result);
// [ 1156, 1140, 1124, 1108, 1092, 1076, 1060, 1044, 1028, 1011 ]
```

Starting from 1005, executes until finds 10 numbers that are palindromes in hexadecimal notation. The result is presented in descending order.

## Other standard operations

You can use the following operations:
`filter`, `map`, `reduce`,
`take`, `from`, `to`,
`find`, `count`, `combine`,
`shuffle`, `groupBy`, `collect`.

- `filter` is needed to get only those elements that satisfy the predicate (returns range with filtered values).
- `map` is needed to replace values to another (returns range with replaced values).
- `reduce` is needed to calculate value using all values from range (returns range with calculated value).
- `take` is needed to take only specified quantity of elements (returns range with values).
- `from` is needed to take all the elements after the predicate becomes true (returns range with values).
- `to` is needed to take all the elements before the predicate becomes true (returns range with values).
- `find` is needed to find value by predicate (returns range with the founded value).
- `count` is needed to find count of elements in range (returns range with count of elements).
- `combine` is needed to combine elements into array (returns range of arrays of two different values).
- `shuffle` is needed to shuffle current range, the `picking` parameter is used to indicate the "entropy": the larger it is,
the more random, with `picking === 1` shuffle does not work (returns range with shuffled values).
- `groupBy` is needed to grouping elements by quantity (returns range with grouped values).
- `collect` is used to collect all elements to array (returns array of elements from range).

### Standard operations predicates and callbacks

`filter`, `from`, `to`, `find` take predicate with following signature:

```typescript
type Predicate<T> = (value: T, index: number) => boolean; // where T is the type of elements in range
```

`reduce` takes callback with signature:

```typescript
type Reducer<A, T> = (accamulator: A, value: T, index: number) => A;
// where T is the type of elements in range
// where A is the type of reduce operation result
```

`map` takes callback with default functor signature:

```typescript
type Mapper<T, R> = (value: T, index: number) => R;
// where T is the type of elements in range
// where R is the type of map operation result
```

### Usage

**Every operation returns range with the same operations (except `collect`):**

```javascript
const { NumberRange } = require('ranging');

console.log(
  new NumberRange(0, 9)
    .map((el) => el ** 2)
    .reduce((acc, value) => acc + value.toString(), '')
    .collect(),
);
```

You can also use as many operations as you need:

```javascript
console.log(
  new NumberRange(0, 9)
    .map((el) => el * 7)
    .filter((el) => el % 2 === 1)
    .map((el) => el * 21)
    .collect(),
);
// [147, 441, 735, 1029, 1323]
```

## Walker Ranges

**Iteration over a passed iterable element**

```javascript
const { WalkerRange } = require('ranging');

console.log([
  ...new WalkerRange('Hello world'),
]);
// ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

console.log([
  ...new WalkerRange([1, 2, 3, 4, 5])
    .map((el) => el * 3)
    .filter((el) => el % 2 === 0),
])
// [6, 12]
```

# Date Ranges
## Simple Day Range
```javascript
const { DayRange } = require('ranging');

console.log(
  new DayRange(new Date(), undefined, 5)
    .take(5)
    .collect(),
);

/*
    [
      2023-02-01T00:00:00.000Z,
      2023-02-06T00:00:00.000Z,
      2023-02-11T00:00:00.000Z,
      2023-02-16T00:00:00.000Z,
      2023-02-21T00:00:00.000Z
    ]
*/
```

## Other time units
You can use various time units, such as `SecondRange`, `MinuteRange` and etc.
```javascript
const { YearRange, isLeapYear } = require('ranging');

console.log([
  ...new YearRange()
    .filter(isLeapYear)
    .take(10)
])

// [
//   2024-07-08T22:17:30.270Z,
//   2028-07-08T22:17:30.270Z,
//   2032-07-08T22:17:30.270Z,
//   2036-07-08T22:17:30.270Z,
//   2040-07-08T22:17:30.270Z,
//   2044-07-08T22:17:30.270Z,
//   2048-07-08T22:17:30.270Z,
//   2052-07-08T22:17:30.270Z,
//   2056-07-08T22:17:30.270Z,
//   2060-07-08T22:17:30.270Z
// ]
```

## Operators

**Operators are the functions, which could be used to filtering, mapping or reducing ranges**

### Filter Operators (Predicates)

- `isLeapYear` -- returns `true` if the year of the transmitted date is a leap year.
- `hasWeekday` -- returns `true` if the day of the week of the transmitted date coincides with the specified days.
- `keepUnique` -- returns `true` if the value is unique in the current state.

**Examples**

```javascript
const { NumberRange, keepUnique } = require('ranging');

const keepUniqueWithState = keepUnique();

console.log(
  new NumberRange(0, 10)
    .map((el) => el % 2)
    .filter(keepUniqueWithState)
    .collect(),
);
// [0, 1]
```

```javascript
const { DayRangem, hasWeekday } = require('ranging');

console.log(
  new DayRange(new Date('2023-07-08'))
    .filter(hasWeekday(0, 6)) // Get only Sunday and Saturday
    .take(4)
    .collect(),
);

// [
//   2023-07-08T00:00:00.000Z,
//   2023-07-09T00:00:00.000Z,
//   2023-07-15T00:00:00.000Z,
//   2023-07-16T00:00:00.000Z
// ]
```

### Mapper Operators (Functors)

No mapper operators yet...

### Reducer Operators

- `sum` -- calculate safety sum of numbers (slower than a + b)

---

## Merging ranges

Glue ranges together.

```javascript
const { NumberRange, WalkerRange, MergeRange } = require('ranging');

const numbers = new NumberRange(undefined, 5);
const walker = new WalkerRange('hello');

const merging = new MergeRange((_) => _, [numbers, walker]);

console.log(...merging);
// 0 1 2 3 4 5 h e l l o
```

You can use rule function to specify how ranges will be merging:

```javascript
const { NumberRange, WalkerRange, MergeRange } = require('ranging');

const numbers = new NumberRange(undefined, 5);
const walker = new WalkerRange('hello');

const merging = new MergeRange(
  (_, index, { switchTo }) => switchTo(index % 2),
  [numbers, walker]
);

console.log(...merging);
// 0 1 h 2 e 3 l 4 l 5 o
```

## Zipping ranges

Works as the known function from other programming languages.

```javascript
const { NumberRange, WalkerRange, ZipRange } = require('ranging');

const numbers = new NumberRange(1);
const chars = new WalkerRange('Hello');

const zipped = new ZipRange(chars, numbers);

console.log(...zipped);
// { H: 1 } { e: 2 } { l: 3 } { l: 4 } { o: 5 }
```
*Note:* `numbers` is set up as an infinite iterator, but zipping it with `chars` limits it to just 5 entries.

## Combining Ranges

```javascript
const { NumberRange, WalkerRange } = require('ranging');

console.log(
  new NumberRange()
    .combine(new WalkerRange('hello'))
    .collect(),
);
// [ [ 0, 'h' ], [ 1, 'e' ], [ 2, 'l' ], [ 3, 'l' ], [ 4, 'o' ] ]
```

# License
Copyright © 2021 by Kirill (Crinax), Eugene Gritz (maycircle). [MIT license](https://github.com/Crinax/rangeJS/blob/main/LICENSE).

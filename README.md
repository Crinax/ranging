# ranging (JavaScript library)
> **Range helper classes based on iterators**

## Installation
Using **npm**:
```
npm install ranging
```
Using **yarn**:
```
yarn add ranging
```

# Examples
## Importing
```javascript
const { Range } = require('ranging');
// ES6+
import { Range } from 'ranging';
```
**Import specific modules**
```javascript
const { NumberRange, StringRange } = require('ranging');
// ES6+
import { NumberRange, StringRange } from 'ranging';
```
---
# Number ranges
## Integers
**A list of integers from 1 to 10 inclusive**
```javascript
const { NumberRange } = require('ranging');

const integers = [...new NumberRange().start(1).end(10)];
// integers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// it's same as
const sameIntegers = [...new NumberRange({ start: 1, end: 10 })];

// and same as
const sameIntegersTwo = [...new NumberRange(1, 10)];
```
**Integers ranged with step of 2**
```javascript
const integers = [
  ...new NumberRange()
    .start(1)
    .end(10)
    .step(2)
];
// integers: [ 1, 3, 5, 7, 9 ]

// it's same as
const sameIntegers = [...new NumberRange(1, 10, 2)];
```

## Floating point numbers
```javascript
let floats = [
  ...new NumberRange()
    .start(2)
    .end(5)
    .step(0.5)
    .isFloat(true)
];
console.log(floats);
// [ 2, 2.5, 3, 3.5, 4, 4.5, 5 ]

floats = [
  ...new NumberRange()
    .start(2)
    .end(5)
    .isFloat(true)
];
console.log(floats);
// [ 2, 3, 4, 5 ]
```
> *Note: sum fractional floating point numbers with `NumberRange.sum`.*<br>
> **Approximation error**
> ```javascript
> let sum = 0;
> for (let i = 1; i <= 20; i++) {
>   sum += i / 10;
> }
> console.log(sum);
> // 20.999999999999996
> ```
> **Use of NumberRange.sum (expected answer)**
> ```javascript
> console.log(
>  new NumberRange()
>    .start(0.1)
>    .end(2)
>    .step(0.1)
>    .isFloat(true)
>    .sum
> );
> // 21
> ```

## Infinite generator
**Use of `NumberRange.integer` without specifying end**
```javascript
let counter = 0;
const result = [];

for (let i of new NumberRange({ start: 1005 })) {
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

# Char Ranges
```javascript
const { CharRange } = require('ranging');

console.log([
  ...new CharRange()
]);
// ['A', ..., 'Z']
```
So you can use this like NumberRange
```javascript
console.log([
  ...new CharRange().start('a').end('f').step(2) // Note: step is an integer number
]);
// ['a', 'c', 'e']
// or
console.log([
  ...new CharRange({
    start: 'a',
    end: 'f',
    step: 2
  })
]);
// or
console.log([...new CharRange('a', 'f', 2)]);
```

# String Ranges
This is almost the same as CharRange, only iterates over the passed string
```javascript
const { StringRange } = require('ranging');

console.log([
  ...new StringRange().source('Hello world')
])
// ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

console.log([
  ...new StringRange({
    source: 'Hello world',
    start: 6,
    step: 2
  })
])
// [ ' ', 'o', 'l' ]
```

# Date Ranges
## Main date range
```javascript
const { DateRange } = require('ranging');

console.log([
  ...new DateRange({
    start: new Date(),
    count: 5, // you can use `count` in all ranges if you set this, then that uses instead `end` property
    step: 5
  })
])
// [
//   2021-08-18T09:23:55.670Z,
//   2021-08-18T09:23:55.675Z,
//   2021-08-18T09:23:55.680Z,
//   2021-08-18T09:23:55.685Z,
//   2021-08-18T09:23:55.690Z
// ]
```

## Sub ranges
You can use sub ranges, that names `[timeUnit]Range` for example: `SecondRange`, `MinuteRange`, etc
```javascript
const { YearRange } = require('ranging');

console.log([
  ...new YearRange()
    .start(new Date())
    .step(1)
    .leepYear(true) // use this that your range consisted only of leap years
    .count(10)
])
// [
//   2024-08-18T09:34:01.866Z,
//   2028-08-18T09:34:01.866Z,
//   2032-08-18T09:34:01.866Z,
//   2036-08-18T09:34:01.866Z,
//   2040-08-18T09:34:01.866Z
// ]
```

# Map, filter, length, reduce, sum (only NumberRange)
## Map
```javascript
const { StringRange } = require('ranging');

const word = new StringRange().source('Some bad word').map((item) => (item === ' ' ? item : 'x'));
// or 
const word2 = new StringRange('Some bad word', (item) => (item === ' ' ? item : 'x'));

console.log([...word].join(''))
// xxxx xxx xxxx
```

## Filter
```javascript
const { NumberRange } = require('ranging');

const someSeq = new NumberRange({
  start: 10,
  end: 40,
  filter: (item) => item % 3 === 0 && item % 5 === 0
});

console.log([...someSeq]);
// [ 15, 30 ]
```

## Reduce
```javascript
const { StringRange } = require('ranging');

const word = new StringRange({
  source: 'Some bad word',
  map: (item) => (item === ' ' ? item : 'x')
});

console.log(word.reduce((prevValue, currValue) => prevValue + currValue, ''))
// xxxx xxx xxxx
```

## Length
```javascript
const { NumberRange } = require('ranging');

const someSeq = new NumberRange().end(9);
// or
const someSeq2 = new NumberRange(9);

console.log(someSeq.length);
// 9
```

## Sum
This getter is designed to correctly sum floating point numbers
```javascript
const { NumberRange } = require('ranging');

console.log(
  new NumberRange()
    .start(0.1)
    .end(2)
    .step(0.1)
    .isFloat(true)
    .sum
);
// 21
// or
console.log(new NumberRange(0.1, 2, 0.1).isFloat(true).sum)
// 21
```

# License
Copyright (c) 2021 Kirill (Crinax), Eugen Gritz (maycircle). [MIT license](https://github.com/Crinax/rangeJS/blob/main/LICENSE).

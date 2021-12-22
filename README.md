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
const { NumberRange, StringRange } = require('ranging');
// ES
import { NumberRange, StringRange } from 'ranging';
```
## Typescript support (only v1.1.0+)
- There is support for TS with a specification higher than ES5
---
# Number ranges
## Integers
**A list of integers from 1 to 10 inclusive**
```javascript
const { NumberRange } = require('ranging');

// it's same as
const sameIntegers = [...new NumberRange({ start: 1, end: 10 })];
```
**Integers ranged with step of 2**
```javascript
const integers = [
  ...new NumberRange({
    start: 1,
    end: 10,
    step: 2
  })
];
// integers: [ 1, 3, 5, 7, 9 ]
```

## Floating point numbers
```javascript
let floats = [
  ...new NumberRange({
    start: 2,
    end: 5,
    step: 0.5,
    float: true
  })
];
console.log(floats);
// [ 2, 2.5, 3, 3.5, 4, 4.5, 5 ]

floats = [
  ...new NumberRange({
    start: 2,
    end: 5,
    float: true
  })
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
>  new NumberRange({
>     start: 0.1,
>     end: 2,
>     step: 0.1
>   }).sum
> );
> // 21
> ```

## Infinite generator
**Use of `NumberRange` without specifying end**
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
// [ 'A', ..., 'Z' ]
```
Simillary, you can use options like `step`, `count` and etc.
```javascript
console.log([
  ...new CharRange({
    start: 'a',
    end: 'f',
    step: 2
  })
]);
// [ 'a', 'c', 'e' ]
```

# String Ranges
**Iteration over a passed string**
```javascript
const { StringRange } = require('ranging');

console.log([
  ...new StringRange({ source: 'Hello world' })
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
## Simple Date Range
```javascript
const { DateRange } = require('ranging');

console.log([
  ...new DateRange({
    start: new Date(),
    count: 5, // if given, overrides `step`
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

## Other time units
You can use various time units, such as `SecondRange`, `MinuteRange` and etc.
```javascript
const { YearRange } = require('ranging');

console.log([
  ...new YearRange({
    step: 1,
    leepYear: true,
    count: 10
  })
])

// [
//   2024-08-18T09:34:01.866Z,
//   2028-08-18T09:34:01.866Z,
//   2032-08-18T09:34:01.866Z,
//   2036-08-18T09:34:01.866Z,
//   2040-08-18T09:34:01.866Z
// ]
```

# Less known solutions
## Color Range
```javascript
const { ColorRange } = require('ranging');

console.log(...new ColorRange({ end: '#00000F' }));
// #000000 #000001 #000002 #000003 #000004 #000005 #000006 #000007 #000008 #000009 #00000a #00000b #00000c #00000d #00000e #00000f
```

<br>
<hr>

## Merging ranges
Glue ranges together.
```javascript
const { NumberRange, CharRange, MergeRanges } = require('./range');

const numbers = new NumberRange({ end: 5 });
const chars = new CharRange({ end: 'D' });

const merging = new MergeRanges({ ranges: [numbers, chars] });

console.log(...merging);
// 0 1 2 3 4 5 A B C D
```

## Combining (zipping) ranges
Works as the known function from other programming languages.
```javascript
const { NumberRange, CharRange, ZipRanges } = require('./range');

const numbers = new NumberRange({ start: 1 });
const chars = new CharRange({ end: 'D' });

const zipped = new ZipRanges({ keys: chars, values: numbers });

console.log(...zipped);
// {'A': 1}
// {'B': 2}
// {'C': 3}
// {'D': 4}

// or
console.log(zipped.ranged);
// {
//   'A': 1,
//   'B': 2,
//   'C': 3,
//   'D': 4
// }
```
*Note:* `numbers` is set up as an infinite iterator, but zipping it with `chars` limits it to just 4 entries.

# Range Functions
## Map
```javascript
const { StringRange } = require('ranging');

const word = new StringRange({
  source: 'Crypted.',
  map: (x) => String.fromCharCode(x.charCodeAt(0) + 1)
});

console.log([...word].join(''))
// Dszqufe/
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

const someSeq = new NumberRange({ end: 9 });

console.log(someSeq.length);
// 9
```

## Sum (only `NumberRange`)
```javascript
const { NumberRange } = require('ranging');

console.log(
  new NumberRange({
    start: 0.1,
    end: 2,
    step: 0.1,
    float: true
  }).sum
);
// 21
```

# License
Copyright (c) 2021 by Kirill (Crinax), Eugene Gritz (maycircle). [MIT license](https://github.com/Crinax/rangeJS/blob/main/LICENSE).

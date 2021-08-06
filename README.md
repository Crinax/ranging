# RangeJS (JavaScript library)
> **Range helper functions & classes based on generators**

## Installation
Using **npm**:
```
npm install rangejs
```
Using **yarn**:
```
yarn add rangejs
```

# Examples
## Importing
```javascript
// CommonJS
const { Range } = require('rangejs');

// ES6+ or TypeScript
import { Range } from 'rangejs';
```
**Import specific modules**
```javascript
const { NumberRange, StringRange } = require('rangejs');
// or
import { NumberRange, StringRange } from 'rangejs';
```
---
# Number ranges
## Integers
**A list of integers from 1 to 10 inclusive**
```javascript
const { NumberRange } = require('rangejs');

const integers = [...NumberRange.integer(1, 10)];
// integers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
**Integers ranged with step of 2**
```javascript
const integers = [...NumberRange.integer(1, 10, 2)];
// integers: [ 1, 3, 5, 7, 9 ]
```

## Floating point numbers
```javascript
const floats = [...NumberRange.float(2, 5, 0.5)];
console.log(floats);
// [ 2, 2.5, 3, 3.5, 4, 4.5, 5 ]

floats = [...NumberRange.float(2, 5)];
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
> console.log(NumberRange.sum(NumberRange.float(0.1, 2, 0.1)));
> // 21
> ```

## Infinite generator
**Use of `NumberRange.integer` without specifying end**
```javascript
let counter = 0;
const result = [];

for (let i of NumberRange.integer(1005)) {
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
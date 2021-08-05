# RangeJS (JavaScript library)
JavaScript library that helps work with ranges.
____
# Contents
1. [Introduction](#introduction)
2. [Get start](#get-start)
    * [Installation](#installation)
    * [Possible imports](#possible-imports)
3. [Number ranges](#number-ranges)
    * [Integer range](#integer-range)
    * [Float range](#float-range)
    * [Integer vs Float range](#integer-vs-float-range)
    * [Infinity number range](#infinity-number-range)
4. [Char ranges](#char-ranges)
5. [String ranges](#string-ranges)
6. [Date ranges](#date-ranges)
    * [Millisecond range](#millisecond-range)
    * [Second range](#second-range)
    * [Minute range](#minute-range)
    * [Hour range](#hour-range)
    * [Day range](#day-range)
    * [Month range](#month-range)
    * [Year range](#year-range)
7. [Range сomparison](#range-comparsion)
8. [Custom ranges](#custom-ranges)
    * [Number custom range](#number-custom-range)
    * [Char custom range](#char-custom-range)
    * [String custom range](#string-custom-range)
    * [Date custom range](#date-custom-range)
____
# Introduction
It is very common to work with different ranges, whether they are ranges of numbers or ranges of dates. And sometimes even for a range of numbers we miss the **range** function of the **Python** language, which can generate a range of numbers from **start** to **end** in **step** increments.
This library can simplify the development of services that require working with ranges of different lengths
____
# Get start
## Installation
### npm
```sh
npm install rangejs
```
Also you can use **yarn**:
### yarn
```sh
yarn add rangejs
```
## Possible imports
So, for starters, you can import the entire module if you need to use most of the features from the module
```js
const { Range } = require('rangejs');
// and you can use ES6+ import
import { Range } from 'rangejs';
```
If, however, you only need to use individual range blocks, such as range for numbers and string ranges, you can import individual blocks like this:
```js
const { NumberRange, StringRange } = require('rangejs');
// or
import { NumberRange, StringRange } from 'rangejs';
```
Finally, if you only need a single feature, you can import it, for example:
```js
const { intNumRange } = require('rangejs');
// or
import { intNumRange } from 'rangejs';
```
____
# Number ranges
## Integer range
To get a range of numbers, you must first import the module. Since this block is only about numbers, we import only the block with numbers
```js
const { NumberRange } = require('rangejs');
```
Suppose we need a range of numbers from 1 to 10 inclusive, the following code will help us get it
```js
const rangeOneToTen = [...NumberRange.integer(1, 10)];
```
This code will create an array with all numbers from `1` to `10`.
And, for example, only for even numbers in the range from `2` to `10`, you need to use the following code:
```js
const rangeTwoToTen = [...NumberRange.integer(2, 10, 2)];
```
This code will create an array with all even numbers from `2` to `10`.

## Float range
The Float range is no different from the Integer range, except for the fact that Float uses floating point numbers as arguments. Therefore, all of the examples, you can apply to the Float type as well.
```js
const floatRange = [...NumberRange.float(2, 5, 0.5)];
console.log(floatRange);
// [2, 2.5, 3, 3.5, 4, 4.5, 5]
```
For the Float range you can also choose not to set the step (by default it will be `1`)
```js
const floatRange = [...NumberRange.float(2, 5)];
// [2, 3, 4, 5]
```
It would seem, what are their differences? Let's look at the following subchapter.
## Integer vs Float range
Let's start with an example:
```js
let sumOfInteger = 0;
let sumOfFloat = 0;
for (let i = 1; i <= 20; i++) {
    sumOfInteger += i;
    sumOfFloat += i/10;
}
console.log({ sumOfInteger, sumOfFloat });
// { sumOfInteger: 210, sumOfFloat: 20.999999999999996 }
```
As you can see there was an error when adding numbers from `0.1` to `2` to the Float type. Instead of `21` we got `20.99999999999999996`.
To avoid this error when working with ranges, the `float` method, unlike the `integer` method, uses a special check, so it is a bit slower than the `integer` method.
```js
const floatRange = NumberRange.float(0.1, 2, 0.1);
const floatRangeSum = NumberRange.sum(floatRange);
console.log(floatRangeSum);
// 21
```
Why didn't we use `reduce` in this example? The problem is the same, so it is better to use `NumberRange.sum` in which you can pass the range (you can use either an array or the range itself). It will calculate the correct sum of the elements and return it.
##### Note
Never use integer range generator for a float numbers!

## Infinity number range
So, to summarize, when you create a range it is necessary to set the start value and the end value. But wait, let's check it out.
```js
const rangeTwoToTen = [...NumberRange.integer()];
```
What do you think the following code will output? You would be right if you said it would print an error, but you would be wrong if you said it would print an error because of missing parameters. Let's get to the bottom of this.

In fact, this function is capable of generating a range without parameters. The error here is quite simple - it is an infinite range, so there is not enough execution time or memory to calculate it (depending on what you use). This begs the question: why didn't I provide for this?

Let's look at an example:
```js
// returns range from 1005 to Infinity
const infinityRange = NumberRange.integer(1005);

let counter = 0;
const result = [];
for (let i of infinityRange) {
    const inBase16 = i.toString(16);
    if (inBase16 == inBase16.split('').reverse().join('')) {
        counter++;
        result.unshift(i);
    }
    if (counter === 10) break;
}
console.log(result);
// [1156, 1140, 1124, 1108, 1092, 1076, 1060, 1044, 1028, 1011]
```
After executing this code we get an array of `10` elements in the range from `1005` to infinity, which are palindromes in hexadecimal notation in descending order.

# Range (JavaScript library)
JavaScript library that helps work with ranges.
____
# Contents
1. [Introduction](#introduction)
2. [Get start](#get-start)
    * [Installation](#installation)
    * [Possible imports](#possible-imports)
3. [Number ranges](#number-ranges)
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
    * [Custom date range](#custom-date-range)
7. [Range сomparison](#range-comparsion)
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
# Number ranges

##### Note
Never use integer range generator for a float numbers!
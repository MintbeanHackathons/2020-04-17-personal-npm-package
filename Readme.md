# Personal NPM Package

Mintbean Hackathon. 

## Purpose

## Usage

**Install it:**

`npm install @fatimaaltaf/2020-04-17-personal-npm-package`

**Require it:**

`const _ = require('@fatimaaltaf/2020-04-17-personal-npm-package');`

**Call it:**

`const results = _.endValue([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: takes in two arrays and console.logs an appropriate message to the console.
* `assertEqual(actual, expected)`: series of success / failure messages printed to the console.
* `countString`: takes in a collection of items and returns counts for a specific subset of those items.
* `eqArrays(array1, array2)`: takes in two arrays and returns true or false, based on a perfect match.
* `findKeyByValue(bestMovies, value)`: finds key in an object through the value.
* `middleValue(array)`: takes in an array and return the middle-most element(s) of the given array.
* `endValue(array)`: retrieves every element except the head (first element) of the array.

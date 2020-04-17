const eqArrays = require("./eqArrays");

// Tests array
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual;

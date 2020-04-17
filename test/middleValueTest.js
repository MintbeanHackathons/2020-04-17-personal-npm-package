const assert = require("chai").assert;
const middleValue = require("../middleValue");
const assertArraysEqual = require("../assertArraysEqual");

describe("#middle#", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middleValue([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middleValue([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middleValue([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

assertArraysEqual(middleValue([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middleValue([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middleValue([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

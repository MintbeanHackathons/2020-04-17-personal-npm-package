const assert = require("chai").assert;
const assertEqual = require("../assertEqual");
const endValue = require("../endValue");

describe("#endValue#", () => {
  it("returns [Mintbean Hackathoners] for [Hello, Mintbean, Hackathoners]", () => {
    assert.deepEqual(endValue(["Hello", "Mintbean", "Hackathoners"]), [
      "Mintbean",
      "Hackathoners",
    ]);
  });
});

// TEST CODE
const words = ["Hello", "Mintbean", "Hackathoners"];
endValue(words);
assertEqual(words.length, 3);

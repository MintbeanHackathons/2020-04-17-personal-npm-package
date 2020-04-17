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
endValue(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

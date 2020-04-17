var expect = require("chai").expect;
var basicExpectedWins = require("../src/index");

describe("basicExpectedWins()", function () {
  it("should calculate the expected wins given runs scored and runs allowed", function () {
    var runsScored = 207;
    var runsAllowed = 556;
    var result = basicExpectedWins(runsScored, runsAllowed);
    var expectedWins = 0.122;

    expect(result).to.be.equal(expectedWins);
  });
});

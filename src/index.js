module.exports = function basicExpectedWins(runsScored, runsAllowed) {
  // make sure both inputs are numbers
  if (typeof runsScored !== "number" || typeof runsAllowed !== "number")
    throw new TypeError("Both runsScored and runsAllowed should be numbers");

  // calculate the expected win percentage
  result = 1 / (1 + Math.pow(runsAllowed / runsScored, 2));

  // round the pecentage to 3 decimal places and return it
  return Math.round(result * 1000) / 1000;
};

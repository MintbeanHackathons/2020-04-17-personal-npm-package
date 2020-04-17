module.exports = function basicExpectedWins(runsScored, runsAllowed) {
  if (typeof runsScored !== "number" || typeof runsAllowed !== "number")
    throw new TypeError("Both runsScored and runsAllowed should be numbers");
  result = 1 / (1 + Math.pow(runsAllowed / runsScored, 2));
  return Math.round(result * 1000) / 1000;
};

//Find key in object by the given value
const findKeyByValue = function (bestMovies, value) {
  let results = {};

  let objectKeys = Object.keys(bestMovies);

  for (const key of objectKeys) {
    if (bestMovies[key] === value) {
      return key;
    }
  }
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestMoviesByGenre = {
  sci_fi: "Aliens",
  comedy: "Knives Out",
  drama: "1916",
};

assertEqual(findKeyByValue(bestMoviesByGenre, "1917"), "drama");
assertEqual(findKeyByValue(bestMoviesByGenre, "Simpsons"), undefined);

module.exports = findKeyByValue;

const findKeyByValue = function (bestMovies, value) {
  // let results = {};

  let objectKeys = Object.keys(bestMovies);

  for (const key of objectKeys) {
    if (bestMovies[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "Aliens",
  comedy: "Knives Out",
  drama: "1916",
};

module.exports = findKeyByValue;

// Count each letter in string and return number of times letter appears in string
const countLetters = function (string) {
  const results = {};

  for (const s of string) {
    if (results[s]) {
      results[s] += 1;
    } else {
      results[s] = 1;
    }
  }
  return results;
};

const words = "First Hackathon Woop Woop".split(" ").join("");

const results1 = countLetters(words);

console.log(results1);

module.exports = countLetters;

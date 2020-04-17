# Random Leetcode Algorithms

A sample of Leetcode algorithms I solved at one time or another using JavaScript.

## Usage

Install the package from npm:

`npm i random-leetcode-algorithms@latest`

Then import each function into your project. See below for available functions.

```
const { countElements, groupAnagrams } = require("random-leetcode-algorithms");
const resultCountElements = countElements([1, 2, 3]);
console.log("output from  countElements(): ", resultCountElements);

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const resultAnagrams = groupAnagrams(input);
console.log("output from resultAnagrams(): ", resultAnagrams);
```

Here is a working repl.it with the code above (just click 'Run'):

https://repl.it/@montrealist/testing-random-leetcode-algorithms-npm-package

## Tests

The code is fully covered with Mocha tests.

Run tests:

`npm run test`

Coverage with NYC:

`npm run coverage`

_Note:_ you will see numbers that are not all 100% - this is on purpose. You can comment out a dummy `if(false)` lines, then run `npm test coverage` again and ensure the coverage is at 💯 percent.

## Available Functions

### countElements()

Given an array of integers, count the number of elements X such that (X + 1) is also in the array.

Example:

Input: `[1,2,3]`

Output: 2

Explanation: 1 and 2 are counted because (1 + 1) = 2 and (2 + 1 ) = 3 are in the array.

### groupAnagrams()

Given an array of strings, group anagrams together.

Example:

Input: `["eat", "tea", "tan", "ate", "nat", "bat"]`

Output:

```
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

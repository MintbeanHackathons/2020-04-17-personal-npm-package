# @matsos/expected-wins

![npm](https://img.shields.io/npm/v/@matsos/expected-wins)

## Intall

```
$ npm install @matsos/expected-wins
```

## Usage

```js
const exp = require("@matsos/expected-wins");
const runsScored = 207;
const runsAllowed = 556;
const winningPercentage = exp(runsScored, runsAllowed);
console.log(winningPercentage);
//=> 0.122
```

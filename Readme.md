#matrixUtils
[@definitelynotsam/matrix-utils](https://www.npmjs.com/package/@definitelynotsam/matrix-utils)

##Objective
Javascript library with methods to loop through, create and clone multidimensional arrays

##Install
`npm install @definitelynotsam/matrix-utils`

##How to use

```js
const matrixUtils = require('@definitelynotsam/matrix-utils');

const testMatrix = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, 1],
	[1, 1],
	[1, 0],
	[1, -1],
	[0, -1],
];

console.log(matrixUtils.loopMatrix(testMatrix));

const newMatrix = matrixUtils.createMatrix(5, 5, () => Math.random() >= 0.6);
console.log(newMatrix);

const newMatrixClone = matrixUtils.cloneMatrix(newMatrix);

console.log(newMatrix === newMatrixClone);
```

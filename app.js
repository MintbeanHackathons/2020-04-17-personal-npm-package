//testing the package I published
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

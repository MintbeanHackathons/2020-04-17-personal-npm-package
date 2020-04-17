const testFunc = (array, func = (element) => console.log(element)) => {
	for (let x = 0; x < array.length; x++) {
		for (let y = 0; y < array[x].length; y++) {
			func(array[x][y]);
		}
	}
};

const testArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const anotherTest = {
	one: [{ one: 1, two: 2, three: 3 }],
	two: [{ one: 1, two: 2, three: 3 }],
	three: [{ one: 1, two: 2, three: 3 }],
};

// testFunc(anotherTest);

//calling it matrix since it's for only multidimensional arrays
//choosing old ES5 function call for scoping
//has 3 parameters
//size for X(row)
//size for Y(column)
//value, a function that will determine the value of each elemenet
function matrixUtils() {
	const createMatrix = (sizeX, sizeY, value = () => undefined) => {
		const matrix = [];
		for (let row = 0; row < sizeX; row++) {
			matrix[row] = [];
			for (let column = 0; column < sizeY; column++) {
				matrix[row][column] = value();
			}
		}
		return matrix;
	}; // end of createMatrix function

	const loopMatrix = (
		array,
		func = (element) => {
			console.log(element);
		}
	) => {
		for (let row = 0; row < array.length; row++) {
			for (let column = 0; column < array[row].length; column++) {
				func(array[row][column]);
			}
		}
	}; // end of loopmatrix function

	const cloneMatrix = (array) => {
		return JSON.parse(JSON.stringify(array));
	}; //end of clone function

	return {
		createMatrix: createMatrix,
		loopMatrix: loopMatrix,
		cloneMatrix: cloneMatrix,
	};
}

const test = () => {
	const newArray = [];
	matrixUtils().loopMatrix(testArray, (element) => {
		if (element >= 2 && element <= 7) newArray.push(element);
	});
	return newArray;
};

let test2 = test();

let clone = matrixUtils().cloneMatrix(test2);

// console.log(!Array.isArray(anotherTest) && typeof anotherTest === 'object');

// console.log(Array.isArray(test2));

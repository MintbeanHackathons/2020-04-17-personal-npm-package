//==========================================================================
// MATRIX UTIlS PACKAGE
//==========================================================================
// author: Sam Bernal
// version: 1.0
// description: methods to help creation and loop through multidimensional arrays
//==========================================================================

//calling it matrix since it's for only multidimensional arrays
//choosing old ES5 function call for scoping
//has 3 parameters
//size for X(row)
//size for Y(column)
//value, a function that will determine the value of each elemenet
module.exports = {
	//==========================================================================
	// CREATEMATRIX METHOD
	//==========================================================================
	// PARAMS: (sizeX: number, sizeY: number, value: function)
	// description: creates a multidimensional array based on the size of X and Y
	// the value is determined by a function call, otherwise all values will be undefined
	createMatrix(sizeX, sizeY, value = () => undefined) {
		const matrix = [];
		for (let row = 0; row < sizeX; row++) {
			matrix[row] = [];
			for (let column = 0; column < sizeY; column++) {
				matrix[row][column] = value();
			}
		}
		return matrix;
	}, // end of createMatrix function

	//==========================================================================
	// LOOPMATRIX METHOD
	//==========================================================================
	// PARAMS: (array: array or object, func: function)
	// description: validates if 1st param passed is an array or object
	// loops through the array(or object) and performs a function to manipulate the array
	loopMatrix(
		array,
		func = (element) => {
			console.log(element);
		}
	) {
		//conditional to check if the array is an object or not to be able to iterate through
		switch (true) {
			case Array.isArray(array):
				for (let row = 0; row < array.length; row++) {
					for (let column = 0; column < array[row].length; column++) {
						func(array[row][column]);
					}
				}
				break;

			case !Array.isArray(array) && typeof array === 'object':
				//for objects
				for (const row in array) {
					for (const column in array[row]) {
						func(array[row][column]);
					}
				}
				break;

			default:
				console.log('please add an array or object to be looped through');
				break;
		}
	}, // end of loopmatrix function

	//==========================================================================
	// CLONEMATRIX METHOD
	//==========================================================================
	// PARAMS: (array: array or object)
	// description: javascript doesn't allow cloning multidimensional arrays,
	// it creates a reference instead this function parses the array as a JSON
	// then stringify to be able to clone it  without being a reference
	cloneMatrix(array) {
		return JSON.parse(JSON.stringify(array));
	}, //end of clone function
};

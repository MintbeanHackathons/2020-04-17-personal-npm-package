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

const anotherTest = [
	[
		{ one: 1, two: 2, three: 3 },
		{ four: 4, five: 5, six: 6 },
	],
	[
		{ one: 1, two: 2, three: 3 },
		{ four: 4, five: 5, six: 6 },
	],
	[
		{ one: 1, two: 2, three: 3 },
		{ four: 4, five: 5, six: 6 },
	],
];

testFunc(anotherTest);

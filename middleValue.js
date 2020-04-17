// Function checks for middle value in an array
const middleValue = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let element1 = array.length / 2 - 1;
    let element2 = array.length / 2;
    return [array[element1], array[element2]];
  } else {
    let element3 = Math.floor(array.length / 2);
    return [array[element3]];
  }
};

module.exports = middleValue;

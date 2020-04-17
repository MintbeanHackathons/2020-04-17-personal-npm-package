const { BubbleSort } = require('./BubbleSort');
const { MergeSort } = require('./MergeSort');
const { QuickSort } = require('./QuickSort');
const { InsertionSort } = require('./InserstionSort');
const { SelectionSort } = require('./SelectionSort');
const { HeapSort } = require('./HeapSort');

module.exports.sortHelper = (sortMethod, inputArr) => {
  const copysortMethod = sortMethod.toLowerCase();
  switch (copysortMethod) {
    case 'bubblesort':
      return BubbleSort(inputArr);

    case 'mergesort':
      return MergeSort(inputArr);

    case 'quicksort':
      return QuickSort(inputArr);

    case 'insertionsort':
      return InsertionSort(inputArr);

    case 'selectionsort':
      return SelectionSort(inputArr);

    case 'heapsort':
      return HeapSort(inputArr);

    default:
      return inputArr;
  }
};

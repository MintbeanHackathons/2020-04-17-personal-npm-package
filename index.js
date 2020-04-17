import BubbleSort from './BubbleSort';

module.export.sortHelper = (sortMethod, inputArr) => {
  const sortMethod = sortMethod.toLowerCase();
  switch (sortMethod) {
    case bubblesort:
      return BubbleSort(inputArr);
      break;
    default:
      return inputArr;
  }
};

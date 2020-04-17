// printToDom - reusable code for building html from your javascript file
// Pass in an element id where you would like to print, then a variable name which holds html to print

const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
};

// arrayToList - loops through an array that does not contain objects and prints each entry as an li element
// Pass in your array name, then an id for your target UL or OL element

const arrayToList = (arrayName, listId) => {
  let listToPrint = '';
  for (let i = 0; i < arrayName.length; i++){
    listToPrint += `<li>${arrayName[i]}</li>`;
  }
  printToDom(listId, listToPrint);
};

// usCurrencyFormatter - converts a number to US currency format
// use usCurrencyFormatter.format(number);

const usCurrencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default { printToDom, arrayToList, usCurrencyFormatter };
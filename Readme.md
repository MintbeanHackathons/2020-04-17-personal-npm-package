# Ashley Claiborne's Utilities NPM Library

## Install
```
$ npm install @aclai4067/utilities
```

## Usage
> printToDom - reusable code for building html from your javascript file
> Pass in an element id where you would like to print, then a variable name which holds html to print
```
printToDom(div1, htmlStringVariable);
```

> arrayToList - loops through an array that does not contain objects and prints each entry as an li element
> Pass in your array name, then an id for your target UL or OL element

```
arrayToList(arrayVariable, ulId1);
```

> usCurrencyFormatter - converts a number to US currency format
```
usCurrencyFormatter.format(18793);
```
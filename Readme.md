# Tiny Data Pagination

## Installation

Installation is done using the **npm install command**:
```bash
$ npm install tiny-data-pagination
```

## Usage

Use it in your app

1. require **tiny-data-pagination**

```javascript
const Pagination = require('tiny-data-pagination')
```

2. Create a **tiny-data-pagination** object

```javascript
const Pagination = require('tiny-data-pagination')

let data = [2, 4, 6, 22, 4, 6, 2, 12]

let pagedData = new Pagination(2, data)
// new Pagination(pageSize, data)
```

3. Use **tiny-data-pagination**

```javascript
const Pagination = require('tiny-data-pagination')

let data = [2, 4, 6, 22, 4, 6, 2, 12]

let pagedData = new Pagination(2, data)

console.log(pagedData.getPageData(1)) // [ 2, 4 ]
console.log(pagedData.nextPage()) // [ 6, 22 ]
console.log(pagedData.sortData(0)) // [ 2, 2, 4, 4, 6, 6, 12, 22 ]
```

## Methods

`pagedData.getPageData(pageNo)` 
Returns the data of the page number(number) you passed.

`pagedData.getPageLength()` 
Returns the length of pages.

`pagedData.getCurrentPageNo()`
Returns the current page number.

`pagedData.setData(newData)`
Reset your data as the newData you passed in .

`pagedData.nextPage()`
Returns the data of next page.

`pagedData.previousPage()`
Returns the data of previous page.

`pagedData.setPageSize(pageSize)`
Reset the page size ad the pageSize(number) you passed in .

`pagedData.sortData(sortType, keyName)`
Sort the data based on the keyName(string) of each object. If it's an array you don't need pass it.
sortType is a number **0** or **1**. 
**0** means **ascending**;
**1** means **descending**;

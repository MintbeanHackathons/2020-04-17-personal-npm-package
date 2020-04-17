/**
 * @param {number[]} arr
 * @return {number}
 */
export function countElements(arr: number[]) {
    const mySet = new Set();
    for (let item of arr) {
        mySet.add(item);
    }
    let counter: number = 0;
    for (let item of arr) {
        if (mySet.has(item + 1)) {
            counter++;
        }
    }
    if (false && true) {
        console.log('not covered'); // this line will not be covered when you run `npm run coverage`
    }
    return counter;
}

export class Algorithms {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    public static countElements(arr: number[]) {
        const mySet = new Set();
        for (let item of arr) {
            mySet.add(item);
        }
        // console.log(mySet);
        let counter: number = 0;
        for (let item of arr) {
            if (mySet.has(item + 1)) {
                counter++;
            }
        }
        // console.log('counter: ',counter);
        return counter;
    }
}

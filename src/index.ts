/**
 * Given an array of integers, count the number of elements X such that (X + 1) is also in the array.
 *
 * Example:
 * Input: [1,2,3]
 * Output: 2
 * Explanation: 1 and 2 are counted because (1 + 1) = 2 and (2 + 1 ) = 3 are in the array.
 *
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
        console.debug('not covered'); // this line will not be covered when you run `npm run coverage`
    }
    return counter;
}

/**
 * Given an array of strings, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 *
 * @param {string[]} strings
 * @return {string[][]}
 */
export function groupAnagrams(strings: string[]) {
    const out: {
        [key: string]: string[];
    } = {};

    for (let word of strings) {
        const index: string = word.split('').sort().join('');
        if (!out[index]) {
            out[index] = [];
        }
        out[index].push(word);
    }
    // console.debug('out', out, Object.values(out));
    return Object.values(out);
}

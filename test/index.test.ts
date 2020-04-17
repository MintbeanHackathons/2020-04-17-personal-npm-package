import { expect } from 'chai';
import { countElements, groupAnagrams } from '../src/index';

describe('countElements', () => {
    it('passing empty array returns a number', () => {
        const result = countElements([]);
        expect(result).to.be.a('number');
    });

    it('passing a valid input [1, 2, 3] returns expected output', async () => {
        const input = [1, 2, 3];
        const expected = 2;
        const result = countElements(input);
        expect(result).to.be.equal(expected);
    });

    it('passing a valid input [1, 1, 3, 3, 5, 5, 7, 7] returns expected output', async () => {
        const input = [1, 1, 3, 3, 5, 5, 7, 7];
        const expected = 0;
        const result = countElements(input);
        expect(result).to.be.equal(expected);
    });

    it('passing a valid input [1, 3, 2, 3, 5, 0] returns expected output', async () => {
        const input = [1, 3, 2, 3, 5, 0];
        const expected = 3;
        const result = countElements(input);
        expect(result).to.be.equal(expected);
    });

    it('passing a valid input [1, 1, 2, 2] returns expected output', async () => {
        const input = [1, 1, 2, 2];
        const expected = 2;
        const result = countElements(input);
        expect(result).to.be.equal(expected);
    });
});

describe('groupAnagrams', () => {
    it('passing empty array returns an array', () => {
        const result = groupAnagrams([]);
        expect(result).to.be.a('array');
    });

    it('passing valid input (with anagrams) returns an array of expected size', () => {
        const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
        const result = groupAnagrams(input);
        expect(result).to.be.a('array');
        expect(result.length).to.equal(3);
    });

    it('passing valid input (no anagrams) returns an array of expected size', () => {
        const input = ['cab', 'tin', 'pew', 'duh', 'may', 'ill', 'buy', 'bar', 'max', 'doc'];
        const result = groupAnagrams(input);
        expect(result).to.be.a('array');
        expect(result.length).to.equal(10);
    });
});

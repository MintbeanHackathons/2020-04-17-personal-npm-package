import { expect } from 'chai';
import { countElements } from '../src/index';

describe('countElements', () => {
    it('passing empty array returns a number', () => {
        const result = countElements([]);
        expect(result).to.be.a('number');
    });

    it('passing a valid input returns expected output', async () => {
        const input = [1, 2, 3];
        const expected = 2;
        const result = countElements(input);
        expect(result).to.be.equal(expected);
    });
});

import { CharacterSet } from './character-set';
import { CharacterSetForSeedphrase } from './seedphrase-encoder';

const characterSet: CharacterSet = new CharacterSetForSeedphrase();

describe('TDD', () => {
    test('the "at(index: number): strig" method in the CharacterSetForSeedphrase module', () => {
        expect(characterSet.at(0)).toBe('A');
        expect(characterSet.at(1)).toBe('B');
        expect(characterSet.at(2)).toBe('C');
        expect(characterSet.at(10)).toBe('K');
        expect(characterSet.at(20)).toBe('U');
        expect(characterSet.at(25)).toBe('Z');
        expect(characterSet.at(26)).toBe('A');
        expect(characterSet.at(51)).toBe('Z');
        expect(characterSet.at(52)).toBe('A');
        expect(characterSet.at(53)).toBe('B');
        expect(characterSet.at(-1)).toBe('Z');
        expect(characterSet.at(-26)).toBe('A');
        expect(characterSet.at(-51)).toBe('B');
        expect(characterSet.at(-52)).toBe('A');
        expect(characterSet.at(-53)).toBe('Z');
    });

    test('the "index(char: string): number" method in the CharacterSetForSeedphrase module', () => {
        expect(characterSet.index('A')).toBe(0);
        expect(characterSet.index('B')).toBe(1);
        expect(characterSet.index('K')).toBe(10);
        expect(characterSet.index('U')).toBe(20);
        expect(characterSet.index('Z')).toBe(25);
        expect(characterSet.index('#')).toBe(-1);
        expect(characterSet.index('@')).toBe(-1);
        expect(characterSet.index('')).toBe(-1);
        expect(characterSet.index('AA')).toBe(-1);
    });

    test('the "shift(char: string, index: number): string" method in the CharacterSetForSeedphrase module', () => {
        expect(characterSet.shift('A', 1)).toBe('B');
        expect(characterSet.shift('A', 2)).toBe('C');
        expect(characterSet.shift('A', 10)).toBe('K');
        expect(characterSet.shift('A', 20)).toBe('U');
        expect(characterSet.shift('A', 25)).toBe('Z');
        expect(characterSet.shift('A', 26)).toBe('A');
        expect(characterSet.shift('A', 51)).toBe('Z');
        expect(characterSet.shift('A', -1)).toBe('Z');
        expect(characterSet.shift('A', -26)).toBe('A');
        expect(characterSet.shift('B', 1)).toBe('C');
        expect(characterSet.shift('B', 2)).toBe('D');
        expect(characterSet.shift('B', 10)).toBe('L');
        expect(characterSet.shift('B', 20)).toBe('V');
        expect(characterSet.shift('B', 25)).toBe('A');
        expect(characterSet.shift('B', 26)).toBe('B');
        expect(characterSet.shift('B', 51)).toBe('A');
        expect(characterSet.shift('B', -1)).toBe('A');
        expect(characterSet.shift('B', -26)).toBe('B');
    });
});

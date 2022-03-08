import { EncryptionAlgorithm, charEncoder, SeephraseCharSet } from './encoder-factory';

const encrypt: EncryptionAlgorithm = charEncoder(SeephraseCharSet);

describe('TDD', () => {
    test('single character encryption', () => {
        expect(encrypt('A', 'A')).toBe('A');
        expect(encrypt('B', 'A')).toBe('B');
        expect(encrypt('C', 'A')).toBe('C');
        expect(encrypt('Z', 'A')).toBe('Z');

        expect(encrypt('A', 'B')).toBe('B');
        expect(encrypt('B', 'B')).toBe('C');
        expect(encrypt('Y', 'B')).toBe('Z');
        expect(encrypt('Z', 'B')).toBe('A');

        expect(encrypt('A', 'C')).toBe('C');
        expect(encrypt('B', 'C')).toBe('D');
        expect(encrypt('X', 'C')).toBe('Z');

        expect(encrypt('A', 'K')).toBe('K');
        expect(encrypt('P', 'K')).toBe('Z');
        expect(encrypt('Q', 'K')).toBe('A');
        expect(encrypt('Z', 'K')).toBe('J');

        expect(encrypt('A', 'Z')).toBe('Z');
        expect(encrypt('B', 'Z')).toBe('A');
        expect(encrypt('Z', 'Z')).toBe('Y');
    });

    test('illegal input handling in single character encryption', () => {
        expect(() => { encrypt('@', 'K') }).toThrow('[CharValidator] Invalid character: @');
        expect(() => { encrypt(';', 'T') }).toThrow('[CharValidator] Invalid character: ;');
        expect(() => { encrypt('A', '#') }).toThrow('[CharValidator] Invalid character in the password: #');
        expect(() => { encrypt('', 'A') }).toThrow('[CharValidator] The length of the character should be 1 but it was 0');
        expect(() => { encrypt('AA', 'A') }).toThrow('[CharValidator] The length of the character should be 1 but it was 2');
        expect(() => { encrypt('A', '') }).toThrow('[CharValidator] The length of the password should be 1 but it was 0');
        expect(() => { encrypt('A', 'AA') }).toThrow('[CharValidator] The length of the password should be 1 but it was 2');
    });
});

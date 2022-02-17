import encrypt from './encrypt-char';

describe('TDD', () => {
    it('encrypting single character', () => {
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

        expect(() => { encrypt('@', 'K') }).toThrow('[encrypt-char] Invalid character: @');
        expect(() => { encrypt(';', 'T') }).toThrow('[encrypt-char] Invalid character: ;');
        expect(() => { encrypt('A', '#') }).toThrow('[encrypt-char] Invalid character in the password: #');
        expect(() => { encrypt('', 'A') }).toThrow('[encrypt-char] Text length of 0 is not allowed!');
        expect(() => { encrypt('AA', 'A') }).toThrow('[encrypt-char] Text length of 2 is not allowed!');
        expect(() => { encrypt('A', '') }).toThrow('[encrypt-char] Password length of 0 is not allowed!');
        expect(() => { encrypt('A', 'AA') }).toThrow('[encrypt-char] Password length of 2 is not allowed!');
    });
});

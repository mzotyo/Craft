import { slice } from './common';

describe('TDD', () => {
    it('slice', () => {
        expect(slice('A', 'A')).toEqual([{ word: 'A', pass: 'A'}]);
        expect(slice('ABCD', 'EFGH')).toEqual([{ word: 'ABCD', pass: 'EFGH'}]);
        expect(slice('ABCDEF', 'EFGH')).toEqual([{ word: 'ABCD', pass: 'EFGH'}]);
        expect(slice('ABCDEF ABCD', 'EFGHIJKL')).toEqual([{ word: 'ABCD', pass: 'EFGH'}, { word: 'ABCD', pass: 'IJKL'}]);
        expect(() => { slice(' ABCD', 'EFGHIJKL') }).toThrow('[slice] Whitespace characters at the beginning or at the end of the text are not allowed');
        expect(() => { slice('ABCD ', 'EFGHIJKL') }).toThrow('[slice] Whitespace characters at the beginning or at the end of the text are not allowed');
        expect(() => { slice('ABCDEF', 'EF GH') }).toThrow('[slice] Whitespace characters ar not allowed in the passphrase');
        expect(slice('ALMAFA KORTEFA CSERESZNYE', 'PASSWOR')).toEqual([{ word: 'ALMA', pass: 'PASS'}, { word: 'KORT', pass: 'WORP'}, { word: 'CSER', pass: 'ASSW'}]);
        expect(slice('ALMAFA     KORTEFA CSERESZNYE', 'PASSWOR')).toEqual([{ word: 'ALMA', pass: 'PASS'}, { word: 'KORT', pass: 'WORP'}, { word: 'CSER', pass: 'ASSW'}]);
    });
});

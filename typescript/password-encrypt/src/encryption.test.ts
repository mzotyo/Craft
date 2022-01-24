import { encryptChar, encryptWord, encrypt, permutate } from './encryption';

describe('TDD', () => {
    it('encrypting single character', () => {
        expect(encryptChar('A', 'A')).toBe('A');
        expect(encryptChar('B', 'A')).toBe('B');
        expect(encryptChar('C', 'A')).toBe('C');
        expect(encryptChar('B', 'B')).toBe('A');
        expect(encryptChar('A', 'B')).toBe('Z');
        expect(encryptChar('A', 'C')).toBe('Y');
        expect(encryptChar('B', 'C')).toBe('Z');
        expect(encryptChar('C', 'C')).toBe('A');
        expect(encryptChar('A', 'Z')).toBe('B');
        expect(encryptChar('Z', 'Z')).toBe('A');
        expect(encryptChar('K', 'W')).toBe('O');
        expect(encryptChar('Y', 'K')).toBe('O');

        expect(encryptChar('A', 'a')).toBe('A');
        expect(encryptChar('b', 'A')).toBe('B');
        expect(encryptChar('C', 'a')).toBe('C');
        expect(encryptChar('b', 'B')).toBe('A');
        expect(encryptChar('A', 'b')).toBe('Z');
        expect(encryptChar('a', 'C')).toBe('Y');
        expect(encryptChar('B', 'c')).toBe('Z');
        expect(encryptChar('c', 'C')).toBe('A');
        expect(encryptChar('A', 'z')).toBe('B');
        expect(encryptChar('z', 'Z')).toBe('A');
        expect(encryptChar('K', 'w')).toBe('O');
        expect(encryptChar('y', 'K')).toBe('O');

        expect(() => { encryptChar('@', 'K') }).toThrow('[encryptChar] Invalid character: @');
        expect(() => { encryptChar(';', 'T') }).toThrow('[encryptChar] Invalid character: ;');
        expect(() => { encryptChar('A', '#') }).toThrow('[encryptChar] Invalid character in the password: #');
    });

    it('encrypt single word', () => {
        expect(() => { encryptWord('ALMAFA', 'PASS') }).toThrow('[encryptWord] Word length should be less or equal to 4 but it was 6 [ALMAFA]');
        expect(() => { encryptWord('ALMA', 'PAS') }).toThrow('[encryptWord] The password should be at least as long as the text to be encrypted [ALMA, PAS]');
        expect(encryptWord('ALMA', 'PASSWO')).toBe('LLUI');
        expect(encryptWord('AA', 'AA')).toBe('AA  ');
    });

    it('encrypt', () => {
        expect(encrypt('acid skill page ginger hospital ripple green cup fine finger other pipe envelope refuse bike year put multiply harsh churn claw display move improve', 'PASSWORD'))
             .toBe('LRPS CRNA QMDZ LMMA WGVG WGQT RYOD I_RO AQMN AIIL OVSI MMME KJCH UUQU WWJB DDOM SZAX OTUO APBD XM_M VTQM UUGY YYUY MBQO');
        expect(encrypt('acid skill page ginger', 'PASSWORD')).toBe('LWAK CWAU QROW LIMD');
    })

    it('permutation', () => {
        expect(permutate(['LCQL', 'WWRI'], 2)).toEqual(['LW', 'CW', 'QR', 'LI']);
        expect(permutate(['LCQL', 'WWRI', 'AAOM', 'KUWD'], 2)).toEqual(['LA', 'CA', 'QO', 'LM', 'WK', 'WU', 'RW', 'ID']);

        expect(permutate(['LCQL', 'WWRI', 'AAOM', 'KUWD', 'SOAX', 'VUYM',
                          'RRMM', 'GGY',  'QIVM', 'JUWD', 'ZTPM', 'TUYB', 
                          'PNDM', 'VQOR', 'MISM', 'CQJO', 'AUB',  'QGUQ',
                          'SAZA', 'GTDO', 'NLIE', 'HUBM', 'XODM', 'MYYO'], 4))

            .toEqual(['LRPS', 'CRNA', 'QMDZ', 'LMMA', 'WGVG', 'WGQT',
                      'RYOD', 'I_RO', 'AQMN', 'AIIL', 'OVSI', 'MMME', 
                      'KJCH', 'UUQU', 'WWJB', 'DDOM', 'SZAX', 'OTUO', 
                      'APBD', 'XM_M', 'VTQM', 'UUGY', 'YYUY', 'MBQO']);
    });
});

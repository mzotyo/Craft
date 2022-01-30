import { encryptChar, encryptWord, encrypt, permutate } from './encryption';

describe('TDD', () => {
    it('encrypting single character', () => {
        expect(encryptChar('A', 'A')).toBe('A');
        expect(encryptChar('B', 'A')).toBe('B');
        expect(encryptChar('C', 'A')).toBe('C');
        expect(encryptChar('Z', 'A')).toBe('Z');

        expect(encryptChar('A', 'B')).toBe('B');
        expect(encryptChar('B', 'B')).toBe('C');
        expect(encryptChar('Y', 'B')).toBe('Z');
        expect(encryptChar('Z', 'B')).toBe('A');

        expect(encryptChar('A', 'C')).toBe('C');
        expect(encryptChar('B', 'C')).toBe('D');
        expect(encryptChar('X', 'C')).toBe('Z');

        expect(encryptChar('A', 'K')).toBe('K');
        expect(encryptChar('P', 'K')).toBe('Z');
        expect(encryptChar('Q', 'K')).toBe('A');
        expect(encryptChar('Z', 'K')).toBe('J');

        expect(encryptChar('A', 'Z')).toBe('Z');
        expect(encryptChar('B', 'Z')).toBe('A');
        expect(encryptChar('Z', 'Z')).toBe('Y');

        expect(() => { encryptChar('@', 'K') }).toThrow('[encryptChar] Invalid character: @');
        expect(() => { encryptChar(';', 'T') }).toThrow('[encryptChar] Invalid character: ;');
        expect(() => { encryptChar('A', '#') }).toThrow('[encryptChar] Invalid character in the password: #');
    });

    it('encrypt single word', () => {
        expect(() => { encryptWord('ALMAFA', 'PASS') }).toThrow('[encryptWord] Word length should be less or equal to 4 but it was 6 [ALMAFA]');
        expect(() => { encryptWord('ALMA', 'PAS') }).toThrow('[encryptWord] The password should be at least as long as the text to be encrypted [ALMA, PAS]');
        expect(encryptWord('ALMA', 'PASSWO')).toBe('PLES');
        expect(encryptWord('AA', 'AA')).toBe('AA  ');
    });

    it('encrypt', () => {
        expect(encrypt('acid skill page ginger hospital ripple green cup fine finger other pipe envelope refuse bike year put multiply harsh churn claw display move improve', 'PASSWORD'))
            .toBe('PVTW CRNA AWNJ VWWK OYNY YISV ZGWL O_XU EUQR AIIL YFCS WWWO CBUZ WWSW EERJ JJUS WDEB OTUO KZLN HW_W NLIE WWIA GGCG SHWU');
        expect(encrypt('acid skill page ginger', 'PASSWORD')).toBe('POEC CYAW AZYE VOWJ');
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

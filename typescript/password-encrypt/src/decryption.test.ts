import { inversePermutation } from './decryption'

describe('TDD', () => {
    it('invers permutation', () => {
        expect(inversePermutation(['LW', 'CW', 'QR', 'LI'], 2)).toEqual(['LCQL', 'WWRI']);
        expect(inversePermutation(['LA', 'CA', 'QO', 'LM', 'WK', 'WU', 'RW', 'ID'], 2)).toEqual(['LCQL', 'WWRI', 'AAOM', 'KUWD']);

        expect(inversePermutation(['LRPS', 'CRNA', 'QMDZ', 'LMMA', 'WGVG', 'WGQT', 
                                   'RYOD', 'I_RO', 'AQMN', 'AIIL', 'OVSI', 'MMME', 
                                   'KJCH', 'UUQU', 'WWJB', 'DDOM', 'SZAX', 'OTUO',
                                   'APBD', 'XM_M', 'VTQM', 'UUGY', 'YYUY', 'MBQO'], 4))

            .toEqual(['LCQL', 'WWRI', 'AAOM', 'KUWD', 'SOAX', 'VUYM',
                      'RRMM', 'GGY',  'QIVM', 'JUWD', 'ZTPM', 'TUYB', 
                      'PNDM', 'VQOR', 'MISM', 'CQJO', 'AUB',  'QGUQ', 
                      'SAZA', 'GTDO', 'NLIE', 'HUBM', 'XODM', 'MYYO']);
       
    });

    it('decrypting a single character', () => {
       expect(decryptChar('', '')).toBe(''); 
    })
});


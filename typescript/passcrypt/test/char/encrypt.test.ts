import { Char } from '../../src/char/char';
import { CharSet } from '../../src/char/charSet';

describe('TDD', () => {
  const charSet: CharSet = new CharSet('BCDA');

  const A: Char = charSet.char('A');
  const B: Char = charSet.char('B');
  const C: Char = charSet.char('C');
  const D: Char = charSet.char('D');

  test('encrypt single char', () => {
    expect(B.encrypt(B)).toEqual(B);
    expect(C.encrypt(B)).toEqual(C);
    expect(A.encrypt(C)).toEqual(B);
    expect(B.encrypt(D)).toEqual(D);
    expect(C.encrypt(D)).toEqual(A);
    expect(C.encrypt(A)).toEqual(B);
  });

});

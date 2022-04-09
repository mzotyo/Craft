import encrypt from '../../src/char/encrypt';
import { Char } from '../../src/char/char';
import { CharSet } from '../../src/char/charSet';

describe('TDD', () => {
  const charSet: CharSet = new CharSet('BCDA');

  const A: Char = charSet.char('A');
  const B: Char = charSet.char('B');
  const C: Char = charSet.char('C');
  const D: Char = charSet.char('D');

  test('encrypt single char', () => {
    expect(encrypt(B, B)).toEqual(B);
    expect(encrypt(B, C)).toEqual(C);
    expect(encrypt(A, C)).toEqual(B);
    expect(encrypt(B, D)).toEqual(D);
    expect(encrypt(C, D)).toEqual(A);
    expect(encrypt(C, A)).toEqual(B);
  });

  test('char index', () => {
    expect(A.index()).toEqual(3);
    expect(B.index()).toEqual(0);
  });

  test('shift char', () => {
    expect(B.shift(1)).toEqual(C);
    expect(C.shift(1)).toEqual(D);
    expect(A.shift(1)).toEqual(B);
    expect(A.shift(5)).toEqual(B);
    expect(B.shift(-1)).toEqual(A);
  });
});

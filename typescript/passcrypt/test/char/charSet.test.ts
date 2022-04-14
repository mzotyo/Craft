import { characterSet } from '../../src/char/charSet';

describe('TDD', () => {
  const toChar = characterSet('ABC');

  const A = toChar('A');
  const B = toChar('B');
  const D = toChar('D');

  test('character encryption', () => {
    expect(A.encrypt(A)).toEqual(A);
    expect(B.encrypt(A)).toEqual(B);
  });

  test('equality', () => {
    expect(A).toEqual(toChar('A'));
    expect(A).not.toEqual(toChar('B'));
  });
  
  test('define valid character set', () => {
    expect(A.isValid()).toEqual(true);
    expect(D.isValid()).toEqual(false);
  });
});

import { Char } from '../../src/char/charSet';

describe('TDD', () => {
  test('character encryption', () => {
    const A: Char = new Char('A');
    const B: Char = new Char('B');

    expect(A.encrypt(A)).toEqual(A);
    expect(B.encrypt(A)).toEqual(B);
  });

  test('equality', () => {
    const A: Char = new Char('A');

    expect(A).toEqual(new Char('A'));
    expect(A).not.toEqual(new Char('B'));
  });
});

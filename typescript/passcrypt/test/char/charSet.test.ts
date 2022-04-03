import { Char } from "../../src/char/charSet";

describe('TDD', () => {
  const charFrom: (char: string) => Char = Char.charSet("ABCD");

  const A: Char = charFrom('A');
  const B: Char = charFrom('B');
  const C: Char = charFrom('C');
  const D: Char = charFrom('D');
  const INVALID: Char = charFrom('Z');

  test('charSet creation', () => {
    expect(Char.charSet('')('A').isValid()).toEqual(false);
  });

  test('charFrom', () => {
    expect(charFrom('').isValid()).toEqual(false);
    expect(charFrom('AA').isValid()).toEqual(false);
  });

  test('isVaid', () => {
    expect(A.isValid()).toEqual(true);
    expect(INVALID.isValid()).toEqual(false);
  });

  test('get', () => {
    expect(A.get()).toEqual('A');
    expect(() => INVALID.get()).toThrow('Get operation is not allowed on a invalid char!');
  });

  test('index', () => {
    expect(A.index()).toEqual(0);
    expect(B.index()).toEqual(1);
    expect(C.index()).toEqual(2);
    expect(D.index()).toEqual(3);
    expect(() => INVALID.index()).toThrow('Index operation is not allowed on a invalid char!');
  });

  test('shift', () => {
    expect(A.shift(0)).toEqual(A);
    expect(INVALID.shift(0).isValid()).toEqual(false);
  });

  test('map', () => {
    const transform = jest.fn((char: string) => 'D');
    const X = A.map(transform);

    expect(transform).toHaveBeenCalledWith('A');
    expect(X.isValid()).toEqual(true);
    expect(X).toEqual(charFrom('D'));

    expect(INVALID.map(transform).isValid()).toEqual(false);
  });

  test('equality', () => {
    expect(A).toEqual(charFrom('A'));
    expect(A).not.toEqual(B);
    expect(INVALID).not.toEqual(C);
  });
});

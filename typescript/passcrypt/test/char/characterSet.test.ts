import { characterSet } from "../../src/char/characterSet";

describe("TDD", () => {
  const char = characterSet("ABC");

  const A = char("A");
  const B = char("B");
  const D = char("D");

  test("character encryption", () => {
    expect(A.encrypt(A)).toEqual(A);
    expect(B.encrypt(A)).toEqual(B);
  });

  test("equality", () => {
    expect(A).toEqual(char("A"));
    expect(A).not.toEqual(char("B"));
  });

  test("define valid character set", () => {
    expect(A.isValid()).toEqual(true);
    expect(D.isValid()).toEqual(false);
  });
});

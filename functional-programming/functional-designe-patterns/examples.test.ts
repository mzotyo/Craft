import * as examples from "./examples";

describe("Core Principles of Functional Programming", () => {
  test("A function is a standalone thing", () => {
    expect(examples.add(2, 3)).toBe(5);
  });

  test("Example of a function that returns a function", () => {
    expect(examples.add2(2)(3)).toBe(5);
  });

  test("Example of function as an input parameter", () => {
    const incrementBy2 = (x: number) => x + 2;
    expect(examples.add3(incrementBy2)).toBe(5);
  });

  test("Example of a function as an extra inpt paramter", () => {
    const incrementBy2 = (x: number) => x + 2;
    expect(examples.add4(3, incrementBy2)).toBe(5);
  });

  test("Example of a composition", () => {
    expect(examples.appleToCherry("apple")).toEqual("cherry");
  });
});

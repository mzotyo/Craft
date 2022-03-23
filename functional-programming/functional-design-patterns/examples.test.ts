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

  test("Any function with similar interface as Function2 is compatible with it", () => {
    expect(examples.process(examples.firstChar)).toEqual('t');
  });

  test("Strategy pattern", () => {
    expect(examples.evaluate(10, examples.add6)).toBe(16);
    expect(examples.evaluate(10, examples.add5)).toBe(15);
  });

  test("Decorator pattern", () => {
    expect(examples.prefix(examples.postfix(examples.getText))()).toEqual('- HelloBello');
  });
});

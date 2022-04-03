import { Maybe, None, Some } from 'monet';

describe("Experiment with Maybe", () => {
  test("Testing Maybe with some value", () => {
    const x: Maybe<number> = Some(5);
    const product = x.map(n => n * 2);
    const sum = product.map(n => n + 1);

    expect(sum.isSome()).toBe(true);
    expect(sum.isNone()).toBe(false);
    expect(sum.some()).toBe(11);
  });

  test("Test Maybe with none value", () => {
    const x: Maybe<number> = None();
    expect(x.isNone()).toBe(true);
  });

});

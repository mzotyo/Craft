import { context, strategyA, strategyB } from "./strategy";

console.log = jest.fn();

describe("Example usage of strategy pattern", () => {
  test("Calls a client method within the strategyA passed in as parameter will be executed", () => {
    context(strategyA);

    expect(console.log).toHaveBeenCalledWith("strategyA has been executed");
  });

  test("Calls a client method within the strategyB passed in as parameter will be executed", () => {
    context(strategyB);

    expect(console.log).toHaveBeenCalledWith("strategyB has been executed");
  });
});

import {
  Strategy,
  clientA,
  clientB,
} from "./strategy";

console.log = jest.fn();

describe("Example usage of strategy pattern", () => {
  test("Creates a Client in which the ConcreteStrategyA will be executed", () => {
    clientA();
    expect(console.log).toHaveBeenCalledWith(
      "ConcreteStrategyA has been executed"
    );
  });

  test("Creates a Context in which the ConcreteStrategyB will be executed", () => {
    clientB();
    expect(console.log).toHaveBeenCalledWith(
      "ConcreteStrategyB has been executed"
    );
  });
});

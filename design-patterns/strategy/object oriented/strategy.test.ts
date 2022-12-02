import {
  Strategy,
  ConcreteStrategyA,
  ConcreteStrategyB,
  Context,
  ClientA,
  ClientB,
} from "./strategy";

console.log = jest.fn();

describe("Example usage of strategy pattern", () => {
  test("Creates a Client in which the ConcreteStrategyA will be executed", () => {
    const client: Context = new ClientA();
    client.executeStrategy();

    expect(console.log).toHaveBeenCalledWith(
      "ConcreteStrategyA has been executed"
    );
  });

  test("Creates a Context in which the ConcreteStrategyB will be executed", () => {
    const client: Context = new ClientB();
    client.executeStrategy();

    expect(console.log).toHaveBeenCalledWith(
      "ConcreteStrategyB has been executed"
    );
  });

  test("Creates a Context in which the ConcreteStrategyA will be executed", () => {
    const client: Context = new ClientB();
    client.setStrategy(new ConcreteStrategyA());
    client.executeStrategy();

    expect(console.log).toHaveBeenCalledWith(
      "ConcreteStrategyA has been executed"
    );
  });
});

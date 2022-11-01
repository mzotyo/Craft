/**
 * The common interface for the algorithm family which makes algorithms interchangeable.
 */
export type Strategy = () => void;

/**
 * Concrete implementation of the strategy A.
 */
const concreteStrategyA: Strategy = () => console.log('ConcreteStrategyA has been executed');

/**
 * Concrete implementation of the strategy B.
 */
const concreteStrategyB: Strategy = () => console.log('ConcreteStrategyB has been executed');

/**
 * The context function which uses one of the strategies. The concrete implementation of
 * the used strategy will be injected runtime through parameter. The context method
 * has no knowledge about the concrete implementation of the strategy. It uses through
 * the Strategy interface, which makes the strategies interchangeable.
 */
function context(strategy: Strategy) {
    strategy();
}

/**
 * Client A which uses strategy A. Instead of inheriting strategy algorith  from
 * Context parent class, it uses composition to get access to the strategy class.
 */
export function clientA() {
    context(concreteStrategyA);
}

/**
 * Client B which uses strategy B. Instead of inheriting strategy algorith  from
 * Context parent class, it uses composition to get access to the strategy class.
 */
export function clientB() {
    context(concreteStrategyB);
}

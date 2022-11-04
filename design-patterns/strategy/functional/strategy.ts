/**
 * The common interface for the algorithm family which makes algorithms interchangeable.
 */
export type Strategy = () => void;

/**
 * Concrete implementation of the strategy A.
 */
export const strategyA: Strategy = () =>
  console.log("strategyA has been executed");

/**
 * Concrete implementation of the strategy B.
 */
export const strategyB: Strategy = () =>
  console.log("strategyB has been executed");

/**
 * The context function which uses one of the strategies. The concrete implementation of
 * the used strategy will be injected at runtime through a parameter. The context method
 * has no knowledge about the concrete implementation of the strategy. It has knowledge
 * only about the interface therefore it respects the design principle that says to
 * develop against an interface not an implementation.
 */
export function context(strategy: Strategy) {
  // Using the strategy wothin the context
  strategy();
}

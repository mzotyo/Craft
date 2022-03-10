/**
 * The common interface for the algorithm family which makes algorithms interchangeable.
 */
export interface Strategy {
    execute(): void;
}

/**
 * Concrete implementation of the strategy A.
 */
export class ConcreteStrategyA implements Strategy {
    public execute(): void {
        console.log("ConcreteStrategyA has been executed");
    }
}

/**
 * Concrete implementation of the strategy B.
 */
export class ConcreteStrategyB implements Strategy {
    public execute(): void {
        console.log("ConcreteStrategyB has been executed");
    }
}

/**
 * The Context class which uses one of the strategies. The concrete implementation of
 * the used strategy will be injected runtime through constructor. The Context class
 * has no knowledge about the concrete implementation of the strategy. It uses through
 * the Strategy interface, which makes the strategies interchangeable.
 */
export class Context {
    private strategy: Strategy;

    /**
     * The concrete strategy implementation is injected through constructor.
     */
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    /**
     * Executing the strategy.
     */
    public executeStrategy(): void {
        this.strategy.execute();
    }
}

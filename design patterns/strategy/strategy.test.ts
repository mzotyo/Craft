import { Strategy, ConcreteStrategyA, ConcreteStrategyB, Context } from './strategy';

console.log = jest.fn();

/**
 * The client code works with the Strategy interface. This way
 * it can stay independent of the concrete strategy classes it 
 * works with. It creates a Context class in wich it injects a
 * concrete Strategy implementation. The context then it will 
 * use it without knowing which implementation it is.
 */
 function clientCode(strategy: Strategy) {
    const context = new Context(strategy);
    context.executeStrategy();
}

describe('Example usage of strategy pattern', () => {

    it('Creates a Context in which the ConcreteStrategyA will be executed', () =>{
        clientCode(new ConcreteStrategyA());

        expect(console.log)
            .toHaveBeenCalledWith('ConcreteStrategyA has been executed');
    });

    it('Creates a Context in which the ConcreteStrategyB will be executed', () =>{
        clientCode(new ConcreteStrategyB());
        
        expect(console.log)
            .toHaveBeenCalledWith('ConcreteStrategyB has been executed');
    });

});

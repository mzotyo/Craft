import { Component, ConcreteComponent, ConcreteDecoratorA, ConcreteDecoratorB } from './decorator';

console.log = jest.fn();

/**
 * The client code works with all objects using the Component interface. This 
 * way it can stay independent of the concrete classes of components it works 
 * with.
 */
function clientCode(component: Component) {
    console.log(`RESULT: ${component.operation()}`);
}

describe('Example usage of decorator pattern', () => {
    /**
     * This way the client code can siupport both simple components...
     */
    const simple = new ConcreteComponent();

    /**
     * ...as well as decorated one.
     *
     * Note how decorators can wrap not only simple components but other
     * decorators as well
     */
    const decorator1 = new ConcreteDecoratorA(simple);
    const decorator2 = new ConcreteDecoratorB(decorator1);

    test('Simple component', () => {
        clientCode(simple);
        
        expect(console.log)
            .toHaveBeenCalledWith('RESULT: ConcreteComponent');
    });
    
    test('Decorated with Decorator1', () => {
        clientCode(decorator1);
        
        expect(console.log)
            .toHaveBeenCalledWith('RESULT: ConcreteDecoratorA( ConcreteComponent )');
    });

    test('Decorated with Decorator2', () => {
        clientCode(decorator2);
        
        expect(console.log)
            .toHaveBeenCalledWith('RESULT: ConcreteDecoratorB( ConcreteDecoratorA( ConcreteComponent ) )');
    });
});

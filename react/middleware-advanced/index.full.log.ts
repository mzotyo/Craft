import * as redux from 'redux';

const TEST_ACTION = 'test action';
const DEVIDE_ACTION = 'devide action';
const MULTIPLY_ACTION = 'multiply action';
const DISPLAY_ACTION = 'display action';

const testAction = (number: number) => ({
    type: TEST_ACTION,
    payload: number
});

const devideAction = (number: number, devider: number) => ({
    type: DEVIDE_ACTION,
    payload: { number, devider }
});

const multiplyAction = (number: number, multiplier: number) => ({
    type: MULTIPLY_ACTION,
    payload: { number, multiplier }
});

const displayAction = (number: number) => ({
    type: DISPLAY_ACTION,
    payload: number
});

const log = (middleware: string, action: any) => {
    console.log({ middleware, action });
}

const test = (store: any) => (next: (action: any) => any) => (action: any) => {
    if(action.type === TEST_ACTION) {
        log('[test]', action);

        if((action.payload % 2) === 0) {
            store.dispatch(devideAction(action.payload, 2));
        } else {
            store.dispatch(multiplyAction(action.payload, 2));
        }
    } else {
        log('test', action);
    }
    return next(action);
}

const devide = (store: any) => (next: (action: any) => any) => (action: any) => {
    if(action.type === DEVIDE_ACTION) {
        log('[devide]', action);

        const number = action.payload.number;
        const devider = action.payload.devider;
        store.dispatch(displayAction(number / devider));
    } else {
        log('devide', action);
    }
    return next(action);
}

const multiply = (store: any) => (next: (action: any) => any) => (action: any) => {
    if(action.type === MULTIPLY_ACTION) {
        log('[multiply]', action);

        const number = action.payload.number;
        const multiplier = action.payload.multiplier;
        const result = number * multiplier;
        store.dispatch(displayAction(result));
    } else {
        log('multiply', action);
    }
    return next(action);
}

const display = (state: any = { number: undefined }, action: any) => {
    if(action.type === DISPLAY_ACTION) {
        log('[display]', action);
        
        return {
            number: action.payload
        }
    } else {
        log('display', action);
    }
}

const store = redux.createStore(display, redux.applyMiddleware(test, devide, multiply));
store.dispatch(testAction(3));




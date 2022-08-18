# Advance middleware application

## Problem description

```
          test (n)               multiply (n, m)                 display (r)
[start] ------------> [test] ---------------------> [multiply] -------------------> [display]
                              \                                                /
                               \   devide (n, d)                 display (r)  /
                                *-----------------> [devide] ----------------*
```

## Initial project setup
**keywords**: react, redux, typescript

```bash
# Initialize package.json
> npm init --yes

# Install typescript dependency
> npm install -g typescript

# Initialize tsconfig.json
> tsc --init

# Add redux dependency
> npm install redux
```

Remove commented code from *tsconfig.json* and add following 
setting (output directory for typescript compile).
```json
"outDir": "./out"
```

Add *start* script to *package.json*. This will call the typescript 
compiler (*tsc*) then start the *index.js* which is the output of then
typescript compile.
```json
"start": "tsc && node out/index.js"
```
## Example application

### Action creators

```js
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
```

### Middlewares

```js
const test = (store: any) => (next: (action: any) => any) => (action: any) => {
    if(action.type === TEST_ACTION) {
        log('[test]', action);

        if((action.payload % 2) === 0) {
            store.dispatch(devideAction(action.payload, 2));
        } else {
            store.dispatch(multiplyAction(action.payload, 2));
        }
    }
    return next(action);
}

const devide = (store: any) => (next: (action: any) => any) => (action: any) => {
    if(action.type === DEVIDE_ACTION) {
        log('[devide]', action);

        const number = action.payload.number;
        const devider = action.payload.devider;
        store.dispatch(displayAction(number / devider));
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
    }
    return next(action);
}
```

### Reducer

```js
const display = (state: any = { number: undefined }, action: any) => {
    if(action.type === DISPLAY_ACTION) {
        log('[display]', action);
        
        return {
            number: action.payload
        }
    }
}
```

### Store

```js
const store = redux.createStore(display, redux.applyMiddleware(test, devide, multiply));
```

### Dispatch

```js
store.dispatch(testAction(3));
```

**result**
```
{ middleware: '[test]', action: { type: 'test action', payload: 3 } }
{
  middleware: '[multiply]',
  action: { type: 'multiply action', payload: { number: 3, multiplier: 2 } }
}
{
  middleware: '[display]',
  action: { type: 'display action', payload: 6 }
}
```

```js
store.dispatch(testAction(6));
```

**result**
```
{ middleware: '[test]', action: { type: 'test action', payload: 6 } }
{
  middleware: '[devide]',
  action: { type: 'devide action', payload: { number: 6, devider: 2 } }
}
{
  middleware: '[display]',
  action: { type: 'display action', payload: 3 }
}
```

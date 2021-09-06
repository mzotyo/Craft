# React Redux Tutorials

## Initial Setup

1. Create a folder with the name `redux-demo`.

2. Inside the folder `redux-demo` run the following command:

```shell
> npm init --yes
```

This will initialize a `package.json` with default settings.
```json
{
  "name": "redux-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

3. Add redux as a dependency for our project

```shell
> npm install redux
```

```json
  ...
  "dependencies": {
    "redux": "^4.1.1"
  }
}
```

4. Create the `index.js` JavaScript file

```js
console.log('hello world')
```

```shell
> node index
hello world
```

## Actions

1. Define our fitst action type

```js
const BUY_CAKE = 'BUY_CAKE'
```

2. Define our first action

```js
{
    type: BUY_CAKE
}
```

3. The additional property of an action

```js
{
    type: BUY_CAKE
    info: 'First redux action'
}
```

4. Create an action creator: a function that creates an action.

```js
function buyCacke() {
    return {
        type: BUY_CACKE,
        info: 'First redu action'
    }
}
```

## Reducers

1. Defineing the state of the application

```js
const initialState = {
    numOfCakes: 10
}
```

2. Define the reducer function

```js
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}
```

## Redux Store

1. Implementing the responsabilities of a redux store:
    - holds application state
    - allows access to state via *getState()*
    - registers listeners via *subscribe(listener)*
    - allows state to be updated via *dispatch(action)*
    - handles unregistering of listeners via the function returned by *subscribe(listener)*

```js
const redux = require('redux')

...

const store = redux.createStore(reducer)
console.log('Inital state: ', store.getState())
const unsubscribe = store.subscribe(
    () => console.log('Updated state: ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
```

Test the application with the following shell command:

```shell
> node index
Inital state:  { numOfCakes: 10 }
Updated state:  { numOfCakes: 9 }
Updated state:  { numOfCakes: 8 }
Updated state:  { numOfCakes: 7 }
```
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
function buyCake() {
    return {
        type: BUY_CAKE,
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

## Multiple Reducers

### Multiple states in one initial state

1. Adding another property to the initial state of the application:

```js
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}
```

2. Adding another switch case into the reducer:

```js
const reducer = (state = initialState, action) => {
    switch(action.type) {
        ...

        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfCakes - 1
        }

        default: return state
    }
}
```

3. Define action type

```js
const BUY_ICECREAM = 'BUY_ICECREAM'
```

4. Create the action creator

```js
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    }
}
```

5. Dispatch the new action

```js
const redux = require('redux')

...

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
```

Test the application with the following shell command:
```shell
> node index
Inital state:  { numOfCakes: 10, numOfIceCreams: 20 }
Updated state:  { numOfCakes: 9, numOfIceCreams: 20 }
Updated state:  { numOfCakes: 8, numOfIceCreams: 20 }
Updated state:  { numOfCakes: 7, numOfIceCreams: 20 }
Updated state:  { numOfCakes: 7, numOfIceCreams: 6 }
Updated state:  { numOfCakes: 7, numOfIceCreams: 6 }
```

### Splitting the state and the reducers

1. Splitting the state:

```js
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}
```

2. Splitting the reducers:

```js
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfCakes - 1
        }

        default: return state
    }
}
```

### Combine reducers

1. Combine the splitted reducer

```js
const combineReducers = redux.combineReducers

... 

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = redux.createStore(rootReducer)

...
```

2. Run the command

```shell
> node index
Inital state:  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
Updated state:  { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
Updated state:  { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
Updated state:  { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
Updated state:  { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: NaN } }
Updated state:  { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: NaN } }
```

## Middleware

- Is the suggested way to extend Redux with custom functionality.
- Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- Use middleware for logging, crash reporting, performing aynchronous tasks etc.

### Redux Logger (middleware)

1. Install the logger library

```shell
npm install redux-logger
```

2. Creating a redux logger

```js
const reduxLogger = require('redux-logger');

...

const logger = reduxLogger.createLogger();

...

const applyMiddleware = redux.applyMiddleware

...

const store = redux.createStore(rootReducer, applyMiddleware(logger))
const unsubscribe = store.subscribe(() => { }) // remove the original logger
```

3. Run the command:

```shell
> node index
Inital state:  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
...
 action BUY_ICECREAM @ 18:10:26.036
   prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: NaN } }
   action     { type: 'BUY_ICECREAM' }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: NaN } }
```

4. Fix the error

```js
case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
```

5. Run the command again

```shell
> node index
Inital state:  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
 action BUY_CAKE @ 18:13:12.224
   prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
   action     { type: 'BUY_CAKE', info: 'First redu action' }
   next state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
 action BUY_CAKE @ 18:13:12.227
   prev state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
   action     { type: 'BUY_CAKE', info: 'First redu action' }
   next state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
 action BUY_CAKE @ 18:13:12.228
   prev state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
   action     { type: 'BUY_CAKE', info: 'First redu action' }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
 action BUY_ICECREAM @ 18:13:12.229
   prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
   action     { type: 'BUY_ICECREAM' }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
 action BUY_ICECREAM @ 18:13:12.230
   prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
   action     { type: 'BUY_ICECREAM' }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 18 } }
```

## Async Actions

Asynchronous API calls to fetch data from an endpoint and use that data in your application. The task is to fetch a list of users from an API end point and store it in the redux store.

### State

```js
state = {
    loading: true,
    data[],
    error: ''
}
```

- **loading** - Displays a loading spinner in your component
- **data** - List of users
- **error** - Display the error to the user

### Actions

- **FETCH_USERS_REQUEST** - fetching list of users
- **FETCH_USERS_SUCCESS** - Fetched successfully
- **FETCH_USERS_FAILURE** - Error fetching the data

### Reducers

- case **FETCH_USERS_REQUEST**
    + loading: true
- case **FETCH_USERS_SUCCESS**
    + loading: false
    + users: data (from API)
- case **FETCH_USERS_FAILURE**
    + loading: false
    + error: error (from API)
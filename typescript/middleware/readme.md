# Middleware

## Initial setup

```shell
# Initialize package.json
> npm init --yes

# Install typescript dependency
> npm install -g typescript

# Initialize tsconfig.json
> tsc --init

# Add redux dependency
> npm install redux
```


Add following settings to *tsconfig.json*.

```json
"outDir": "./out"
```

Add following script definition to *package.json*.

```json 
"start":"tsc && node out/index.js"
```

## Example Application

```ts
import * as redux from 'redux';

// Create reducer
const reducer = (state: any = {}, action: any) => {
    console.log('[reducer]', 'state:', state, 'action:', action);
}

// Create middleware
const middleware = (store: any) => (next: (action: any) => any) => (action: any) => {
    console.log('[middleware] before reducer');
    const result = next(action);
    console.log('[middleware] after reducer');
    return result;
};

// Create store
const store = redux.createStore(reducer, redux.applyMiddleware(middleware));

// Dispatch action
store.dispatch({type: 'message', payload: 'something'});
```

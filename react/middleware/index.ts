import * as redux from 'redux';

const reducer = (state: any = {}, action: any) => {
    console.log('[reducer]', 'state:', state, 'action:', action);
}

const middleware = (store: any) => (next: (action: any) => any) => (action: any) => {
    console.log('[middleware] before reducer');
    const result = next(action);
    console.log('[middleware] after reducer');
    return result;
};

const store = redux.createStore(reducer, redux.applyMiddleware(middleware));
store.dispatch({type: 'message', payload: 'something'});
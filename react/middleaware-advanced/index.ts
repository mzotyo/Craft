import { createStore, applyMiddleware } from 'redux';

const URL = 'https://jsonplaceholder.typicode.com/todos';

// ------------------
// Api
// ------------------
const API_REQUEST = '[api] request';

// Action creators
const apiRequest = (method: string, url: string, body: any, onSuccess: string, onError: string) => ({
    type: API_REQUEST,
    payload: body,
    meta: { method, url, onSuccess, onError }
});

// Middlewares
const api = (store: any) => (next: (action: any) => any) => (action: any) => {
    if(action.type === API_REQUEST) {
        const { method, url, onSuccess, onError } = action.meta;

        fetch(url, {method})
            .then( response => response.json)
            .then( data => 
                store.dispatch({
                    type: onSuccess,
                    payload: data
                }))
            .catch( error => 
                store.dispatch({
                    type: onError,
                    payload: error
                }));
    }

    return next(action);
}

// ------------------
// Data
// ------------------
const GET_DATA = '[data] get';
const FETCH_DATA_SUCCESS = '[data] fetch success';
const FETCH_DATA_ERROR = '[data] fetch error';

// Action creators
const getDataAction = () => ({
    type:  GET_DATA
});

// Middlewares
const getDataFlow = (store: any) => (next: (action: any) => any) => (action: any) => {
    next(action);

    if(action.type === GET_DATA) {
        store.dispatch(apiRequest('GET', URL, null, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR));
    }
}

// ------------------
// Reducers
// ------------------
const reducer = (state: any = {}, action: any) => {
    console.log('[reducer]', 'state:', state, 'action:', action);
}

// ------------------
// Store
// ------------------
const store = createStore(reducer, applyMiddleware(getDataFlow, api));

// Dispatch actions
store.dispatch(getDataAction());
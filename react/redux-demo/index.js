const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

{
    type: BUY_CAKE
    info: 'First redux action'
}

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redu action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    }
}

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfCakes - 1
        }

        default: return state
    }
}

const store = redux.createStore(reducer)
console.log('Inital state: ', store.getState())
const unsubscribe = store.subscribe(
    () => console.log('Updated state: ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
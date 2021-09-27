const redux = require('redux');

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'this could be anything'
    }
}

const initialCakeState = {
    nrOfCakes: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action) {
        case BUY_CAKE:
            return {
                ...state,
                nrOfCakes: state.nrOfCakes + 1
            }
        default:
            return state
    }
}
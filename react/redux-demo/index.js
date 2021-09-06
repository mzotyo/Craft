const BUY_CAKE = 'BUY_CAKE'

{
    type: BUY_CAKE
    info: 'First redux action'
}

function buyCacke() {
    return {
        type: BUY_CACKE,
        info: 'First redu action'
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}
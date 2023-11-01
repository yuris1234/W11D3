


const POPULATE = 'cart/POPULATE'

export function populateCart(){
    return ({
        type: POPULATE,
        cart: {}
    })
}

export default function cartReducer(state={}, action){
    switch (action.type) {
        case POPULATE:
            const newState = {}
            return newState;
        default:
            return state;
    }
}
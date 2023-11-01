
const RECEIVE = 'cart/RECEIVE'

export function receiveItem(id){
    return ({
        type: RECEIVE,
        id
    })
}

export default function cartReducer(state={}, action){
    const newState = Object.assign({}, Object.freeze(state));
    switch (action.type) {
        case RECEIVE:
            newState[action.id] = {id: action.id, count: 1};
            return newState;
        default:
            return state;
    }
}

const RECEIVE = 'cart/RECEIVE'
const REMOVE = 'cart/REMOVE'

export function receiveItem(id){
    return ({
        type: RECEIVE,
        id
    })
}

export function removeItem(id){
    return ({
        type: REMOVE,
        id
    })
}

export default function cartReducer(state={}, action){
    const newState = Object.assign({}, Object.freeze(state));
    switch (action.type) {
        case RECEIVE:
            newState[action.id] = {id: action.id, count: 1};
            return newState;
        case REMOVE:
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}
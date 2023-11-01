
const RECEIVE = 'cart/RECEIVE';
const REMOVE = 'cart/REMOVE';
const INCREMENT = 'cart/INCREMENT';
const DECREMENT = 'cart/DECREMENT';

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

export function incrementItem(id, count){
    return ({
        type: INCREMENT,
        id,
        count
    })
}

export function decrementItem(id, count){
    return ({
        type: DECREMENT,
        id,
        count
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
        case INCREMENT:
            newState[action.id] = {id: action.id, count: action.count};
            return newState;
        case DECREMENT:
            newState[action.id] = {id: action.id, count: action.count};
            return newState;
        default:
            return state;
    }
}
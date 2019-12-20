import { createStore } from 'redux';

const defaultState = { count: 0 };

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = action.incrementBy ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = action.decrementBy ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                // REDUX NINJAS (DORCAS, PERIS, HELEN)
                count: action.count
            }
        case 'RESET':
            return {
                count: action.data
            }
        default:
            return state;
    }
}

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// ACTION_CREATOR
const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: payload.incrementBy ? payload.incrementBy : 1
});

const decrementCount = (payload = {}) => ({
    type: 'DECREMENT',
    decrementBy: payload.decrementBy ? payload.decrementBy : 1
})

const setCount = (payload) => ({
    type: 'SET',
    count: payload.count
})

const reset = (payload) => {
    return {
        type: 'RESET',
        data: payload.count
    }
}

store.dispatch(incrementCount());

store.dispatch(decrementCount());

const data3 = { count: 500 }
store.dispatch(setCount(data3));

const data2 = { decrementBy: 5 }
store.dispatch(decrementCount(data2));

const data1 = { incrementBy : 55 }
store.dispatch(incrementCount(data1));

const data4 = { count: 0 }
store.dispatch(reset(data4));


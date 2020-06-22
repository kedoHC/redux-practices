


const redux = require("redux")

const createStore = redux.createStore

// initial state

const initialState = {
    counter: 0
}

// REDUCER

const rootReducer = (state = initialState, action) => {


    switch (action.type) {
        case "INC__COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            }
            break;
    
        case "ADD__COUNTER":
            return {
                ...state,
                counter: state.counter + action.value
            }
            break;
    
        default:
            break;
    }

    return state
}

// STORE

const store = createStore(rootReducer)

// console.log(store.getState())

// SUBSCRIPTION

store.subscribe(() => {
    console.log( store.getState() )
})

// DISPATCHING ACTION

// store.dispatch({type: "INC__COUNTER"})
// store.dispatch({ type: "ADD__COUNTER", value: 10 })

// console.log( store.getState() )



// initial state

const initialState = {
    counter: 0,
    taxes: 100,
    total: 0,
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
        case "GET__TOTAL":
            return {
                ...state,
                total: state.counter + state.taxes
            }
            break;
    
        default:
            break;
    }
    return state
}

// STORE

const store = Redux.createStore(rootReducer)

// SUBSCRIPTION

// store.subscribe(() => {
//     console.log( store.getState() )
// })

// DISPATCHING ACTION

// store.dispatch({type: "INC__COUNTER"})
// store.dispatch({ type: "ADD__COUNTER", value: 10 })

// console.log( store.getState() )


const addOne = document.getElementById("addOne")

addOne.addEventListener("click", function () {

    store.dispatch({type: "INC__COUNTER"})
})

const addTen = document.getElementById("addTen")

addTen.addEventListener("click", function () {
    store.dispatch({ type: "ADD__COUNTER", value: 10 })
})

const counter = document.getElementById("counter")
const checkoutTotal = document.getElementById("checkoutTotal")


function renderData(){

    counter.innerHTML = store.getState().counter
    checkoutTotal.innerHTML = store.getState().total

}

store.subscribe(renderData) 



const checkout = document.getElementById("checkout")

checkout.addEventListener("click", function () {

    store.dispatch({ type: "GET__TOTAL" })
    
})
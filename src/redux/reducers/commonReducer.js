
const initialState ={
    editId: -1,
    isLoading: false,
    error: ""
}

const commonReducer = (state = initialState, action) => {

    switch(action.type){
        case "SET_LOADING":
            return {...state, isLoading: action.payload}

        case "SET_ERROR":
            return {...state, error: action.payload}

        case "REMOVE_ERROR":
            return {...state, error: ""}

        default: 
            return state
    }
}

export default commonReducer
const initialState ={
    editId: -1,
    isLoading: false,
    error: ""
}

export default function commonReducer(state = initialState, action) {

    switch(action.type){
        case "SET_EDIT_ID": 
            return {...state, editId: action.payload}
        
        case "SET_LOADING":
            return {...state, isLoading: action.payload}

        case "SET_ERROR":
            return {...state, error: action.payload}

        case "DELETE_ERROR":
            return {...state, error: ""}

        default: 
            return state
    }
}
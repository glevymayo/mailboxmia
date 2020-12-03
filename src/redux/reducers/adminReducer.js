const initialState = {
    plans: null
}

export default function adminReducer(state = initialState, action){

    switch(action.type){

        case "":
            return {...state}
        default:
            return state
    }
}

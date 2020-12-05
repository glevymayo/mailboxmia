import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage';

const initialState ={
    editId: -1,
    isLoading: false,
    error: ""
}
/*const persistConfig = {
    key: 'common',
    storage: storage,
    whitelist: ['editId'],
    blacklist: ['error', 'isLoading']
  };*/

const commonReducer = (state = initialState, action) => {

    switch(action.type){
        case "SET_EDIT_ID": 
            return {...state, editId: action.payload}
        
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

//export default persistReducer(persistConfig, commonReducer)
export default commonReducer
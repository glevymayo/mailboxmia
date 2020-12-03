const initialState = {
        displayName: '',
        uid: 0,
        email: '',
        error: ''
}

export default function authReducer(state = initialState, action) {
    switch(action.type){
        case "LOGIN_USER_FAIL":
            return {...state, 
                    error: 'Login error'}

        case "LOGIN_USER":
            return {...state, 
                    email: action.payload.email, 
                    displayName: action.payload.displayName, 
                    uid: action.payload.uid }

        default: return state;
    }
}
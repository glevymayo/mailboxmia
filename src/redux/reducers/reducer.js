import { combineReducers } from 'redux'
import statusReducer from './statusReducer';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    status: statusReducer,
    admin: adminReducer,
    common: commonReducer
})

export default rootReducer
import { combineReducers } from 'redux'
import statusReducer from './statusReducer';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import commonReducer from './commonReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['navigation']
  };

const rootReducer = combineReducers({
    auth: authReducer,
    status: statusReducer,
    admin: adminReducer,
    common: commonReducer
})

export default persistReducer(rootPersistConfig, rootReducer);

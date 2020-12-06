import { combineReducers } from 'redux'
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import commonReducer from './commonReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth']
  };

  /*const commonPersistConfig = {
    key: 'common',
    storage: storage,
    blacklist: ['error', 'isLoading']
  }*/

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    common: commonReducer
})

export default persistReducer(rootPersistConfig, rootReducer);

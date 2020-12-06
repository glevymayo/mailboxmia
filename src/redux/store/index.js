import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/reducer'; // the value from combineReducers


export const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);

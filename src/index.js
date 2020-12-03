import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/reducer'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/store';

//DENTRO DE PERSIST GATE DENERIA IR loading={<LoadingView>} que debe ser lo que muestra en loading. Investigar bien esto
ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode> ,
  document.getElementById('root')
);



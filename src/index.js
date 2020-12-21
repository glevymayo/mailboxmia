import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/store';
import { Loading } from './components/loading/loading.component';

//DENTRO DE PERSIST GATE DENERIA IR loading={<LoadingView>} que debe ser lo que muestra en loading. Investigar bien esto
ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);
//persistor.purge()
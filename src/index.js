import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore';
import './../node_modules/normalize.css';
import './../node_modules/react-rangeslider/lib/index.css';
import './styles/index.css';

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


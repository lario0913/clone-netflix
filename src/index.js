import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './app';
import {GlobalStyles} from './global-styles';
import {firebase} from './lib/firebase.prod'



ReactDOM.render(
    <>
      <GlobalStyles />
      <App />
    </>,
  document.getElementById('root')
);

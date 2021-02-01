import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-style';
import App from './App';

import FirebaseProvider from "./context/firebase";

ReactDOM.render(
  <FirebaseProvider>
    <GlobalStyles />
    <App />
  </FirebaseProvider>,
  document.getElementById('root')
);
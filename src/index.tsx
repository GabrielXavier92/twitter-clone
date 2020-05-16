import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import AuthenticationProvider from './context/authentication';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

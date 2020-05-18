import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import AuthenticationProvider from './context/authentication';
import UserProvider from './context/user';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

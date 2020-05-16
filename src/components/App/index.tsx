import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PublicRoutes, ProtectedRoutes } from '../../routes';

import AuthenticationState from '../../context/authentication/state';

import defaultTheme from '../../theme/defaultTheme';
import light from '../../theme/light';

const theme = {
  ...defaultTheme,
  ...light,
  mode: 'light',
};

const App = () => {
  const { auth } = useContext(AuthenticationState);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {auth
          ? <Route path="/" component={ProtectedRoutes} />
          : <Route path="/" component={PublicRoutes} />}
      </Router>
    </ThemeProvider>
  );
};

export default App;

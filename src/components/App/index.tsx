import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PublicRoutes, ProtectedRoutes } from '../../routes';

import AuthenticationState from '../../context/authentication/state';
import UserState from '../../context/user/state';

import defaultTheme from '../../theme/defaultTheme';
import light from '../../theme/light';
import dark from '../../theme/dark';

const App = () => {
  const { auth } = useContext(AuthenticationState);
  const { user } = useContext(UserState);
  const darkTheme = {
    ...defaultTheme,
    ...dark,
  };

  const lightTheme = {
    ...defaultTheme,
    ...light,
  };

  return (
    <ThemeProvider theme={user?.mode ? darkTheme : lightTheme}>
      <Router>
        {auth
          ? <Route path="/" component={ProtectedRoutes} />
          : <Route path="/" component={PublicRoutes} />}
      </Router>
    </ThemeProvider>
  );
};

export default App;

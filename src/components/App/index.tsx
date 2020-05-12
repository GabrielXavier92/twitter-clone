import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from '../../routes';
import light from '../../theme/light';
import defaultTheme from '../../theme/defaultTheme';

const theme = {
  ...defaultTheme,
  ...light,
  mode: 'light',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route path="/" component={Routes} />
    </Router>
  </ThemeProvider>
);

export default App;

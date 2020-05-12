import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/light';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>App Container</div>
  </ThemeProvider>
);

export default App;

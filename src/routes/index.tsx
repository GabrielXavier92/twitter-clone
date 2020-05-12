import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import AuthComponent from './AuthComponent';

const AppRoutes = () => (
  <Switch>
    <AuthComponent path="/home" component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Redirect to="/signin" />
  </Switch>
);

export default AppRoutes;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export const PublicRoutes = () => (
  <Switch>
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Redirect to="/signin" />
  </Switch>
);

export const ProtectedRoutes = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Redirect to="/home" />
  </Switch>
);

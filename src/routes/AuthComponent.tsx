/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import SignIn from '../pages/SignIn';

import { auth } from '../database/firebase';

interface IAuthComponent extends RouteComponentProps {
  component: React.FC;
  path: string;
}

const AuthComponent: React.FC<IAuthComponent> = ({ component, ...props }) => {
  const renderComponent = (Component) => (renderProps) => auth.onAuthStateChanged((user) => (user
    ? <Component {...renderProps} />
    : <Route path="/signin" component={SignIn} />));

  return <Route {...props} render={renderComponent(component)} />;
};

export default withRouter(AuthComponent);

import React, { useState, useEffect } from 'react';
import AuthenticationService from '../../service/authentication';
import { IUser } from '../../interfaces/user';

import AuthenticationContext from './state';

const AuthenticationProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState('');
  const [auth, setAuth] = useState(false);

  const handleSignIn = (userInput: IUser) => AuthenticationService.signInUser(userInput).catch((err) => { setError(err.message as string); });
  const handleSignUp = (userInput: IUser) => AuthenticationService.signUp(userInput)
    .then(() => {
      AuthenticationService.updateUser(userInput);
    }).catch((err) => {
      setError(err.message);
    });

  const handleAuthState = () => {
    AuthenticationService.auth.onAuthStateChanged((teste) => {
      if (teste) { setAuth(true); }
    });
    console.log(setUser);
  };

  const handleSignOut = () => {
    setAuth(false);
    AuthenticationService.signOutUser();
  };

  useEffect(handleAuthState, [auth]);

  const value = {
    user,
    error,
    auth,
    handleSignIn,
    handleSignUp,
    handleSignOut,
  };

  return (<AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>);
};

export default AuthenticationProvider;

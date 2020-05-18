import { createContext } from 'react';

interface IAuthenticationContext {
  auth?: boolean;
  error?: string;
  handleSignIn: Function;
  handleSignUp: Function;
  handleSignOut: Function;
}

export default createContext<IAuthenticationContext>({
  handleSignIn: () => false,
  handleSignUp: () => false,
  handleSignOut: () => false,
});

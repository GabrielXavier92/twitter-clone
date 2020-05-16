import { createContext } from 'react';
import { IUser } from '../../interfaces/user';

interface IAuthenticationContext {
  user?: IUser;
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

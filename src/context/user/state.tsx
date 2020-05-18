import { createContext } from 'react';
import { IUser } from '../../interfaces/user';

interface IUserContext {
  user?: IUser;
  handleUpdateUser: Function;
  handleGetUser: Function;
  uploadImageAsync: Function;
}

export default createContext<IUserContext>({
  handleUpdateUser: () => false,
  handleGetUser: () => false,
  uploadImageAsync: () => false,
});

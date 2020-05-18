import { IUser } from '../../interfaces/user';
import Firebase from '../../database/firebase';

class AuthenticationService {
  // eslint-disable-next-line class-methods-use-this
  get auth() {
    return Firebase.auth;
  }

  signUp = async (user: IUser) => Firebase.signUp(user);

  signInUser = (user: IUser) => Firebase.signIn(user.email, user.password);

  resetUserPassword = (email: any) => Firebase.resetPassword(email);

  getUser = () => Firebase.getUser();

  updateUser = (user: IUser) => Firebase.updateUser(user);

  signOutUser = () => Firebase.signOut();
}

export default new AuthenticationService();

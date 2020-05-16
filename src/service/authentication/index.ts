import { IUser } from '../../interfaces/user';
import { auth, firestore } from '../../database/firebase';

class Authentication {
  // eslint-disable-next-line class-methods-use-this
  get uid() {
    return (auth.currentUser || {}).uid;
  }

  createUser = async (user: IUser) => {
    const { name, email, password } = user;
    try {
      await auth.createUserWithEmailAndPassword(email, password);

      const createdUser = firestore.collection('users').doc(this.uid);

      return createdUser.set({
        name,
        email,
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  signInUser = (user: IUser) => {
    const { email, password } = user;
    try {
      return auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      throw new Error(err);
    }
  };

  resetUserPassword = (email) => {
    try {
      return auth.sendPasswordResetEmail(email);
    } catch (err) {
      throw new Error(err);
    }
  };

  signOutUser = () => auth.signOut();
}

export default new Authentication();

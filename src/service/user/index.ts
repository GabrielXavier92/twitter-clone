import { IUser } from '../../interfaces/user';
import Firebase from '../../database/firebase';

class UserService {
  getUser = () => Firebase.getUser();

  updateUser = (user: IUser) => Firebase.updateUser(user);

  uploadImage = (filename, file) => Firebase.uploadImage(filename, file);
}

export default new UserService();

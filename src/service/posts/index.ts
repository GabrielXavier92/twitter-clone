import { IPost } from 'src/interfaces/post';
import Firebase from '../../database/firebase';

class UserService {
  createPost = (post: IPost) => Firebase.createPost(post);

  getPosts = () => Firebase.getPosts();
}

export default new UserService();

import { IPost } from '../../interfaces/post';
import Firebase from '../../database/firebase';

class UserService {
  createPost = (post: IPost) => Firebase.createPost(post);

  getPosts = () => Firebase.getPosts().orderBy('timestamp', 'desc');
}

export default new UserService();

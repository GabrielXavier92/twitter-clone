import { IPost } from 'src/interfaces/post';
import * as firebase from 'firebase';
import { IUser } from '../interfaces/user';


const firebaseConfig = {
  apiKey: 'AIzaSyA3EcCLyGrqsmcZBcU-SUaruJlV4gyuExE',
  authDomain: 'twitter-clone-76a4b.firebaseapp.com',
  databaseURL: 'https://twitter-clone-76a4b.firebaseio.com',
  projectId: 'twitter-clone-76a4b',
  storageBucket: 'twitter-clone-76a4b.appspot.com',
  messagingSenderId: '80660789795',
  appId: '1:80660789795:web:aba202a709307d60598f96',
};

class Firebase {
  auth: firebase.auth.Auth;

  firestore: firebase.firestore.Firestore;

  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
  }

  get uid() {
    return (this.auth.currentUser || {}).uid;
  }

  signUp = async (user: IUser) => this.auth.createUserWithEmailAndPassword(user.email, user.password);;

  signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  resetPassword = (email) => this.auth.sendPasswordResetEmail(email);

  signOut = () => this.auth.signOut();

  updatePassword = (password) => this.auth.currentUser?.updatePassword(password);

  getUser = () => this.firestore.collection('users').doc(this.uid).get();

  updateUser = (user: IUser) => this.firestore.collection('users').doc(this.uid).set(user, { merge: true });

  uploadImage = (filename, file) => firebase.storage().ref(`${filename}/${this.uid}`).put(file);

  createPost = (post: IPost) => this.firestore.collection('posts').doc().set({ owerId: this.uid, ...post });

  getPosts = () => this.firestore.collection('posts');
  ;
}

export default new Firebase();

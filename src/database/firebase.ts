import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA3EcCLyGrqsmcZBcU-SUaruJlV4gyuExE',
  authDomain: 'twitter-clone-76a4b.firebaseapp.com',
  databaseURL: 'https://twitter-clone-76a4b.firebaseio.com',
  projectId: 'twitter-clone-76a4b',
  storageBucket: 'twitter-clone-76a4b.appspot.com',
  messagingSenderId: '80660789795',
  appId: '1:80660789795:web:aba202a709307d60598f96',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

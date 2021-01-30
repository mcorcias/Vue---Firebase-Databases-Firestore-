import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAFxAa16iHQJsuLN1esAT8pU9Pu095zDnM',
  authDomain: 'blog-posts-a2c0f.firebaseapp.com',
  projectId: 'blog-posts-a2c0f',
  storageBucket: 'blog-posts-a2c0f.appspot.com',
  messagingSenderId: '148961775521',
  appId: '1:148961775521:web:79cdf511b449d11be9c5e0',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBk51A0m328QE7YkBJkoAMMxFueBaekrAQ",
    authDomain: "coderhouse-react-178d8.firebaseapp.com",
    projectId: "coderhouse-react-178d8",
    storageBucket: "coderhouse-react-178d8.appspot.com",
    messagingSenderId: "677270363257",
    appId: "1:677270363257:web:5f550e3630d0a3a899c8a8"
  };

  const app =initializeApp(firebaseConfig);

  export const db = getFirestore(app);
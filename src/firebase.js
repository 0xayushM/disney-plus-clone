import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/firestore'
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUBF1CWt5AE2vOFI3p1RMWzNlemY7gR2M",
    authDomain: "disney-plus-clone-7ebc8.firebaseapp.com",
    projectId: "disney-plus-clone-7ebc8",
    storageBucket: "disney-plus-clone-7ebc8.appspot.com",
    messagingSenderId: "457258204491",
    appId: "1:457258204491:web:3d406591fcac1c4e127cce",
    measurementId: "G-WMSQMGKY0R"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
export const storage = firebase.storage();
export const authentication = getAuth(firebaseApp);
export default db;

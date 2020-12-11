import firebaseConfig from './firebase_config'
import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();

export {firestore, storage};

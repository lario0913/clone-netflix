import Firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/app'
import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyAxw_bPzrvoP_ndM0HCvDpu5jDcf3GwKHE",
    authDomain: "clone-netflix-dc9ff.firebaseapp.com",
    projectId: "clone-netflix-dc9ff",
    storageBucket: "clone-netflix-dc9ff.appspot.com",
    messagingSenderId: "435635577419",
    appId: "1:435635577419:web:1361080d0fdf9afa9da3ce"
};

const firebase = Firebase.initializeApp(config)

seedDatabase(firebase)

export {firebase}
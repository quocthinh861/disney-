import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBRiZWYvQui_B5OfQCRGWpDgfIWxNRbYbg",
    authDomain: "disney-159b2.firebaseapp.com",
    databaseURL: "https://disney-159b2-default-rtdb.firebaseio.com",
    projectId: "disney-159b2",
    storageBucket: "disney-159b2.appspot.com",
    messagingSenderId: "480645263996",
    appId: "1:480645263996:web:098adf4d2d5cfd4bc50ff9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
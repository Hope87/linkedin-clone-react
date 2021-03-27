import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKmOegOV0Vg6zah6rwmXU5qqNxsBaffn4",
  authDomain: "linkedin-clone-24a7c.firebaseapp.com",
  projectId: "linkedin-clone-24a7c",
  storageBucket: "linkedin-clone-24a7c.appspot.com",
  messagingSenderId: "580882724147",
  appId: "1:580882724147:web:d88d976157ca9a9c3f7a46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVXMf4vA2s3npHJ1JlELHDwH-_LiFxwyc",
  authDomain: "comebackalums.firebaseapp.com",
  projectId: "comebackalums",
  storageBucket: "comebackalums.appspot.com",
  messagingSenderId: "195792291002",
  appId: "1:195792291002:web:d46cd6d29c1a0652d2ee83",
  measurementId: "G-DKEEEH9JWP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
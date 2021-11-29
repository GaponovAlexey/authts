import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMvaoP_y-PsLzVf8E4ML7rBGeE6aB7phM",
  authDomain: "authexemple-1e9b2.firebaseapp.com",
  projectId: "authexemple-1e9b2",
  storageBucket: "authexemple-1e9b2.appspot.com",
  messagingSenderId: "674947416743",
  appId: "1:674947416743:web:2503d93018b9f33e295182"
};

const app = initializeApp(firebaseConfig);


// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId:process.env.REACT_APP_FIREBASE_PROGECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUSKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// const app = initializeApp(firebaseConfig);
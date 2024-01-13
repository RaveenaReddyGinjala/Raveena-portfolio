import firebase from "firebase/compat/app";
import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMCIeb5fx3Cdw9Y-mv5sypK2Xj1SQgBxM",
  authDomain: "raveena-portfolio.firebaseapp.com",
  databaseURL: "https://raveena-portfolio-default-rtdb.firebaseio.com",
  projectId: "raveena-portfolio",
  storageBucket: "raveena-portfolio.appspot.com",
  messagingSenderId: "150353262316",
  appId: "1:150353262316:web:281a74790418653f9a97c9",
};

// Initialize Firebase
// export const myfirebaseapp = initializeApp(firebaseConfig);
const myfirebaseapp = firebase.initializeApp(firebaseConfig);

export default myfirebaseapp;

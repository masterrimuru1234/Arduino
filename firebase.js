// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANHU3PYDxjTJz8MTgYatAxjG-9IH6VptI",
  authDomain: "nodefire-647de.firebaseapp.com",
  databaseURL: "https://nodefire-647de-default-rtdb.firebaseio.com",
  projectId: "nodefire-647de",
  storageBucket: "nodefire-647de.appspot.com",
  messagingSenderId: "846865024739",
  appId: "1:846865024739:web:e9bd401b63db40805c67d6",
  measurementId: "G-BKDCKK6CQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
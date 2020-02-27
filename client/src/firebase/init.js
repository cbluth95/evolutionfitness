const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDCSRZfZQxwaMbgx_7tGv-vi1M7BeNvt44",
  authDomain: "evolutionfitness-5cf83.firebaseapp.com",
  databaseURL: "https://evolutionfitness-5cf83.firebaseio.com",
  projectId: "evolutionfitness-5cf83",
  storageBucket: "evolutionfitness-5cf83.appspot.com",
  messagingSenderId: "320681556026",
  appId: "1:320681556026:web:3ad77e9cd518f4ba231d03",
  measurementId: "G-E79Q2SK9YW"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//export firestore database
export default firebaseApp.firestore();

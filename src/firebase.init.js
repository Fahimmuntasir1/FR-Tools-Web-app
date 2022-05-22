// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7FMFN_0W56z43MxBV_VtCiJaj5LErO9I",
  authDomain: "fr--tools.firebaseapp.com",
  projectId: "fr--tools",
  storageBucket: "fr--tools.appspot.com",
  messagingSenderId: "988311730115",
  appId: "1:988311730115:web:54399627b3ed43fec56f76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

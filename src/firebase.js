// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4VPFW2AitIsHsopW-sbklmezQBtaPNIA",
  authDomain: "fir-auth-fa5e2.firebaseapp.com",
  projectId: "fir-auth-fa5e2",
  storageBucket: "fir-auth-fa5e2.appspot.com",
  messagingSenderId: "156141734243",
  appId: "1:156141734243:web:fb91a7c6a1d2d143f32b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
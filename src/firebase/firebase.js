import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhFEZA9TZLA3-xpVB_TJNK7T1BEOxNqME",
  authDomain: "demostore-fdb66.firebaseapp.com",
  projectId: "demostore-fdb66",
  storageBucket: "demostore-fdb66.appspot.com",
  messagingSenderId: "662803703638",
  appId: "1:662803703638:web:f2210ed98e1554454bd8f7",
  measurementId: "G-5KE00P30Z4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

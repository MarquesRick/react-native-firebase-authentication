import { initializeApp } from "firebase/app";
import  {initializeAuth, getReactNativePersistence} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4FB4D1MEBELYlPJORLfIYSMrJ-FpEtjM",
  authDomain: "reactnative-sport.firebaseapp.com",
  projectId: "reactnative-sport",
  storageBucket: "reactnative-sport.appspot.com",
  messagingSenderId: "61717787989",
  appId: "1:61717787989:web:2fbb7cc29eb36607faebdc",
  measurementId: "G-0NLBHSKE2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//the persistence add on AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export {auth};
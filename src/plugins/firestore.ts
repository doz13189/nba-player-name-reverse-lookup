// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSgNtmFt-m1cM_n5PrVygZZHKCui-9ZVs",
  authDomain: "nba-player-name-reverse-lookup.firebaseapp.com",
  projectId: "nba-player-name-reverse-lookup",
  storageBucket: "nba-player-name-reverse-lookup.appspot.com",
  messagingSenderId: "306664478728",
  appId: "1:306664478728:web:7d524708264b56932099bd",
  measurementId: "G-NDV2Z7XV4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firestoreProductionConfig = getFirestore(app);
type firestoreType = typeof firestoreProductionConfig

export {
  firestoreProductionConfig,
  firestoreType
}
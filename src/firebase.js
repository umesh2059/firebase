import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6KBF4I-KsjLK0nGKNnNK-Zt4qSYIDUMs",
  authDomain: "clone-app-74982.firebaseapp.com",
  projectId: "clone-app-74982",
  storageBucket: "clone-app-74982.appspot.com",
  messagingSenderId: "946319333137",
  appId: "1:946319333137:web:76f1063f634f0d888adeb0",
  measurementId: "G-7VXZ070S2D",
databaseURL: "https://clone-app-74982-default-rtdb.firebaseio.com"


}
export const app= initializeApp(firebaseConfig);
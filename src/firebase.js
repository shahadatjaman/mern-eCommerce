import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjhyUsVO1Yxs1b9QprN0mm6QD11l0jQ34",
  authDomain: "ecommerce-67f20.firebaseapp.com",
  projectId: "ecommerce-67f20",
  storageBucket: "ecommerce-67f20.appspot.com",
  messagingSenderId: "1044648508493",
  appId: "1:1044648508493:web:74fb7a2277affacd88f004",
  measurementId: "G-4HWTWVN22W",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-ENDIDWCIoT8dXYqjkd73KIBBxuvFJuk",
  authDomain: "xchat-c02c9.firebaseapp.com",
  databaseURL: "https://xchat-c02c9.firebaseio.com",
  projectId: "xchat-c02c9",
  storageBucket: "xchat-c02c9.appspot.com",
  messagingSenderId: "869694673707",
  appId: "1:869694673707:web:73073904c754022054eb6e"
};

export const initializeDB = () => {
  return firebase.initializeApp(firebaseConfig);
};

export const collection = async (name: string) => {
  const db = firebase.firestore();
  return db.collection(name);
};

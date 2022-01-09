import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRnUwFm1qIffaEPGl4F5bMGUjAYyYuWPg",
  authDomain: "tik-tok-clone-cea0d.firebaseapp.com",
  projectId: "tik-tok-clone-cea0d",
  storageBucket: "tik-tok-clone-cea0d.appspot.com",
  messagingSenderId: "945596964732",
  appId: "1:945596964732:web:126fa1f8b4d0cea9f60ef9",
  measurementId: "G-MMJRGH7RTV",
};

const firebaseApp = firebase.intializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyCRnUwFm1qIffaEPGl4F5bMGUjAYyYuWPg",
//   authDomain: "tik-tok-clone-cea0d.firebaseapp.com",
//   projectId: "tik-tok-clone-cea0d",
//   storageBucket: "tik-tok-clone-cea0d.appspot.com",
//   messagingSenderId: "945596964732",
//   appId: "1:945596964732:web:126fa1f8b4d0cea9f60ef9",
//   measurementId: "G-MMJRGH7RTV",
// };

// const app = initializeApp(firebaseConfig);

// const database = getFirestore(app);
// export default database;

import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC97ftBZz4C0RrzSVen-z5pEEVKgZ3N9fU",
    authDomain: "linkedin-clone-7ee22.firebaseapp.com",
    projectId: "linkedin-clone-7ee22",
    storageBucket: "linkedin-clone-7ee22.appspot.com",
    messagingSenderId: "428251596041",
    appId: "1:428251596041:web:1e772a9bb9968f9914ffd8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }; 
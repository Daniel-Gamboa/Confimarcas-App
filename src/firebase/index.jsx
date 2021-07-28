 import firebase from "firebase/app";
import   "@firebase/firestore";
 
 // Your web app's Firebase configuration
 // Initialize Firebase
 const app = firebase.initializeApp({
    apiKey: "AIzaSyDkN-XVMnfvDzmvkGsIHBbA45pAIiWTQR0",
    authDomain: "confimarcas-c8ab3.firebaseapp.com",
    projectId: "confimarcas-c8ab3",
    storageBucket: "confimarcas-c8ab3.appspot.com",
    messagingSenderId: "811803663661",
    appId: "1:811803663661:web:026e203c1f0dc8485b07a4"
  });
 
  export const getFirebase = () =>{
      return app;
  }

  export const getFirestore = () =>{
      return firebase.firestore(app);
  }
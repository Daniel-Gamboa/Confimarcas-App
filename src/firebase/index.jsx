/**Importción de los servicios de Firebase */
import firebase from "firebase/app";
import   "@firebase/firestore";
 
/**Definir y crear la conexión con Firebase */
 const app = firebase.initializeApp ({
    apiKey: "AIzaSyCB7DkYrNO5zwDxNofDUdTCqgQR6eGz4-s",
    authDomain: "confimarcasapp.firebaseapp.com",
    projectId: "confimarcasapp",
    storageBucket: "confimarcasapp.appspot.com",
    messagingSenderId: "113999863682",
    appId: "1:113999863682:web:beb775fee78cca7c89b99b"
  });
 
  export const getFirebase = () =>{
      return app;
  }

  /**Crea la conexión con el servicio de Firestore */
  export const getFirestore = () =>{
      return firebase.firestore(app);
  }
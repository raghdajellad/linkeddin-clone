import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDfIH6qZqtIKwJuwNXSUO_dXJUFtZSDQZs",
  authDomain: "linkedin-clone-8f43d.firebaseapp.com",
  projectId: "linkedin-clone-8f43d",
  storageBucket: "linkedin-clone-8f43d.appspot.com",
  messagingSenderId: "548657493647",
  appId: "1:548657493647:web:e61582961c6683bed0a2fa",
  measurementId: "G-Q7FGJ0BQ84"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export{ auth,provider, storage};
  export  {db}; 
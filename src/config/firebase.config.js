import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyC_u0tNIbREz5--rA86JjOTLuETqhcgRDM",
  authDomain: "codepractice-711e4.firebaseapp.com",
  projectId: "codepractice-711e4",
  storageBucket: "codepractice-711e4.appspot.com",
  messagingSenderId: "1063866213164",
  appId: "1:1063866213164:web:f111c8d149c83f1852c289",
  measurementId: "G-CVXXP0090X",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const githubProvider = new firebase.auth.GithubAuthProvider();

export default firebase;

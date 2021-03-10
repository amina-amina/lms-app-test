import firebase from 'firebase/APP'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBZkxQeR2HavBLDzCfE2Yd2EoelZxudgc4",
    authDomain: "lms-project-f83bd.firebaseapp.com",
    projectId: "lms-project-f83bd",
    storageBucket: "lms-project-f83bd.appspot.com",
    messagingSenderId: "399541634919",
    appId: "1:399541634919:web:9e5a027af3cdf75cfcd1c2"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  //exporter bd
  export default fireDB;
  //export auth app
  export const auth = app.auth();

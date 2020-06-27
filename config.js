import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAjHhrBI4SAedN08Gn6much4QyBesTUnI0",
  authDomain: "wily-729f1.firebaseapp.com",
  databaseURL: "https://wily-729f1.firebaseio.com",
  projectId: "wily-729f1",
  storageBucket: "wily-729f1.appspot.com",
  messagingSenderId: "104438274555",
  appId: "1:104438274555:web:074e8b0e9913697275535e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
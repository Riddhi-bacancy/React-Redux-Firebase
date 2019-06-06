import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyBc3T3mKFfYej5ou0kWmVRo-RJoJZwqSfY",
    authDomain: "net-ninja-marioplan-d0c1d.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-d0c1d.firebaseio.com",
    projectId: "net-ninja-marioplan-d0c1d",
    storageBucket: "net-ninja-marioplan-d0c1d.appspot.com",
    messagingSenderId: "438535496695",
    appId: "1:438535496695:web:7d9997afe69f4d48"
  };
 
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({ timestampsInSnapshots:true });
  export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyA3Y4ODo--jbWJQmL3EyPbEe5XT3TFdeCk",
    authDomain: "eliteone-app-cc0e2.firebaseapp.com",
    databaseURL: "https://eliteone-app-cc0e2.firebaseio.com",
    projectId: "eliteone-app-cc0e2",
    storageBucket: "eliteone-app-cc0e2.appspot.com",
    messagingSenderId: "18505512980",
    appId: "1:18505512980:web:60225df9a7e1de9b4ccf01",
    measurementId: "G-10ZY1959S2"
};
firebase.initializeApp(config);

export default firebase 
import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDJMFHnPOkCaQ6mNYZ8vraYHXS0MdwMXgs",
    authDomain: "boceto-react.firebaseapp.com",
    databaseURL: "https://boceto-react.firebaseio.com",
    projectId: "boceto-react",
    storageBucket: "boceto-react.appspot.com",
    messagingSenderId: "707200818691",
    appId: "1:707200818691:web:bb453261ced0007a8a7836"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};
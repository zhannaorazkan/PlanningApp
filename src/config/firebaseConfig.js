import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCnd_UyzZlR7uqOECPzPZsniinFZSi4h1U",
    authDomain: "planningapp-a4d53.firebaseapp.com",
    projectId: "planningapp-a4d53",
    storageBucket: "planningapp-a4d53.appspot.com",
    messagingSenderId: "806114583672",
    appId: "1:806114583672:web:7f852723ba9dc581fc398d"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()
export default firebase
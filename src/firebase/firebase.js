import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDLdxdIMqlsg0Zj7loTkF7cQM2MjhC9Rfg",
    authDomain: "design-454c3.firebaseapp.com",
    databaseURL: "https://design-454c3.firebaseio.com",
    projectId: "design-454c3",
    storageBucket: "design-454c3.appspot.com",
    messagingSenderId: "1038180746876",
    appId: "1:1038180746876:web:410343e6cd4241f0"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

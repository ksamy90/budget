import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDLdxdIMqlsg0Zj7loTkF7cQM2MjhC9Rfg",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://design-454c3.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

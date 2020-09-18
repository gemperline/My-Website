import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAI9pTMGXiXPHH9LoV2htUvDl55ku7nCAg",
    authDomain: "my-website-db-e0817.firebaseapp.com",
    databaseURL: "https://my-website-db-e0817.firebaseio.com",
    projectId: "my-website-db-e0817",
    storageBucket: "my-website-db-e0817.appspot.com",
    messagingSenderId: "465095540384",
    appId: "1:465095540384:web:6ed80c47a2e9446a0fd3c5"
});

var db = firebaseApp.firestore();

export { db };
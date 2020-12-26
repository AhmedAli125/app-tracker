import firebase from 'firebase';

var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "project-tracker-f4033.firebaseapp.com",
    databaseURL: "https://project-tracker-f4033.firebaseio.com",
    projectId: "project-tracker-f4033",
    storageBucket: "project-tracker-f4033.appspot.com",
    messagingSenderId: "121509369357",
    appId: "1:121509369357:web:8ee5601d8a8e699b8f6744",
    measurementId: "G-CG6JD6PWYE"
};
const Database = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default Database;

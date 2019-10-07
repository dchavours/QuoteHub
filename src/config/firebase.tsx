import * as firebase from "firebase";


// Config files. 
export const FirebaseConfig = {
    apiKey: 'AIzaSyDtyJMwOUCfo6L03x7mybV3Wr9-Rn3bNG8',
    authDomain: 'quotehub-example.firebaseapp.com',
    databaseURL: 'https://quotehub-example.firebaseio.com',
    projectId: 'quotehub-example',
    storageBucket: 'quotehub-example.appspot.com',
    messagingSenderId: '725694882105',
    appId: '1:725694882105:web:a2324f34f13030c6',
}


// This line starts up the app. 
// Note: "initializeApp" cannot be mentioned twice in the same project. 
firebase.initializeApp(FirebaseConfig);

// This line requests from the firebase database. 
const databaseRef = firebase.database().ref();

// Narrows down the data from const databaseRef. 
export const todosRef = databaseRef.child('messages');


// This file is sent to 

// Apparently the todo saga needs an arbitrary value to have as a place holder when it loops through the Redux store(???). 
// Still have to figure out the logic of the above line. 
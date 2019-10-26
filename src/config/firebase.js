import * as firebase from 'firebase';
import FirebaseConfig from './dev';

firebase.initializeApp(FirebaseConfig);

// Firebase messaging
export const messaging = firebase.messaging();


const databaseRef = firebase.database().ref();
export const todoRef = databaseRef.child('messages');
export const tokenRef = databaseRef.child("userTokens");




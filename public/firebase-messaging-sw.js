importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


// Second re-initilization of config api. 
const config = {
  apiKey: 'AIzaSyDtyJMwOUCfo6L03x7mybV3Wr9-Rn3bNG8',
  authDomain: 'quotehub-example.firebaseapp.com',
  databaseURL: 'https://quotehub-example.firebaseio.com',
  projectId: 'quotehub-example',
  storageBucket: 'quotehub-example.appspot.com',
  messagingSenderId: '725694882105',
  appId: '1:725694882105:web:a2324f34f13030c6',
};


firebase.initializeApp(config);


const messaging = firebase.messaging();

















// // This mofo. 


// // This line is in initalize.js
// // const messaging = firebase.messaging();



// const messaging = firebase.messaging();



// messaging.getToken().then((currentToken) => {
//   if (currentToken) {
//     sendTokenToServer(currentToken);
//     updateUIForPushEnabled(currentToken);
//     console.log(currentToken);
//   } else {
//     // Show permission request.
//     console.log('No Instance ID token available. Request permission to generate one.');
//     // Show permission UI.
//     updateUIForPushPermissionRequired();
//     setTokenSentToServer(false);
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   showToken('Error retrieving Instance ID token. ', err);
//   setTokenSentToServer(false);
// });
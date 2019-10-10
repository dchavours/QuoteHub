importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');



// This mofo. 


// This line is in initalize.js
// const messaging = firebase.messaging();

import messaging from '../src/components/PushNotifications/initialize';



messaging.setBackgroundMessageHandler(function (payload) {
  console.log('We Received a background message ', payload);

  const notificationTitle = 'New Background Message Title';
  const notificationOptions = {
      body: 'Fallback Message body.',
      icon: 'logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
 })
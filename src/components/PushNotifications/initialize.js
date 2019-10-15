import firebase from "firebase";
export function initializePush() {
   const messaging = firebase.messaging();
   messaging
      .requestPermission()
      .then(() => {
         console.log("Have Permission");
         return messaging.getToken();
       })
      .then(token => {
         console.log(token);
         //you probably want to send your new found FCM token to the
         //application server so that they can send any push
         //notification to you. Hence how you do automation. 
         // I can use this system to replace recent enquries counter. 
       })
      .catch(error => {
         if (error.code === "messaging/permission-blocked") {
            console.log("Please Unblock Notification Request Manually");
         } else {
            console.log("Error Occurred", error);
         }
        });

        // Complicating the logic. 
        // messaging.onMessage();
    
}







// I'm going to have to write this so that when I'm in firebase console and I add a new entry in the Realtime Database it is sent as a push notification through the browser.
// I'm going to do this by making an on update function which in the function is an async function that is going to have 'fetch' protocal. 
// Moreover, an update function is ran and then a fetch is ran as well. 
// Moreover, an update function is ran and then a fetch is ran as well. 





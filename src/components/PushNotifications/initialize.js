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
}


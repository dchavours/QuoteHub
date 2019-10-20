import React, { Component } from 'react';
// import notifActions from "../../redux/pushNotifications/actions";
import { messaging } from "../../config/firebase";

// Being the process of sending found token to firebase. 
// const {sendTokenToDB} = notifActions; 

// I want to ask permission within this file. 

export class PushNotifications extends Component {
   

 componentDidMount = () =>{   
  function initializePush(){
   

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

     initializePush();
}





    render() 
    
    
    
    {
        return (
            <div>
                
            </div>
        )
    }
}

export default PushNotifications







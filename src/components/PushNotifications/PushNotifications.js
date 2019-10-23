import React, { Component } from 'react';
import notifActions from "../../redux/pushNotifications/actions";
import { messaging } from "../../config/firebase";
import { connect } from "react-redux";

// Being the process of sending found token to firebase. 
// const {sendTokenToDB} = notifActions; 

// I want to ask permission within this file. 

const {sendTokenToDBRequest} = notifActions

export class PushNotifications extends Component {
   state = {
      tokenValue: '',
      formValue: '',


   };


   // Works but runs in an infinite loop. 
componentDidMount(){
    messaging
       .requestPermission()
       .then(() => {
          console.log("Have Permission");
          return messaging.getToken();
        })
       .then(token => {
          // Fix memory leak issue: https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component
          console.log(token);
          this.setState({ tokenValue: token });
      
        })
       .catch(error => {
          if (error.code === "messaging/permission-blocked") {
             console.log("Please Unblock Notification Request Manually");
          } else {
             console.log("Error Occurred", error);
              }
             });
          }
          

          getState(){
             console.log('currentState=', this.state);
             

          }

    render(){
        return (
            <div>
                  <div className="pushNotificationDiv">{this.getState()}</div>
               

            </div>
        )
    }
}


const mapDispatchToProps = { 

   sendTokenToDB: sendTokenToDBRequest
}


// Connecting PushNotifications to the store. 

export default connect(
   null,
   mapDispatchToProps
)(PushNotifications)
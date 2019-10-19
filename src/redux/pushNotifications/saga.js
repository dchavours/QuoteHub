import { request } from "request";



// Use this for Express API.
function sendPushNotification(){

    var headers = {
        'authorization': 'key=AAAAqPbJITk:APA91bG3oaweVm97etthlYOvjmQvuE1dLWTvaf-BsdTGOj4UMd-6eAEXus0wOM0McQzvSgjTCOufsgjujoBdQxROo6xjDQABRn_n2bYksk4n_eHBFN20TEQJwLhm4GyhBglyHoJx44ml',
        'cache-control': 'no-cache',
        'content-type': 'application/json'
    };
    
    var dataString = '{ "data": { "body": "Buzz! Buzz!", "vibrate": [200, 100, 200, 100, 200, 100, 200], "tag": "vibration-sample" }, "notification": { "title": "Sending to server 3000", "body": "ping", "click_action": "https://google.com", "icon": "favicon.png", "sound": "default" }, "to":"fq_cPCp_E7g:APA91bH0qyAAlNuN8nBeZYb--Biy5WX5RNPOw_gzSuYreieTXyV7Ov0F8kHda7vq37g006bJrYE4VcGXcobHGYISANMK_0jgbqSnMJJcMxZylwto7TVIiYg9fXSafdDI_WQ_nBMD0v4z" }';
    
    var options = {
        url: 'https://fcm.googleapis.com/fcm/send',
        method: 'POST',
        headers: headers,
        body: dataString
    };
    
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
    
    request(options, callback);
    

}



function listTokenField() {
  return new Promise((resolve, reject) => {
    tokenRef.on('value', snapshot => {
      if (snapshot && snapshot.exists()) {
        console.log('VALUES: ', snapshot.val());
        resolve(snapshot.val());
      } else {
        reject(new Error('Error!'));
      }
    });
  });
}

function* asyncTokenList(){
  try {
    const sendToken = yield call(listTokenField);
    yield put(actions.sendMessagingTokenSuccess(sendToken));
  } catch (err) {
    yield put(actions.sendMessagingTokenFail(err));
  }
}







// This will fire and send within a node terminal. 


// var request = require('request');

// var headers = {
//     'authorization': 'key=AAAAqPbJITk:APA91bG3oaweVm97etthlYOvjmQvuE1dLWTvaf-BsdTGOj4UMd-6eAEXus0wOM0McQzvSgjTCOufsgjujoBdQxROo6xjDQABRn_n2bYksk4n_eHBFN20TEQJwLhm4GyhBglyHoJx44ml',
//     'cache-control': 'no-cache',
//     'content-type': 'application/json'
// };

// var dataString = '{ "data": { "body": "Buzz! Buzz!", "vibrate": [200, 100, 200, 100, 200, 100, 200], "tag": "vibration-sample" }, "notification": { "title": "Sending to server 3000", "body": "ping", "click_action": "https://google.com", "icon": "favicon.png", "sound": "default" }, "to":"fq_cPCp_E7g:APA91bH0qyAAlNuN8nBeZYb--Biy5WX5RNPOw_gzSuYreieTXyV7Ov0F8kHda7vq37g006bJrYE4VcGXcobHGYISANMK_0jgbqSnMJJcMxZylwto7TVIiYg9fXSafdDI_WQ_nBMD0v4z" }';

// var options = {
//     url: 'https://fcm.googleapis.com/fcm/send',
//     method: 'POST',
//     headers: headers,
//     body: dataString
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);




// The funcion is going to use an eventChannel to subscribe to the events of firebase. 
  
import { put, fork, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import firebase from "@Common/Firebase";
import { ActionCreators } from "./Actions";

function* startListener() {
  // #1: Creates an eventChannel and starts the listener;
  const channel = new eventChannel(emiter => {
    const listener = firebase
      .database()
      .ref("todos")
      .on("value", snapshot => {
        emiter({ data: snapshot.val() || {} });
      });

    // #2: Return the shutdown method;
    return () => {
      listener.off();
    };
  });

  // #3: Creates a loops to keep the execution in memory;
  while (true) {
    const { data } = yield take(channel);
    // #4: Pause the task until the channel emits a signal and dispatch an action in the store;
    yield put(ActionCreators.updateList(data));
  }
}

export default function* root() {
  yield fork(startListener);
}

// Link to original code. 
// https://github.com/kaiobrito/FirebaseReduxSagaBlogPost/blob/master/src/Components/Todo/List/Sagas.js






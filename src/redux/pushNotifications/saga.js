
import { call, put, takeLatest } from 'redux-saga/effects';
// import takeEvery if an issues may arise. 
// import {todoRef} from '../../config/firebase';
import {tokenRef} from '../../config/firebase';
import actions from './actions';


function requestToken() {
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

 

function* requestTokenHandler() {
  try {
    const note = yield call(requestToken);
    yield put(actions.notifSendSuccess(note));
  } catch (err) {
    yield put(actions.notifSendFail(err));
  }
}


function sendTokenToDBRequest(payload){
  return new Promise((resolve, reject) => {
    tokenRef
      .push()
      .set(payload)
      .then(() => resolve(payload))
      .catch(() => reject(new Error('Error!')));
  });
}

function* sendTokenToDBRequestHandler({payload}){
  try {
    const newTodo = yield call(sendTokenToDBRequest, payload);
    yield put(actions.sendTokenToDBRequest(newTodo));
  } catch (err) {
    yield put(actions.sendTokenToDBFail(err));
  }

}



export default function* tokenSagas() {
  yield takeLatest(actions.NOTIF_SEND_REQUEST, requestTokenHandler);
  yield takeLatest(actions.SEND_TOKEN_REQUEST, sendTokenToDBRequestHandler);
  
}


import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {todoRef} from '../../config/firebase';
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




export default function* tokenSagas() {
  yield takeLatest(actions.NOTIF_SEND_REQUEST, requestTokenHandler);
  
}

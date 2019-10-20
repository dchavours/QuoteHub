
import { call, put, takeLatest } from 'redux-saga/effects';

import {todoRef} from '../../config/firebase';
import {tokenRef} from '../../config/firebase';
import actions from './actions';



function requestToken() {
  return new Promise((resolve, reject) => {
    todoRef.on('value', snapshot => {
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
    const user4 = yield call(requestToken);
    yield put(actions.fetchToDoSuccess(user4));
  } catch (err) {
    yield put(actions.fetchToDoFail(err));
  }
}




export default function* todoSagas() {
  yield takeLatest(actions.ADD_TODO_REQUEST, addToDoRequestHandler);
  yield takeLatest(actions.FETCH_TODO_REQUEST, fetchToDoRequestHandler);
  yield takeLatest(actions.COMPLETE_TODO_REQUEST, completeToDoRequestHandler);
}

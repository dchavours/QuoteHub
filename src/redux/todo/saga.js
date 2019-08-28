import { call, put, takeLatest } from 'redux-saga/effects';

import todoRef from '../../config/firebase';
import actions from './actions';

function addToDo(payload) {
  return new Promise((resolve, reject) => {
    todoRef
      .push()
      .set(payload)
      .then(() => resolve(payload))
      .catch(() => reject(new Error('Error!')));
  });
}

function* addToDoRequestHandler({ payload }) {
  try {
    const newTodo = yield call(addToDo, payload);
    yield put(actions.addToDoSuccess(newTodo));
  } catch (err) {
    yield put(actions.addToDoFail(err));
  }
}

function fetchToDo() {
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

function* fetchToDoRequestHandler() {
  try {
    const user = yield call(fetchToDo);
    yield put(actions.fetchToDoSuccess(user));
  } catch (err) {
    yield put(actions.fetchToDoFail(err));
  }
}

function completeToDo(payload) {
  const nameRef = todoRef.child(payload).child('viewed').ref;
  return nameRef
    .set('true')
    .then(() => 'SUCCESS')
    .catch(() => 'FAILED');
}

function* completeToDoRequestHandler({ payload }) {
  try {
    const res = yield call(completeToDo, payload);
    if (res === 'SUCCESS')
      yield put(actions.fetchToDoRequest());
    yield put(actions.completeToDoSuccess());
  } catch (err) {
    yield put(actions.completeToDoFail(err));
  }
}

export default function* todoSagas() {
  yield takeLatest(actions.ADD_TODO_REQUEST, addToDoRequestHandler);
  yield takeLatest(actions.FETCH_TODO_REQUEST, fetchToDoRequestHandler);
  yield takeLatest(actions.COMPLETE_TODO_REQUEST, completeToDoRequestHandler);
}

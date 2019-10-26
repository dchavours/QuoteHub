import { eventChannel } from 'redux-saga';
import { call, fork, take, put } from 'redux-saga/effects';
import {
  LOGIN,
  LOGIN_SUCCESS,
  AUTH_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS
} from '../../redux/auth/reducers';
import { auth } from '../../config/firebase';

const createAuthChannel = () =>
  eventChannel(emit => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('login');
        const { uid, email, displayName, refreshToken } = user;
        const photoURL =
          user.photoURL || `https://api.adorable.io/avatars/100/${email}`;

        emit({ uid, email, displayName, photoURL, refreshToken });
      } else {
        // No user is signed in.
        console.log('logout');
      }
    });

    return unsubscribe;
  });

function* watchAuthChan() {
  const authChan = yield call(createAuthChannel);

  while (true) {
    const user = yield take(authChan);
    yield put({ type: LOGIN_SUCCESS, payload: { user } });
  }
}

function* loginSaga() {
  yield fork(watchAuthChan);

  while (true) {
    try {
      const { type, payload: { email, password } } = yield take([
        LOGIN,
        LOGIN_SUCCESS
      ]);

      if (type === LOGIN) {
        yield call([auth, auth.signInWithEmailAndPassword], email, password);
      }

      yield take(LOGOUT);
      yield call([auth, auth.signOut]);
      yield put({ type: LOGOUT_SUCCESS });
    } catch (error) {
      yield put({ type: AUTH_FAILED, error: true, payload: { error } });
    }
  }
}

export default loginSaga;

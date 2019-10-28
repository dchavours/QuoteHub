import { fork } from 'redux-saga/effects';
import todoSagas from './todo/saga';
import modalSagas from './modal/saga';
import tokenSagas from './pushNotifications/saga'
import loginSaga from './auth/saga'


// export default function* rootSaga() {
//   yield all([todoSagas(), modalSagas(), tokenSagas()]);
// }


export default function* rootSaga() {
  // Apparently login saga cannot be made all.

  yield fork(todoSagas);
  yield fork(modalSagas);
  yield fork(tokenSagas);
  yield fork(loginSaga);
}

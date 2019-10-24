import TodoReducer from './todo/reducer';
// import ModalReducer from './modal/reducer';

import { reducer as modal } from "redux-modal";

import AuthReducer from './auth/reducer';

import { firebaseReducer as firebase } from "react-redux-firebase"


// import ModalReducer from './modal/reducer';

// Maybe I should have imported notifReducer here. 
// ToDo: Re-attempt FCM/Push notifications using combineReducers, including 
// the notifReducer. 


export default {
  TodoReducer,
  modal,
  AuthReducer,
  firebase

};

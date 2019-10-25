import TodoReducer from './todo/reducer';
// import ModalReducer from './modal/reducer';

import { reducer as modal } from "redux-modal";

import { thunkReducers } from '../redux/reduxThunks/reducers/index';
import { firebaseReducer as firebase } from "react-redux-firebase"




// import ModalReducer from './modal/reducer';

// Maybe I should have imported notifReducer here. 
// ToDo: Re-attempt FCM/Push notifications using combineReducers, including 
// the notifReducer. 


export default {
  thunkReducers,
  TodoReducer,
  modal,
  // AuthReducer,
  firebase

};

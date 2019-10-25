import TodoReducer from './todo/reducer';
// import ModalReducer from './modal/reducer';

import { reducer as modal } from "redux-modal";



import  loginReducer  from '../redux/auth/reducer';
import loading from './asyncLoading/loading'


// import ModalReducer from './modal/reducer';

// Maybe I should have imported notifReducer here. 
// ToDo: Re-attempt FCM/Push notifications using combineReducers, including 
// the notifReducer. 


export default {
  auth: loginReducer,
  TodoReducer,
  modal,
  loading

};

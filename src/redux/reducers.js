import TodoReducer from './todo/reducer';
// import ModalReducer from './modal/reducer';

import { reducer as modal } from "redux-modal";

import  loginReducer  from "../redux/auth/reducers";


export default {
  TodoReducer,
  modal,
  auth: loginReducer,
  // ModalReducer,

};

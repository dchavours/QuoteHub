import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_SUCCESS,
    AUTH_FAILED
  } from '../auth/reducer';
  import { CREATE, REMOVE, CREATED, REMOVED } from './stuff';
  
  export const LOADING = 'LOADING';
  
  const loading = (state = false, action) => {
    switch (action.type) {
      case LOADING:
      case LOGIN:
      case LOGOUT:
      case CREATE:
      case REMOVE:
        return true;
      case LOGIN_SUCCESS:
      case LOGOUT_SUCCESS:
      case AUTH_FAILED:
      case CREATED:
      case REMOVED:
        return false;
      default:
        return state;
    }
  };
  
  export default loading;
  
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './UserReducer';

export const thunkReducers = combineReducers({
  form: formReducer,
  user: UserReducer
});

// export default thunkReducer;
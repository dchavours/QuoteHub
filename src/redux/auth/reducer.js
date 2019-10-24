import actions from './actions';

const initialState = {
    authError: null

}

export default function AuthReducer(state = initialState, action){

    const { type, payload } = action;

  switch (type) {
    case actions.SIGNIN_REQUEST:
        console.log(type, 'Sign in request.')
      return {
        ...state,
        authError: null
      };
    case actions.SIGN_SUCCESS:
        console.log('Sign in succes.')
      return {
        ...state,
        fetchLoading: false,
        todos: payload,
        error: null,
      };
      case actions.SIGN_FAIL:
          return{
            ...state, 
            authError: 'Login fail'
          }
    default:
      return state;
  }

}

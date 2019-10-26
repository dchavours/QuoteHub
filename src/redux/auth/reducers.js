export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password }
});

export const logout = () => ({
  type: LOGOUT
});

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        error: null
      };
    }
    case AUTH_FAILED: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.error
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }
    default:
      return state;
  }
};

export const getUser = state => state.auth.user || {};
export const isAuthenticated = state => state.auth.isAuthenticated || false;

export default loginReducer;
